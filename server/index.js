import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import Groq from 'groq-sdk';
import { stories } from './storiesData.js';



const app = express();
app.use(cors());
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

// Build a compact reference of all stories for the AI to ground its answers in
const storyContext = stories
  .map(
    (s) =>
      `Title: ${s.title}\nRegion: ${s.region}\nCategory: ${s.category}\nSummary: ${s.fullText}\nSource: ${s.source}`
  )
  .join('\n\n---\n\n');

const SYSTEM_PROMPT = `You are the Haboba Storyteller — a warm, knowledgeable AI assistant for a website preserving documented Sudanese folklore and mythology.

You may ONLY answer using the story information provided below. Do not invent new folklore, do not use outside general knowledge about Sudan or mythology beyond what's given here.

If a question cannot be answered from these stories, say so honestly and suggest the visitor browse the Stories page, rather than guessing.

Keep answers warm but concise — 2 to 4 sentences typically. Reference the story title when relevant so users know where to read more.

STORY DATABASE:
${storyContext}`;

// Simple in-memory rate limiting per IP
const requestLog = new Map();
const RATE_LIMIT = 15; // requests
const WINDOW_MS = 60 * 1000; // per 1 minute

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) || []).filter(t => now - t < WINDOW_MS);
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT;
}

app.post('/api/chat', async (req, res) => {
  const ip = req.ip;

  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please wait a moment.' });
  }

  const { message, history } = req.body;

  if (!message || typeof message !== 'string' || message.length > 500) {
    return res.status(400).json({ error: 'Invalid message.' });
  }

  try {
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...(Array.isArray(history) ? history.slice(-6) : []), // keep last 6 turns only
      { role: 'user', content: message }
    ];

    const response = await groq.chat.completions.create({
      model: 'llama-3.1-8b-instant',
      messages,
      temperature: 0.6,
      max_tokens: 400
    });

    const reply = response.choices[0].message.content;
    res.json({ reply });

  } catch (error) {
    console.error('Groq API error:', error.message);
    res.status(500).json({ error: 'The storyteller is resting. Please try again shortly.' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Haboba chat server running on port ${PORT}`);
});
import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Marhaba! Ask me about any story on Haboba — the Nile, Nubian heritage, desert legends, and more.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  async function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const newMessages: Message[] = [...messages, { role: 'user', content: trimmed }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          history: newMessages.slice(0, -1).map(m => ({ role: m.role, content: m.content }))
        })
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || 'Something went wrong');
      }

      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);

    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Connection error';
      setMessages(prev => [...prev, { role: 'assistant', content: `Sorry — ${errorMsg}` }]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-terracotta-500 hover:bg-terracotta-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform hover:scale-105"
        aria-label="Open chat"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[28rem] bg-white rounded-2xl shadow-2xl border border-sand-200 flex flex-col overflow-hidden">
          <div className="bg-nile-800 text-white px-4 py-3 font-serif font-semibold">
            Ask Haboba 🌙
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-terracotta-500 text-white ml-auto'
                    : 'bg-sand-100 text-sand-800'
                }`}
              >
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="bg-sand-100 text-sand-500 px-4 py-2 rounded-2xl text-sm w-fit">
                thinking...
              </div>
            )}
            <div ref={scrollRef} />
          </div>

          <div className="border-t border-sand-200 p-3 flex gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about a story..."
              rows={1}
              className="flex-1 resize-none px-3 py-2 rounded-xl border border-sand-300 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-400"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-nile-700 hover:bg-nile-800 disabled:opacity-50 text-white px-4 rounded-xl text-sm font-medium"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
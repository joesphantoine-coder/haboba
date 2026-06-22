interface ShareData {
  title: string;
  text: string;
  url: string;
}

// Returns true if the native OS share sheet was used, false if we fell
// back to clipboard copy. Lets the caller show the right confirmation.
export async function shareContent(data: ShareData): Promise<{ method: 'native' | 'clipboard' }> {
  if (navigator.share) {
    try {
      await navigator.share(data);
      return { method: 'native' };
    } catch (err) {
      // User cancelled the share sheet — not an error, just exit quietly.
      if ((err as Error).name === 'AbortError') {
        return { method: 'native' };
      }
      // Any other failure falls through to clipboard.
    }
  }

  await navigator.clipboard.writeText(data.url);
  return { method: 'clipboard' };
}
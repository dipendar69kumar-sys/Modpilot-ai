'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

interface AIMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface UseAIOptions {
  provider: 'claude' | 'openai' | 'gemini' | 'grok';
  systemPrompt?: string;
}

export function useAI({ provider, systemPrompt }: UseAIOptions) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (messages: AIMessage[]): Promise<string | null> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages,
          provider,
          systemPrompt,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get AI response');
      }

      const data = await response.json();
      return data.message;
    } catch (err: any) {
      const errorMessage = err.message || 'An error occurred';
      setError(errorMessage);
      toast.error(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading, error };
}

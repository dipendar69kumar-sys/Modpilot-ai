'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Zap } from 'lucide-react';
import { useAI } from '@/hooks/useAI';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  provider?: string;
}

const AI_PROVIDERS = [
  { id: 'claude', name: '🤖 Claude 3.5 Sonnet', color: 'from-purple-500 to-pink-500' },
  { id: 'openai', name: '🟢 GPT-4 Turbo', color: 'from-green-500 to-emerald-500' },
  { id: 'gemini', name: '🔵 Google Gemini', color: 'from-blue-500 to-cyan-500' },
  { id: 'grok', name: '⚡ Grok X.AI', color: 'from-yellow-500 to-orange-500' },
];

export default function AIChat() {
  const [selectedProvider, setSelectedProvider] = useState<'claude' | 'openai' | 'gemini' | 'grok'>('claude');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your ModPilot AI Assistant. I can help you find mods, answer questions, and provide recommendations. Which AI would you like to chat with?',
      provider: 'system',
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { sendMessage, loading } = useAI({ provider: selectedProvider });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    const response = await sendMessage([
      ...messages.filter(m => m.role !== undefined).map(m => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
      })),
      userMessage,
    ]);

    if (response) {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: response, provider: selectedProvider },
      ]);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-800/50 backdrop-blur border-b border-slate-700 p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
            <Zap className="text-yellow-400" />
            <span>ModPilot AI Assistant</span>
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {AI_PROVIDERS.map(provider => (
              <button
                key={provider.id}
                onClick={() => setSelectedProvider(provider.id as any)}
                className={`px-3 py-2 rounded-lg transition text-sm font-medium ${
                  selectedProvider === provider.id
                    ? `bg-gradient-to-r ${provider.color} text-white shadow-lg`
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {provider.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 max-w-4xl w-full mx-auto">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-3 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-700 text-slate-100'
              }`}
            >
              <p className="text-sm">{msg.content}</p>
              {msg.provider && msg.provider !== 'system' && (
                <p className="text-xs mt-2 opacity-70">via {msg.provider}</p>
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-700 text-slate-100 px-4 py-3 rounded-lg flex items-center space-x-2">
              <Loader2 size={18} className="animate-spin" />
              <span>Thinking...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSendMessage} className="border-t border-slate-700 bg-slate-800/50 backdrop-blur p-4">
        <div className="max-w-4xl mx-auto flex gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask me anything about mods..."
            className="flex-1 bg-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            {loading ? (
              <Loader2 size={20} className="animate-spin" />
            ) : (
              <Send size={20} />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

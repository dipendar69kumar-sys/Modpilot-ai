import { Anthropic } from '@anthropic-ai/sdk';
import OpenAI from 'openai';

export interface AIMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface AIResponse {
  provider: string;
  message: string;
  usage?: {
    inputTokens: number;
    outputTokens: number;
  };
}

// Claude (Anthropic)
export class ClaudeProvider {
  private client: Anthropic;

  constructor(apiKey: string) {
    this.client = new Anthropic({
      apiKey: apiKey,
    });
  }

  async sendMessage(messages: AIMessage[], systemPrompt?: string): Promise<AIResponse> {
    try {
      const response = await this.client.messages.create({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024,
        system: systemPrompt || 'You are a helpful AI assistant.',
        messages: messages.map(msg => ({
          role: msg.role,
          content: msg.content,
        })),
      });

      const textBlock = response.content.find(block => block.type === 'text');
      const message = textBlock && 'text' in textBlock ? textBlock.text : 'No response';

      return {
        provider: 'Claude 3.5 Sonnet',
        message,
        usage: {
          inputTokens: response.usage.input_tokens,
          outputTokens: response.usage.output_tokens,
        },
      };
    } catch (error: any) {
      throw new Error(`Claude API Error: ${error.message}`);
    }
  }
}

// OpenAI (ChatGPT)
export class OpenAIProvider {
  private client: OpenAI;

  constructor(apiKey: string) {
    this.client = new OpenAI({
      apiKey: apiKey,
    });
  }

  async sendMessage(messages: AIMessage[], systemPrompt?: string): Promise<AIResponse> {
    try {
      const response = await this.client.chat.completions.create({
        model: 'gpt-4-turbo',
        messages: [
          ...(systemPrompt ? [{ role: 'system' as const, content: systemPrompt }] : []),
          ...messages.map(msg => ({
            role: msg.role,
            content: msg.content,
          })),
        ],
        temperature: 0.7,
        max_tokens: 1024,
      });

      const message = response.choices[0]?.message?.content || 'No response';

      return {
        provider: 'GPT-4 Turbo',
        message,
        usage: {
          inputTokens: response.usage?.prompt_tokens || 0,
          outputTokens: response.usage?.completion_tokens || 0,
        },
      };
    } catch (error: any) {
      throw new Error(`OpenAI API Error: ${error.message}`);
    }
  }
}

// Google Gemini
export class GeminiProvider {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async sendMessage(messages: AIMessage[], systemPrompt?: string): Promise<AIResponse> {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${this.apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: messages.map(msg => ({
              role: msg.role === 'user' ? 'user' : 'model',
              parts: [{ text: msg.content }],
            })),
            systemInstruction: {
              parts: [{ text: systemPrompt || 'You are a helpful AI assistant.' }],
            },
            generationConfig: {
              maxOutputTokens: 1024,
              temperature: 0.7,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Gemini API Error: ${response.statusText}`);
      }

      const data = await response.json();
      const message = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';

      return {
        provider: 'Google Gemini 1.5 Pro',
        message,
      };
    } catch (error: any) {
      throw new Error(`Gemini API Error: ${error.message}`);
    }
  }
}

// Grok (X API)
export class GrokProvider {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async sendMessage(messages: AIMessage[], systemPrompt?: string): Promise<AIResponse> {
    try {
      const response = await fetch('https://api.x.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: 'grok-beta',
          messages: [
            ...(systemPrompt ? [{ role: 'system', content: systemPrompt }] : []),
            ...messages,
          ],
          temperature: 0.7,
          max_tokens: 1024,
        }),
      });

      if (!response.ok) {
        throw new Error(`Grok API Error: ${response.statusText}`);
      }

      const data = await response.json();
      const message = data.choices?.[0]?.message?.content || 'No response';

      return {
        provider: 'Grok (X API)',
        message,
        usage: {
          inputTokens: data.usage?.prompt_tokens || 0,
          outputTokens: data.usage?.completion_tokens || 0,
        },
      };
    } catch (error: any) {
      throw new Error(`Grok API Error: ${error.message}`);
    }
  }
}

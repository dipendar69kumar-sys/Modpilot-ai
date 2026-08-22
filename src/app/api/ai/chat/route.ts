import { NextRequest, NextResponse } from 'next/server';
import { ClaudeProvider, OpenAIProvider, GeminiProvider, GrokProvider } from '@/lib/ai-providers';

export async function POST(req: NextRequest) {
  try {
    const { messages, provider, systemPrompt } = await req.json();

    if (!messages || !provider) {
      return NextResponse.json(
        { error: 'Missing required fields: messages, provider' },
        { status: 400 }
      );
    }

    let aiProvider;
    const apiKey = process.env[`${provider.toUpperCase()}_API_KEY`];

    if (!apiKey) {
      return NextResponse.json(
        { error: `API key not configured for ${provider}` },
        { status: 400 }
      );
    }

    switch (provider.toLowerCase()) {
      case 'claude':
        aiProvider = new ClaudeProvider(apiKey);
        break;
      case 'openai':
        aiProvider = new OpenAIProvider(apiKey);
        break;
      case 'gemini':
        aiProvider = new GeminiProvider(apiKey);
        break;
      case 'grok':
        aiProvider = new GrokProvider(apiKey);
        break;
      default:
        return NextResponse.json(
          { error: `Unknown provider: ${provider}` },
          { status: 400 }
        );
    }

    const response = await aiProvider.sendMessage(messages, systemPrompt);
    return NextResponse.json(response);
  } catch (error: any) {
    console.error('AI API Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

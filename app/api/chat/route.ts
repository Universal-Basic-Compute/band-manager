import { NextRequest, NextResponse } from 'next/server';
import { Message } from '@/app/contexts/ChatContext';

// Define the expected request body structure
type ChatRequestBody = {
  message: string;
  history: Message[];
  systemPrompt?: string;
};

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body: ChatRequestBody = await request.json();
    const { message, history, systemPrompt } = body;

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Format the conversation history for Claude
    const formattedMessages = history.map(msg => ({
      role: msg.role,
      content: msg.content
    }));

    // Format messages correctly for Claude API
    const messages = formattedMessages;
    
    // Claude expects system prompt as a separate parameter, not in the messages array
    const requestBody: any = {
      model: 'claude-3-7-sonnet-20240307',  // Using the latest Claude 3.7 Sonnet model
      max_tokens: 1000,
      messages: messages,
      temperature: 0.7
    };

    // Add system parameter if provided
    if (systemPrompt) {
      requestBody.system = systemPrompt;
    }

    // Call the Claude API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY!,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Claude API error:', errorData);
      
      // Handle rate limiting
      if (response.status === 429) {
        return NextResponse.json(
          { error: 'Rate limit exceeded. Please try again later.' },
          { status: 429 }
        );
      }
      
      // Handle other errors
      return NextResponse.json(
        { error: 'Error from Claude API', details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    return NextResponse.json({
      response: data.content[0].text
    });
  } catch (error) {
    console.error('Error in chat API route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

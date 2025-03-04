import { Message } from '../contexts/ChatContext';

export async function sendChatMessage(message: string, history: Message[], systemPrompt?: string): Promise<string> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        history,
        systemPrompt,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('API error:', errorData);
      throw new Error('Failed to get response from AI');
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error sending message:', error);
    return "I'm sorry, there was an error processing your request. Please try again.";
  }
}

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
      
      // Handle different error status codes
      if (response.status === 429) {
        throw new Error('Rate limit exceeded. Please try again later.');
      } else if (response.status === 401 || response.status === 403) {
        throw new Error('Authentication error. Please check your credentials.');
      } else if (response.status >= 500) {
        throw new Error('Server error. Please try again later.');
      }
      
      // Use the error message from the API if available
      throw new Error(errorData.error || 'Failed to get response from AI');
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error sending message:', error);
    return "I'm sorry, there was an error processing your request. Please try again.";
  }
}

'use client';

import { useState } from 'react';
import { ChatProvider } from '../contexts/ChatContext';
import ChatInterface, { Message } from '../components/Chat/ChatInterface';

// Mock API call - in a real app, this would call your backend
const mockSendMessage = async (message: string): Promise<string> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simple response logic
  if (message.toLowerCase().includes('name')) {
    return "That's a great band name! What genre of music will your band focus on?";
  } else if (message.toLowerCase().includes('genre')) {
    return "Excellent choice! Now, tell me about the visual aesthetic you envision for your band.";
  } else {
    return "I understand. Let's continue developing your band's identity. What else would you like to share about your vision?";
  }
};

export default function CreateBandPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Welcome to Band Manager! I'm your creative assistant, ready to help you form your virtual band. Let's start with the basics - what would you like to name your band?",
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = async (content: string) => {
    setIsLoading(true);
    
    try {
      // Call mock API
      const response = await mockSendMessage(content);
      
      // Add assistant response
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          role: 'assistant',
          content: response,
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle error - maybe add an error message to the chat
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl mb-6 text-[#DFBD69] font-bold">Create Your Band</h1>
        <p className="text-xl mb-10">
          Let's start by defining your band's identity. Our AI assistant will guide you through the process.
        </p>
        
        <div className="h-[600px]">
          <ChatInterface
            title="Band Creation Assistant"
            description="I'll help you define your band's identity, style, and vision."
            initialMessages={messages}
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
            showActionButton={messages.length > 5}
            actionButtonText="Continue to Music Style"
            onActionButtonClick={() => console.log('Moving to next step')}
          />
        </div>
      </div>
    </div>
  );
}

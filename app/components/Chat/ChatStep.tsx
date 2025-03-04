'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ChatInterface, { Message } from './ChatInterface';

type ChatStepProps = {
  title: string;
  description: string;
  chatTitle: string;
  chatDescription?: string;
  initialPrompt: string;
  systemPrompt?: string;
  nextStep?: string;
  onComplete?: (messages: Message[]) => void;
  apiEndpoint?: string; // For real implementation
};

export default function ChatStep({
  title,
  description,
  chatTitle,
  chatDescription,
  initialPrompt,
  systemPrompt,
  nextStep,
  onComplete,
  apiEndpoint,
}: ChatStepProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'initial-message',
      role: 'assistant',
      content: initialPrompt,
      timestamp: new Date(),
    },
  ]);

  // Mock API call - replace with real API in production
  const sendMessage = async (content: string): Promise<string> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real implementation, you would call your API here
    // return fetch(apiEndpoint, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ 
    //     message: content, 
    //     history: messages,
    //     systemPrompt: systemPrompt 
    //   }),
    // }).then(res => res.json()).then(data => data.response);
    
    // For now, return a more contextual response based on the step
    if (content.toLowerCase().includes('name') || content.toLowerCase().includes('identity')) {
      return "That's a great band name! Tell me more about the backstory or origin of your band. How did the members come together?";
    } else if (content.toLowerCase().includes('genre') || content.toLowerCase().includes('music')) {
      return "Excellent choice of genre! Which artists or bands are your main influences for this sound?";
    } else if (content.toLowerCase().includes('visual') || content.toLowerCase().includes('look')) {
      return "I love that visual direction! What kind of color palette do you envision for your band's imagery?";
    } else {
      return `I received your message: "${content}". Let's continue developing this aspect of your band.`;
    }
  };

  const handleSendMessage = async (content: string) => {
    setIsLoading(true);
    
    try {
      // Add user message
      const userMessage: Message = {
        id: `user-${messages.length}`,
        role: 'user',
        content,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, userMessage]);
      
      // Get response
      const response = await sendMessage(content);
      
      // Add assistant response
      const assistantMessage: Message = {
        id: `assistant-${messages.length + 1}`,
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      
      // Check if we should enable completion
      if (messages.length > 4) {
        setIsComplete(true);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleComplete = () => {
    if (onComplete) {
      onComplete(messages);
    }
    
    if (nextStep) {
      router.push(nextStep);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl mb-6 text-[#DFBD69] font-bold">{title}</h1>
        <p className="text-xl mb-10">{description}</p>
        
        <div className="h-[600px]">
          <ChatInterface
            title={chatTitle}
            description={chatDescription}
            initialMessages={messages}
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
            showActionButton={isComplete}
            actionButtonText="Continue"
            onActionButtonClick={handleComplete}
          />
        </div>
      </div>
    </div>
  );
}

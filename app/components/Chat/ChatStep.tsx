'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ChatInterface from './ChatInterface';
import { Message } from '../../contexts/ChatContext';
import { sendChatMessage } from '../../utils/api';

type ChatStepProps = {
  title: string;
  description: string;
  chatTitle: string;
  chatDescription?: string;
  initialPrompt: string;
  systemPrompt?: string;
  nextStep?: string;
  onComplete?: (messages: Message[]) => void;
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
}: ChatStepProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  
  // Initialize messages after component mounts to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    setMessages([
      {
        id: 'initial-message',
        role: 'assistant',
        content: initialPrompt,
        timestamp: new Date(),
      },
    ]);
  }, [initialPrompt]);
  
  // If not mounted yet, return a simple loading state
  if (!mounted) {
    return null;
  }


  const handleSendMessage = async (content: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Add user message
      const userMessage: Message = {
        id: `user-${messages.length}`,
        role: 'user',
        content,
        timestamp: new Date(),
      };
      
      // Update messages with user message
      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);
      
      // Add a temporary loading message
      const loadingMessage: Message = {
        id: `loading-${messages.length + 1}`,
        role: 'assistant',
        content: '...', // Ensure non-empty content
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, loadingMessage]);
      
      // Get response from Claude API
      let response;
      try {
        // Send only the messages up to the user's message (not including the loading message)
        response = await sendChatMessage(content, updatedMessages, systemPrompt);
        
        if (response && response.trim() !== '') {
          // Replace the loading message with the actual response
          setMessages(prev => 
            prev.filter(msg => msg.id !== loadingMessage.id).concat({
              id: `assistant-${messages.length + 1}`,
              role: 'assistant',
              content: response,
              timestamp: new Date(),
            })
          );
        } else {
          // If we got an empty response, use a fallback message
          setMessages(prev => 
            prev.filter(msg => msg.id !== loadingMessage.id).concat({
              id: `assistant-${messages.length + 1}`,
              role: 'assistant',
              content: "I'm sorry, I couldn't generate a proper response.",
              timestamp: new Date(),
            })
          );
        }
      } catch (error) {
        console.error('API error:', error);
        response = "I'm sorry, there was an error processing your request. Please try again.";
        setError('Failed to get a response. Please try again.');
        
        // Replace the loading message with the error message
        setMessages(prev => 
          prev.filter(msg => msg.id !== loadingMessage.id).concat({
            id: `assistant-${messages.length + 1}`,
            role: 'assistant',
            content: response,
            timestamp: new Date(),
          })
        );
      }
      
      // Check if we should enable completion
      if (messages.length > 4) {
        setIsComplete(true);
      }
    } catch (error) {
      console.error('Error in handleSendMessage:', error);
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
        
        {error && (
          <div className="bg-red-500/20 border border-red-500 p-4 rounded-md text-white mb-6">
            {error}
          </div>
        )}
        
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

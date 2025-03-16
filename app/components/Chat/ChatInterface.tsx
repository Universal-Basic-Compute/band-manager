'use client';

import { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import ChatHeader from './ChatHeader';
import { Message } from '../../contexts/ChatContext';

type ChatInterfaceProps = {
  title: string;
  description?: string;
  initialMessages?: Message[];
  onSendMessage: (message: string) => Promise<void>;
  isLoading?: boolean;
  showActionButton?: boolean;
  actionButtonText?: string;
  onActionButtonClick?: () => void;
};

export default function ChatInterface({
  title,
  description,
  initialMessages = [],
  onSendMessage,
  isLoading = false,
  showActionButton = false,
  actionButtonText = 'Continue',
  onActionButtonClick,
}: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Update messages when initialMessages changes
  useEffect(() => {
    if (initialMessages.length > 0) {
      setMessages(initialMessages);
    }
  }, [initialMessages]);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    // Get the messages container element
    const messagesContainer = messagesEndRef.current?.parentElement;
    
    if (messagesContainer) {
      // Check if user is already at or near the bottom
      const isNearBottom = messagesContainer.scrollHeight - messagesContainer.scrollTop - messagesContainer.clientHeight < 100;
      
      // Only auto-scroll if user is already at or near the bottom
      if (isNearBottom) {
        // Use scrollTo instead of scrollIntoView to keep scrolling within the container
        messagesContainer.scrollTo({
          top: messagesContainer.scrollHeight,
          behavior: 'smooth'
        });
      }
    }
  }, [messages]);

  // Add a new message from the user and trigger the onSendMessage callback
  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;
    
    // Call the parent handler to process the message
    await onSendMessage(content);
  };

  return (
    <div className="flex flex-col h-full bg-[#23070A] rounded-xl border border-[#DFBD69]/20 overflow-hidden">
      <ChatHeader 
        title={title} 
        description={description}
        showActionButton={showActionButton}
        actionButtonText={actionButtonText}
        onActionButtonClick={onActionButtonClick}
      />
      
      <div className="flex-grow overflow-y-auto p-4 space-y-4 messages-container">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
}

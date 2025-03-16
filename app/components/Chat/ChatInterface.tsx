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
    // Only scroll if the container is not currently being interacted with
    const scrollContainer = messagesEndRef.current?.parentElement;
    if (scrollContainer) {
      const isUserScrolling = scrollContainer.scrollHeight - scrollContainer.scrollTop !== scrollContainer.clientHeight;
      
      // Only auto-scroll if user is already at the bottom or very close to it
      if (!isUserScrolling) {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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
      
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
}

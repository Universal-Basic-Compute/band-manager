'use client';

import { useState, useRef, useEffect } from 'react';

type ChatInputProps = {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
};

export default function ChatInput({ onSendMessage, isLoading = false }: ChatInputProps) {
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
      
      // Focus back on the input after sending
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="border-t border-[#DFBD69]/20 p-4 bg-[#1A0608]"
    >
      <div className="flex items-center">
        <input
          ref={inputRef}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          disabled={isLoading}
          className="flex-grow p-3 rounded-l-full bg-[#360A0F] border-2 border-r-0 border-[#DFBD69]/20 focus:border-[#DFBD69] focus:outline-none text-white placeholder-gray-400"
        />
        <button
          type="submit"
          disabled={isLoading || !message.trim()}
          className={`p-3 rounded-r-full border-2 border-l-0 border-[#DFBD69] bg-[#DFBD69] text-[#360A0F] font-bold ${
            isLoading || !message.trim() 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:bg-[#DFBD69]/90'
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 text-[#360A0F]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </span>
          ) : (
            'Send'
          )}
        </button>
      </div>
    </form>
  );
}

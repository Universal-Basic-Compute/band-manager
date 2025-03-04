'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ChatInterface from '../../components/Chat/ChatInterface';
import { Message } from '../../contexts/ChatContext';
import { songCreationPrompts } from '../../data/songCreationPrompts';
import { sendChatMessage } from '../../utils/api';

export default function FanInteractionPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [currentFan, setCurrentFan] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    setMessages([
      {
        id: 'initial-message',
        role: 'assistant',
        content: "After your performance, several fans are eager to connect with you! Let me introduce you to Jamie, a 22-year-old college student who discovered your music tonight: \"Your performance was amazing! I especially loved the energy during the chorus of your song. What inspired you to create that particular sound?\"",
        timestamp: new Date(),
      },
    ]);
  }, []);

  const fans = [
    {
      name: "Jamie",
      age: 22,
      occupation: "College Student",
      avatar: "👩‍🎓",
    },
    {
      name: "Marcus",
      age: 35,
      occupation: "Music Producer",
      avatar: "👨‍🎤",
    },
    {
      name: "Sophia",
      age: 28,
      occupation: "Graphic Designer",
      avatar: "👩‍🎨",
    }
  ];

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
      
      setMessages(prev => [...prev, userMessage]);
      
      // Get response from Claude API
      let response;
      try {
        response = await sendChatMessage(content, messages, songCreationPrompts.fans);
        
        // Check if we should switch to the next fan
        if (messages.length > 4 && currentFan < fans.length - 1) {
          const nextFan = currentFan + 1;
          setCurrentFan(nextFan);
          
          // Add context about switching to the next fan
          const fan = fans[nextFan];
          response = `Jamie waves goodbye with a smile. Now here's ${fan.name}, a ${fan.age}-year-old ${fan.occupation} ${fan.avatar}: "${response}"`;
        }
      } catch (error) {
        console.error('API error:', error);
        response = "I'm sorry, there was an error processing your request. Please try again.";
        setError('Failed to get a response. Please try again.');
      }
      
      // Add assistant response
      const assistantMessage: Message = {
        id: `assistant-${messages.length + 1}`,
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      
    } catch (error) {
      console.error('Error in handleSendMessage:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleComplete = () => {
    router.push('/dashboard');
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl mb-6 text-[#DFBD69] font-bold">Fan Interaction</h1>
        <p className="text-xl mb-6">
          Connect with your virtual fans and build relationships with your audience.
        </p>
        
        {error && (
          <div className="bg-red-500/20 border border-red-500 p-4 rounded-md text-white mb-6">
            {error}
          </div>
        )}
        
        <div className="bg-[#360A0F] p-6 rounded-xl border border-[#DFBD69]/20 mb-8">
          <h2 className="text-xl font-serif mb-4 text-[#DFBD69]">Your Growing Fan Base</h2>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {fans.map((fan, index) => (
              <div 
                key={index} 
                className={`flex-shrink-0 p-4 rounded-xl ${
                  index === currentFan 
                    ? 'bg-[#DFBD69]/20 border border-[#DFBD69]' 
                    : 'bg-[#23070A] border border-[#DFBD69]/10'
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-2">{fan.avatar}</div>
                  <p className="text-white font-medium">{fan.name}</p>
                  <p className="text-xs text-gray-400">{fan.age} • {fan.occupation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="h-[500px]">
          <ChatInterface
            title={`Chatting with ${fans[currentFan].name}`}
            description="Build a connection with your fans"
            initialMessages={messages}
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
            showActionButton={messages.length > 8}
            actionButtonText="Complete Fan Interaction"
            onActionButtonClick={handleComplete}
          />
        </div>
      </div>
    </div>
  );
}

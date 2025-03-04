'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ChatInterface from '../../components/Chat/ChatInterface';
import { Message } from '../../contexts/ChatContext';
import { songCreationPrompts } from '../../data/songCreationPrompts';
import { sendChatMessage } from '../../utils/api';

export default function SongGenerationPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [songData, setSongData] = useState<any>(null);
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    setMessages([
      {
        id: 'initial-message',
        role: 'assistant',
        content: "Now it's time to generate your song! Let's review the details and make any final adjustments before creating your track. Is there anything specific about the production you'd like to emphasize?",
        timestamp: new Date(),
      },
    ]);
  }, []);

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
        response = await sendChatMessage(content, messages, songCreationPrompts.song);
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
      
      // Enable generation after a couple of exchanges
      if (messages.length > 3) {
        setIsComplete(true);
      }
    } catch (error) {
      console.error('Error in handleSendMessage:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const generateSong = async () => {
    setIsGenerating(true);
    
    try {
      // Simulate song generation
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Mock song data
      setSongData({
        title: "Your Generated Song",
        duration: "3:42",
        url: "https://example.com/song.mp3", // This would be a real URL in production
      });
      
      // Add completion message
      const completionMessage: Message = {
        id: `completion-${messages.length}`,
        role: 'assistant',
        content: "Your song has been successfully generated! You can now listen to it, save it to your library, or continue to the album creation step.",
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, completionMessage]);
      
    } catch (error) {
      console.error('Error generating song:', error);
      setError('Failed to generate song. Please try again.');
      
      // Add error message
      const errorMessage: Message = {
        id: `error-${messages.length}`,
        role: 'assistant',
        content: "I'm sorry, there was an error generating your song. Please try again.",
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, errorMessage]);
      
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl mb-6 text-[#DFBD69] font-bold">Generate Your Song</h1>
        <p className="text-xl mb-10">
          Finalize your song details and generate your track with AI technology.
        </p>
        
        {error && (
          <div className="bg-red-500/20 border border-red-500 p-4 rounded-md text-white mb-6">
            {error}
          </div>
        )}
        
        {songData ? (
          <div className="bg-[#360A0F] p-8 rounded-xl border border-[#DFBD69]/20 mb-8">
            <h2 className="text-2xl font-serif mb-4 text-[#DFBD69]">Your Generated Song</h2>
            <div className="flex items-center justify-between p-4 bg-[#23070A] rounded-lg">
              <div>
                <h3 className="text-xl text-white">{songData.title}</h3>
                <p className="text-gray-400">{songData.duration}</p>
              </div>
              <div className="flex space-x-4">
                <button className="p-3 rounded-full bg-[#DFBD69] text-[#360A0F]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <button className="p-3 rounded-full bg-[#36E2EC]/20 text-[#36E2EC]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => router.push('/create-song/album')}
                className="px-6 py-3 bg-[#DFBD69] text-[#360A0F] rounded-full font-bold hover:bg-[#DFBD69]/90 transition-all"
              >
                Continue to Album Creation
              </button>
            </div>
          </div>
        ) : (
          <div className="h-[600px]">
            <ChatInterface
              title="Song Production Assistant"
              description="I'll help you finalize your song for generation."
              initialMessages={messages}
              onSendMessage={handleSendMessage}
              isLoading={isLoading}
              showActionButton={isComplete && !isGenerating}
              actionButtonText={isGenerating ? "Generating..." : "Generate Song"}
              onActionButtonClick={generateSong}
            />
          </div>
        )}
        
        {isGenerating && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-[#360A0F] p-8 rounded-xl border border-[#DFBD69] max-w-md w-full">
              <h3 className="text-2xl font-serif mb-4 text-[#DFBD69] text-center">Generating Your Song</h3>
              <div className="flex justify-center mb-6">
                <div className="relative w-24 h-24">
                  <div className="absolute top-0 left-0 w-full h-full border-4 border-[#DFBD69]/20 rounded-full"></div>
                  <div className="absolute top-0 left-0 w-full h-full border-4 border-[#DFBD69] rounded-full border-t-transparent animate-spin"></div>
                </div>
              </div>
              <p className="text-center text-gray-300">
                Our AI is composing your track based on your creative direction. This may take a minute...
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

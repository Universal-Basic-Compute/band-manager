'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ChatStep from '../../components/Chat/ChatStep';
import { songCreationPrompts } from '../../data/songCreationPrompts';

export default function AlbumCreationPage() {
  const router = useRouter();
  const [songs] = useState([
    { id: '1', title: 'Your Generated Song', duration: '3:42' },
    // In a real app, this would be populated from your user's song library
  ]);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl mb-6 text-[#DFBD69] font-bold">Create Your Album</h1>
        <p className="text-xl mb-6">
          Organize your songs into a cohesive album experience.
        </p>
        
        <div className="bg-[#360A0F] p-6 rounded-xl border border-[#DFBD69]/20 mb-8">
          <h2 className="text-xl font-serif mb-4 text-[#DFBD69]">Your Songs</h2>
          <div className="space-y-2">
            {songs.map(song => (
              <div key={song.id} className="flex items-center justify-between p-3 bg-[#23070A] rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#DFBD69]/20 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#DFBD69]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white">{song.title}</p>
                    <p className="text-xs text-gray-400">{song.duration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 rounded-full hover:bg-[#360A0F] text-gray-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-3 border border-dashed border-[#DFBD69]/30 rounded-lg text-center">
            <p className="text-gray-400">Create more songs to add to your album</p>
            <button 
              onClick={() => router.push('/create-song')}
              className="mt-2 px-4 py-2 bg-[#36E2EC]/20 text-[#36E2EC] rounded-full text-sm hover:bg-[#36E2EC]/30 transition-all"
            >
              Create Another Song
            </button>
          </div>
        </div>
        
        <div className="h-[500px]">
          <ChatStep
            title="Album Curation"
            description="Let's organize your songs into a cohesive album."
            chatTitle="Album Curator"
            chatDescription="I'll help you create a compelling album experience."
            initialPrompt="Let's organize your song(s) into an album. What theme or concept would you like for this album? Even with just one song, we can start planning the overall direction."
            systemPrompt={songCreationPrompts.album}
            nextStep="/create-song/concert"
          />
        </div>
      </div>
    </div>
  );
}

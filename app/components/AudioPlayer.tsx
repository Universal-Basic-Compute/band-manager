'use client';

import { useState, useRef, useEffect } from 'react';

type AudioPlayerProps = {
  src: string;
  title: string;
  artist?: string;
};

export default function AudioPlayer({ src, title, artist }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const setAudioData = () => {
      setDuration(audio.duration);
    };
    
    const setAudioTime = () => {
      setCurrentTime(audio.currentTime);
    };
    
    // Events
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    
    // Cleanup
    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
    };
  }, []);
  
  // Format time in minutes and seconds
  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    
    setIsPlaying(!isPlaying);
  };
  
  const handleProgress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const value = parseFloat(e.target.value);
    audio.currentTime = (value / 100) * audio.duration;
    setCurrentTime(audio.currentTime);
  };

  return (
    <div className="bg-[#23070A] p-4 rounded-xl border border-[#DFBD69]/20">
      <audio ref={audioRef} src={src} />
      
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-[#DFBD69]/20 rounded-lg flex items-center justify-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#DFBD69]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        </div>
        <div>
          <h3 className="text-white font-medium">{title}</h3>
          {artist && <p className="text-gray-400 text-sm">{artist}</p>}
        </div>
      </div>
      
      <div className="flex items-center mb-2">
        <span className="text-xs text-gray-400 w-10">{formatTime(currentTime)}</span>
        <input
          type="range"
          value={duration ? (currentTime / duration) * 100 : 0}
          onChange={handleProgress}
          className="flex-grow mx-2 h-1 bg-[#360A0F] rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#DFBD69]"
        />
        <span className="text-xs text-gray-400 w-10 text-right">{formatTime(duration)}</span>
      </div>
      
      <div className="flex justify-center space-x-6">
        <button className="p-2 text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
          </svg>
        </button>
        <button 
          onClick={togglePlay}
          className="p-3 bg-[#DFBD69] text-[#360A0F] rounded-full hover:bg-[#DFBD69]/90"
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>
        <button className="p-2 text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

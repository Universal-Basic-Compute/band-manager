'use client';

import { useEffect, useState } from 'react';
import ChatStep from '../../components/Chat/ChatStep';
import { songCreationPrompts } from '../../data/songCreationPrompts';

export default function SongProductionPage() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return <div className="container mx-auto px-6 py-12">Loading...</div>;
  }
  
  return (
    <ChatStep
      title="Define Your Song's Production"
      description="Let's establish the sonic landscape that will elevate your song."
      chatTitle="Production Assistant"
      chatDescription="I'll help you define the perfect production elements for your song."
      initialPrompt="Now let's focus on the production aspects of your song. What kind of sonic atmosphere or production style do you envision? Think about elements like instrumentation, effects, and overall sound quality."
      systemPrompt={songCreationPrompts.production}
      nextStep="/dashboard"
    />
  );
}

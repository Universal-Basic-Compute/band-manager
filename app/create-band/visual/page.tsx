'use client';

import ChatStep from '../../components/Chat/ChatStep';
import { bandCreationPrompts } from '../../data/systemPrompts';

export default function BandVisualStylePage() {
  return (
    <ChatStep
      title="Define Your Band's Visual Style"
      description="Let's establish the visual aesthetic and imagery for your band."
      chatTitle="Visual Style Assistant"
      chatDescription="I'll help you create a compelling visual identity for your band."
      initialPrompt="Now that we've defined your band's musical style, let's focus on your visual aesthetic. What overall visual vibe or look do you envision for your band? This includes everything from fashion to album art to logo design."
      systemPrompt={bandCreationPrompts.visualStyle}
      nextStep="/create-band/performance"
    />
  );
}

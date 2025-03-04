'use client';

import ChatStep from '../../components/Chat/ChatStep';
import { songCreationPrompts } from '../../data/songCreationPrompts';

export default function ConcertExperiencePage() {
  return (
    <ChatStep
      title="Experience Your Virtual Concert"
      description="Let's visualize your band performing your music live."
      chatTitle="Concert Experience"
      chatDescription="I'll create a narrative of your band's performance."
      initialPrompt="Let's imagine your band performing your new music live! What kind of venue do you envision for this performance? A small intimate club, a mid-sized theater, or perhaps a large festival stage?"
      systemPrompt={songCreationPrompts.concert}
      nextStep="/create-song/fans"
    />
  );
}

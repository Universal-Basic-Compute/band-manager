'use client';

import ChatStep from '../../components/Chat/ChatStep';
import { bandCreationPrompts } from '../../data/systemPrompts';

export default function BandIdentityPage() {
  return (
    <ChatStep
      title="Define Your Band's Identity"
      description="Let's establish the core identity of your band, including name, backstory, and values."
      chatTitle="Band Identity Assistant"
      chatDescription="I'll help you create a compelling identity for your band."
      initialPrompt="Welcome to the first step of creating your band! Let's start with the basics - what would you like to name your band? Think about something that reflects your musical vision."
      systemPrompt={bandCreationPrompts.identity}
      nextStep="/create-band/style"
    />
  );
}

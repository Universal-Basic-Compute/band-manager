'use client';

import ChatStep from '../../components/Chat/ChatStep';
import { songCreationPrompts } from '../../data/songCreationPrompts';

export default function SongConceptPage() {
  return (
    <ChatStep
      title="Develop Your Song Concept"
      description="Let's create a compelling concept for your next hit song."
      chatTitle="Hit Concept Assistant"
      chatDescription="I'll help you craft a memorable song concept with hit potential."
      initialPrompt="Welcome to the first step of creating your song! Let's develop a concept that will resonate with listeners. What theme, emotion, or story would you like to explore in this song?"
      systemPrompt={songCreationPrompts.concept}
      nextStep="/create-song/lyrics"
    />
  );
}

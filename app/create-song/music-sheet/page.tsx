'use client';

import ChatStep from '../../components/Chat/ChatStep';
import { songCreationPrompts } from '../../data/songCreationPrompts';

export default function SongMusicSheetPage() {
  return (
    <ChatStep
      title="Define Your Song's Musical Elements"
      description="Let's establish the musical structure and elements of your song."
      chatTitle="Music Direction Assistant"
      chatDescription="I'll help you define the musical aspects of your song."
      initialPrompt="Now let's focus on the musical elements of your song. What genre or style do you envision for this track? Feel free to mention specific influences or sounds you'd like to incorporate."
      systemPrompt={songCreationPrompts.musicSheet}
      nextStep="/create-song/song"
    />
  );
}

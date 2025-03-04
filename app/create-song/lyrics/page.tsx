'use client';

import ChatStep from '../../components/Chat/ChatStep';
import { songCreationPrompts } from '../../data/songCreationPrompts';

export default function SongLyricsPage() {
  return (
    <ChatStep
      title="Write Your Song Lyrics"
      description="Let's craft compelling lyrics that tell your song's story."
      chatTitle="Lyrical Assistant"
      chatDescription="I'll help you write lyrics that capture your song's concept."
      initialPrompt="Now that we have a strong concept, let's develop the lyrics for your song. Would you like to start with the chorus, verses, or do you have some initial lines in mind?"
      systemPrompt={songCreationPrompts.lyrics}
      nextStep="/create-song/music-sheet"
    />
  );
}

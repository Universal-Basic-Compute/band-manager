'use client';

import ChatStep from '../../components/Chat/ChatStep';

export default function BandStylePage() {
  return (
    <ChatStep
      title="Define Your Band's Musical Style"
      description="Now, let's establish the musical direction and influences for your band."
      chatTitle="Musical Style Assistant"
      chatDescription="I'll help you define your band's unique sound and musical approach."
      initialPrompt="Great! Now that we have your band's identity, let's focus on your musical style. What genre or genres will your band primarily focus on? Feel free to mention specific influences or artists that inspire your sound."
      nextStep="/create-band/visual"
    />
  );
}

'use client';

import ChatStep from '../../components/Chat/ChatStep';
import { bandCreationPrompts } from '../../data/systemPrompts';

export default function BandPerformanceStylePage() {
  return (
    <ChatStep
      title="Define Your Band's Performance Style"
      description="Let's establish how your band presents itself on stage and interacts with audiences."
      chatTitle="Performance Style Assistant"
      chatDescription="I'll help you create a compelling performance identity for your band."
      initialPrompt="Now let's focus on how your band performs. What kind of energy and presence do you envision for your band's live shows? Think about stage presence, audience interaction, and the overall experience."
      systemPrompt={bandCreationPrompts.performanceStyle}
      nextStep="/create-band/growth"
    />
  );
}

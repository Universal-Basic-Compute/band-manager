'use client';

import ChatStep from '../../components/Chat/ChatStep';
import { bandCreationPrompts } from '../../data/systemPrompts';

export default function BandGrowthStrategyPage() {
  return (
    <ChatStep
      title="Define Your Band's Growth Strategy"
      description="Let's establish how your band will build an audience and develop your career."
      chatTitle="Growth Strategy Assistant"
      chatDescription="I'll help you create a strategic approach to growing your band's presence."
      initialPrompt="Finally, let's talk about how you'll grow your band's audience. Who is your target audience? What kind of fans do you want to attract, and where might you find them?"
      systemPrompt={bandCreationPrompts.growthStrategy}
      nextStep="/dashboard"
    />
  );
}

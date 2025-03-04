'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import StepProgress from '../components/Chat/StepProgress';

export default function CreateSongPage() {
  const router = useRouter();
  
  const steps = [
    { id: 'concept', title: 'Concept', isCompleted: false, isCurrent: true },
    { id: 'lyrics', title: 'Lyrics', isCompleted: false, isCurrent: false },
    { id: 'music-sheet', title: 'Music Sheet', isCompleted: false, isCurrent: false },
    { id: 'song', title: 'Song', isCompleted: false, isCurrent: false },
    { id: 'album', title: 'Album', isCompleted: false, isCurrent: false },
    { id: 'concert', title: 'Concert', isCompleted: false, isCurrent: false },
    { id: 'fans', title: 'Fans', isCompleted: false, isCurrent: false },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl mb-6 text-[#DFBD69] font-bold">Create Your Song</h1>
        <p className="text-xl mb-10">
          Follow these steps to craft your song from concept to fan reception. Our AI assistants will guide you through each stage of the creative process.
        </p>
        
        <StepProgress steps={steps} />
        
        <div className="bg-[#23070A] p-8 rounded-xl border border-[#DFBD69]/20">
          <h2 className="text-2xl font-serif mb-4 text-[#DFBD69]">Song Creation Process</h2>
          <p className="mb-6">
            Creating your song involves seven key steps that take you from initial concept to fan interaction. 
            Each step builds on the previous one to create a complete musical journey.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {steps.map((step) => (
              <div key={step.id} className="bg-[#360A0F] p-6 rounded-xl border border-[#DFBD69]/20">
                <h3 className="text-xl font-serif mb-2 text-[#DFBD69]">{step.title}</h3>
                {step.id === 'concept' && (
                  <p className="text-gray-300">Develop a compelling song concept with hit potential.</p>
                )}
                {step.id === 'lyrics' && (
                  <p className="text-gray-300">Craft meaningful lyrics that tell your song's story.</p>
                )}
                {step.id === 'music-sheet' && (
                  <p className="text-gray-300">Define the musical elements and structure of your song.</p>
                )}
                {step.id === 'song' && (
                  <p className="text-gray-300">Generate your complete song with AI technology.</p>
                )}
                {step.id === 'album' && (
                  <p className="text-gray-300">Organize your songs into a cohesive album experience.</p>
                )}
                {step.id === 'concert' && (
                  <p className="text-gray-300">Experience a narrative of your song being performed live.</p>
                )}
                {step.id === 'fans' && (
                  <p className="text-gray-300">Interact with virtual fans and build your audience.</p>
                )}
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Link 
              href="/create-song/concept" 
              className="px-8 py-4 bg-[#DFBD69] text-[#2D1A36] rounded-full font-bold text-lg hover:bg-[#DFBD69]/90 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(223,189,105,0.5)]"
            >
              Start Song Creation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

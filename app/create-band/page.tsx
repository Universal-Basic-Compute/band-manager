'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import StepProgress from '../components/Chat/StepProgress';

export default function CreateBandPage() {
  const router = useRouter();
  
  const steps = [
    { id: 'identity', title: 'Identity', isCompleted: false, isCurrent: true },
    { id: 'style', title: 'Musical Style', isCompleted: false, isCurrent: false },
    { id: 'visual', title: 'Visual Style', isCompleted: false, isCurrent: false },
    { id: 'performance', title: 'Performance', isCompleted: false, isCurrent: false },
    { id: 'growth', title: 'Growth Strategy', isCompleted: false, isCurrent: false },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl mb-6 text-[#DFBD69] font-bold">Create Your Band</h1>
        <p className="text-xl mb-10">
          Follow these steps to define your band's identity, style, and vision. Our AI assistants will guide you through each stage of the process.
        </p>
        
        <StepProgress steps={steps} />
        
        <div className="bg-[#23070A] p-8 rounded-xl border border-[#DFBD69]/20">
          <h2 className="text-2xl font-serif mb-4 text-[#DFBD69]">Band Creation Process</h2>
          <p className="mb-6">
            Creating your virtual band involves defining five key aspects that will shape your band's identity and future. 
            Each step builds on the previous one to create a cohesive band concept.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {steps.map((step) => (
              <div key={step.id} className="bg-[#360A0F] p-6 rounded-xl border border-[#DFBD69]/20">
                <h3 className="text-xl font-serif mb-2 text-[#DFBD69]">{step.title}</h3>
                {step.id === 'identity' && (
                  <p className="text-gray-300">Define your band's name, backstory, values, and overall concept.</p>
                )}
                {step.id === 'style' && (
                  <p className="text-gray-300">Establish your band's genre, influences, and unique sound.</p>
                )}
                {step.id === 'visual' && (
                  <p className="text-gray-300">Create your band's visual aesthetic, imagery, and overall look.</p>
                )}
                {step.id === 'performance' && (
                  <p className="text-gray-300">Define how your band performs and interacts with audiences.</p>
                )}
                {step.id === 'growth' && (
                  <p className="text-gray-300">Plan how your band will build an audience and develop its career.</p>
                )}
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Link 
              href="/create-band/identity" 
              className="px-8 py-4 bg-[#DFBD69] text-[#2D1A36] rounded-full font-bold text-lg hover:bg-[#DFBD69]/90 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(223,189,105,0.5)]"
            >
              Start Band Creation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

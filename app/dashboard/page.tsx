'use client';

import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl mb-6 text-[#DFBD69] font-bold">Your Band Dashboard</h1>
        <p className="text-xl mb-10">
          Congratulations on creating your band! Now you can start producing music, performing, and growing your fan base.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-[#23070A] p-8 rounded-xl border border-[#DFBD69]/20 hover:border-[#DFBD69] transition-all">
            <h2 className="text-2xl font-serif mb-4 text-[#DFBD69]">Create Music</h2>
            <p className="text-gray-300 mb-6">
              Start producing your first song with our AI-powered music creation tools.
            </p>
            <Link 
              href="/create-song" 
              className="px-6 py-3 bg-[#DFBD69] text-[#360A0F] rounded-full font-bold text-sm hover:bg-[#DFBD69]/90 transition-all inline-block"
            >
              Create a Song
            </Link>
          </div>
          
          <div className="bg-[#23070A] p-8 rounded-xl border border-[#DFBD69]/20 hover:border-[#DFBD69] transition-all">
            <h2 className="text-2xl font-serif mb-4 text-[#DFBD69]">Perform Live</h2>
            <p className="text-gray-300 mb-6">
              Schedule and experience virtual performances at different venues.
            </p>
            <Link 
              href="/perform" 
              className="px-6 py-3 bg-transparent border-2 border-[#36E2EC] text-[#36E2EC] rounded-full font-bold text-sm hover:bg-[#36E2EC]/10 transition-all inline-block"
            >
              Schedule a Show
            </Link>
          </div>
          
          <div className="bg-[#23070A] p-8 rounded-xl border border-[#DFBD69]/20 hover:border-[#DFBD69] transition-all">
            <h2 className="text-2xl font-serif mb-4 text-[#DFBD69]">Fan Engagement</h2>
            <p className="text-gray-300 mb-6">
              Interact with your virtual fans and build your audience.
            </p>
            <Link 
              href="/fans" 
              className="px-6 py-3 bg-transparent border-2 border-[#36E2EC] text-[#36E2EC] rounded-full font-bold text-sm hover:bg-[#36E2EC]/10 transition-all inline-block"
            >
              Connect with Fans
            </Link>
          </div>
        </div>
        
        <div className="bg-[#360A0F] p-8 rounded-xl border border-[#DFBD69]/20 mb-12">
          <h2 className="text-2xl font-serif mb-4 text-[#DFBD69]">Your Band Profile</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-2 text-[#36E2EC]">Band Details</h3>
              <p className="text-gray-300 mb-4">
                <strong className="text-white">Name:</strong> Your Band Name<br />
                <strong className="text-white">Genre:</strong> Your Genre<br />
                <strong className="text-white">Formed:</strong> Today<br />
                <strong className="text-white">Members:</strong> Virtual Band<br />
              </p>
              <h3 className="text-xl font-medium mb-2 text-[#36E2EC]">Band Story</h3>
              <p className="text-gray-300">
                Your band's story will appear here. You can edit this information at any time.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2 text-[#36E2EC]">Stats</h3>
              <p className="text-gray-300 mb-4">
                <strong className="text-white">Songs:</strong> 0<br />
                <strong className="text-white">Albums:</strong> 0<br />
                <strong className="text-white">Performances:</strong> 0<br />
                <strong className="text-white">Fans:</strong> 0<br />
              </p>
              <Link 
                href="/edit-band" 
                className="px-6 py-3 bg-transparent border-2 border-[#DFBD69] text-[#DFBD69] rounded-full font-bold text-sm hover:bg-[#DFBD69]/10 transition-all inline-block"
              >
                Edit Band Profile
              </Link>
            </div>
          </div>
        </div>
        
        <div className="bg-[#23070A] p-8 rounded-xl border border-[#DFBD69]/20">
          <h2 className="text-2xl font-serif mb-4 text-[#DFBD69]">Getting Started</h2>
          <p className="mb-6">
            Here are some recommended next steps to begin your band's journey:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
            <li>Create your first song to establish your sound</li>
            <li>Schedule a small venue performance to start building a fan base</li>
            <li>Interact with your initial fans to understand their preferences</li>
            <li>Plan your first EP or album release</li>
          </ol>
          <Link 
            href="/tutorials" 
            className="text-[#36E2EC] hover:underline"
          >
            View detailed tutorials →
          </Link>
        </div>
      </div>
    </div>
  );
}

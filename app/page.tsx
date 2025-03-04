import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#2D1A36] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-16 flex items-center justify-center overflow-hidden">
        {/* Background with subtle animation */}
        <div className="absolute inset-0 bg-[#2D1A36] opacity-90 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#2D1A36]/0 via-[#2D1A36]/50 to-[#2D1A36] z-10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/soundwave.svg')] bg-repeat-x bg-contain animate-pulse opacity-20 z-0"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="flex flex-col items-center text-center">
            <h1 className="font-serif text-6xl md:text-8xl mb-6 text-[#DFBD69] font-bold tracking-tight">
              Band Manager
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl">
              Create, manage, and grow your virtual band with AI. From concept to hit songs—no instruments required.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/create-band" 
                className="px-8 py-4 bg-[#DFBD69] text-[#2D1A36] rounded-full font-bold text-lg hover:bg-[#DFBD69]/90 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(223,189,105,0.5)]"
              >
                Start Your Band
              </Link>
              <Link 
                href="/explore" 
                className="px-8 py-4 bg-transparent border-2 border-[#36E2EC] text-[#36E2EC] rounded-full font-bold text-lg hover:bg-[#36E2EC]/10 transition-all"
              >
                Explore Demos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#231429]">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 text-[#DFBD69]">The Band Manager Experience</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Create Your Band",
                description: "Shape your band's identity, musical style, and visual aesthetic.",
                icon: "🎸",
              },
              {
                title: "Produce Real Music",
                description: "Generate professional-quality tracks with AI assistance.",
                icon: "🎵",
              },
              {
                title: "Virtual Performances",
                description: "Watch your band perform at virtual venues with audience reactions.",
                icon: "🎭",
              },
              {
                title: "Build Your Fan Base",
                description: "Interact with virtual fans who provide feedback on your music.",
                icon: "👥",
              },
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-[#2D1A36] p-8 rounded-xl border border-[#DFBD69]/20 hover:border-[#DFBD69] transition-all group hover:shadow-[0_0_30px_rgba(54,226,236,0.2)]"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-[#DFBD69] text-xl font-serif mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-[#2D1A36]">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 text-[#DFBD69]">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Define Your Band",
                description: "Create your band's identity, style, and musical direction with AI guidance.",
              },
              {
                step: "02",
                title: "Create Music",
                description: "Generate professional-quality songs through our guided creative process.",
              },
              {
                step: "03",
                title: "Grow Your Fanbase",
                description: "Release music, perform at virtual venues, and interact with fans.",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-[#36E2EC] text-8xl font-bold opacity-20 absolute -top-10 -left-6">
                  {step.step}
                </div>
                <h3 className="text-[#DFBD69] text-2xl font-serif mb-4 relative z-10">{step.title}</h3>
                <p className="text-gray-300 relative z-10">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20 bg-[#231429]">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 text-[#DFBD69]">Subscription Options</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic Pass",
                price: "$9.99",
                features: [
                  "Create up to 2 bands",
                  "Generate 5 songs per month",
                  "Basic fan interaction features",
                  "Standard music quality",
                ],
                highlighted: false,
              },
              {
                title: "Pro Pass",
                price: "$19.99",
                features: [
                  "Create up to 5 bands",
                  "Generate 15 songs per month",
                  "Advanced fan interaction",
                  "Premium music quality",
                  "Extended song length",
                  "Priority generation",
                ],
                highlighted: true,
              },
              {
                title: "Legend Pass",
                price: "$39.99",
                features: [
                  "Unlimited bands",
                  "Generate 50 songs per month",
                  "Complete fan ecosystem",
                  "Highest music quality",
                  "Maximum customization",
                  "Early access to new features",
                ],
                highlighted: false,
              },
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`
                  rounded-xl p-8 border 
                  ${plan.highlighted 
                    ? 'bg-gradient-to-b from-[#2D1A36] to-[#231429] border-[#DFBD69] shadow-[0_0_30px_rgba(223,189,105,0.3)]' 
                    : 'bg-[#2D1A36] border-[#DFBD69]/20'}
                `}
              >
                <h3 className="text-2xl font-serif mb-2 text-[#DFBD69]">{plan.title}</h3>
                <div className="text-4xl font-bold mb-6">{plan.price}<span className="text-sm font-normal text-gray-400"> / month</span></div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#36E2EC] mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 rounded-full font-bold transition-all transform hover:scale-105 
                    ${plan.highlighted 
                      ? 'bg-[#DFBD69] text-[#2D1A36] shadow-[0_0_15px_rgba(223,189,105,0.5)]' 
                      : 'bg-transparent border-2 border-[#36E2EC] text-[#36E2EC] hover:bg-[#36E2EC]/10'}`
                  }
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-[#2D1A36]">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 text-[#DFBD69]">Coming Soon</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              { title: "Mobile App", icon: "📱" },
              { title: "Collaboration Mode", icon: "👥" },
              { title: "Enhanced Visuals", icon: "🎨" },
              { title: "Virtual Merch", icon: "👕" },
              { title: "Cross-platform Sharing", icon: "🔄" },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-[#231429] rounded-xl border border-[#DFBD69]/20 hover:border-[#DFBD69] transition-all">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-[#36E2EC]">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#231429] to-[#2D1A36]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-6xl mb-6 text-[#DFBD69]">
            Ready to Start Your Band's Journey?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Turn your musical vision into reality—no instruments required.
          </p>
          <Link 
            href="/signup" 
            className="px-10 py-5 bg-[#DFBD69] text-[#2D1A36] rounded-full font-bold text-xl hover:bg-[#DFBD69]/90 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(223,189,105,0.5)]"
          >
            Create Your Band Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#1A1221] border-t border-[#DFBD69]/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="font-serif text-2xl text-[#DFBD69]">Band Manager</h2>
              <p className="text-gray-400">© 2023 Band Manager. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/about" className="text-gray-300 hover:text-[#36E2EC]">About</Link>
              <Link href="/contact" className="text-gray-300 hover:text-[#36E2EC]">Contact</Link>
              <Link href="/privacy" className="text-gray-300 hover:text-[#36E2EC]">Privacy</Link>
              <Link href="/terms" className="text-gray-300 hover:text-[#36E2EC]">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

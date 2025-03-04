import Link from 'next/link';

export default function Pricing() {
  return (
    <main className="min-h-screen bg-[#360A0F] text-white">
      {/* Hero Section */}
      <section className="relative py-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#360A0F] opacity-90 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#360A0F]/0 via-[#360A0F]/50 to-[#360A0F] z-10"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="flex flex-col items-center text-center">
            <h1 className="font-serif text-5xl md:text-6xl mb-6 text-[#DFBD69] font-bold tracking-tight">
              Choose Your Plan
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl">
              Select the perfect subscription to match your creative ambitions and start your band's journey today.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12 md:py-20 bg-[#23070A]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Basic Plan */}
            <div className="rounded-xl p-8 bg-[#360A0F] border border-[#DFBD69]/20 hover:border-[#DFBD69] transition-all duration-300 flex flex-col h-full">
              <div className="mb-8">
                <h2 className="text-3xl font-serif mb-2 text-[#DFBD69]">Basic Pass</h2>
                <div className="text-5xl font-bold mb-4">$9.99<span className="text-sm font-normal text-gray-400"> / month</span></div>
                <p className="text-gray-300">Perfect for beginners exploring the world of virtual band management.</p>
              </div>
              
              <div className="mb-8 flex-grow">
                <h3 className="text-[#36E2EC] text-lg mb-4 font-medium">What's included:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#36E2EC] mr-2">✓</span>
                    <span>Create up to 2 bands</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#36E2EC] mr-2">✓</span>
                    <span>Generate 5 songs per month</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#36E2EC] mr-2">✓</span>
                    <span>Basic fan interaction features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#36E2EC] mr-2">✓</span>
                    <span>Standard music quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#36E2EC] mr-2">✓</span>
                    <span>Access to core band management tools</span>
                  </li>
                </ul>
              </div>
              
              <Link 
                href="/signup?plan=basic" 
                className="w-full py-3 px-6 rounded-full font-bold transition-all transform hover:scale-105 bg-transparent border-2 border-[#36E2EC] text-[#36E2EC] hover:bg-[#36E2EC]/10 text-center"
              >
                Get Started
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="rounded-xl p-8 bg-gradient-to-b from-[#360A0F] to-[#23070A] border border-[#DFBD69] shadow-[0_0_30px_rgba(223,189,105,0.3)] transform hover:scale-105 transition-all duration-300 flex flex-col h-full relative z-10">
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <span className="bg-[#DFBD69] text-[#360A0F] px-4 py-1 rounded-full text-sm font-bold">MOST POPULAR</span>
              </div>
              
              <div className="mb-8">
                <h2 className="text-3xl font-serif mb-2 text-[#DFBD69]">Pro Pass</h2>
                <div className="text-5xl font-bold mb-4">$19.99<span className="text-sm font-normal text-gray-400"> / month</span></div>
                <p className="text-gray-300">The perfect balance of features for serious band creators.</p>
              </div>
              
              <div className="mb-8 flex-grow">
                <h3 className="text-[#36E2EC] text-lg mb-4 font-medium">What's included:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#36E2EC] mr-2">✓</span>
                    <span>Create up to 5 bands</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#36E2EC] mr-2">✓</span>
                    <span>Generate 15 songs per month</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#36E2EC] mr-2">✓</span>
                    <span>Advanced fan interaction features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#36E2EC] mr-2">✓</span>
                    <span>Premium music quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#36E2EC] mr-2">✓</span>
                    <span>Extended song length</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#36E2EC] mr-2">✓</span>
                    <span>Priority generation queue</span>
                  </li>
                </ul>
              </div>
              
              <Link 
                href="/signup?plan=pro" 
                className="w-full py-3 px-6 rounded-full font-bold transition-all transform hover:scale-105 bg-[#DFBD69] text-[#360A0F] shadow-[0_0_15px_rgba(223,189,105,0.5)] text-center"
              >
                Get Started
              </Link>
            </div>

            {/* Legend Plan */}
            <div className="rounded-xl p-8 bg-[#360A0F] border border-[#DFBD69]/20 hover:border-[#DFBD69] transition-all duration-300 flex flex-col h-full">
              <div className="mb-8">
                <h2 className="text-3xl font-serif mb-2 text-[#DFBD69]">Legend Pass</h2>
                <div className="text-5xl font-bold mb-4">$39.99<span className="text-sm font-normal text-gray-400"> / month</span></div>
                <p className="text-gray-300">Unlimited creative power for the most ambitious band managers.</p>
              </div>
              
              <div className="mb-8 flex-grow">
                <h3 className="text-[#36E2EC] text-lg mb-4 font-medium">What's included:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#36E2EC] mr-2">✓</span>
                    <span>Unlimited bands</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#36E2EC] mr-2">✓</span>
                    <span>Generate 50 songs per month</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#36E2EC] mr-2">✓</span>
                    <span>Complete fan ecosystem</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#36E2EC] mr-2">✓</span>
                    <span>Highest music quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#36E2EC] mr-2">✓</span>
                    <span>Maximum customization options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#36E2EC] mr-2">✓</span>
                    <span>Early access to new features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#36E2EC] mr-2">✓</span>
                    <span>Dedicated support</span>
                  </li>
                </ul>
              </div>
              
              <Link 
                href="/signup?plan=legend" 
                className="w-full py-3 px-6 rounded-full font-bold transition-all transform hover:scale-105 bg-transparent border-2 border-[#36E2EC] text-[#36E2EC] hover:bg-[#36E2EC]/10 text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-[#360A0F]">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl text-center mb-16 text-[#DFBD69]">Feature Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-[768px]">
              <thead>
                <tr className="border-b border-[#DFBD69]/20">
                  <th className="py-4 px-6 text-left text-lg font-serif">Feature</th>
                  <th className="py-4 px-6 text-center text-lg font-serif">Basic Pass</th>
                  <th className="py-4 px-6 text-center text-lg font-serif">Pro Pass</th>
                  <th className="py-4 px-6 text-center text-lg font-serif">Legend Pass</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#DFBD69]/10">
                  <td className="py-4 px-6">Number of Bands</td>
                  <td className="py-4 px-6 text-center">2</td>
                  <td className="py-4 px-6 text-center">5</td>
                  <td className="py-4 px-6 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-[#DFBD69]/10">
                  <td className="py-4 px-6">Songs Per Month</td>
                  <td className="py-4 px-6 text-center">5</td>
                  <td className="py-4 px-6 text-center">15</td>
                  <td className="py-4 px-6 text-center">50</td>
                </tr>
                <tr className="border-b border-[#DFBD69]/10">
                  <td className="py-4 px-6">Song Quality</td>
                  <td className="py-4 px-6 text-center">Standard</td>
                  <td className="py-4 px-6 text-center">Premium</td>
                  <td className="py-4 px-6 text-center">Highest</td>
                </tr>
                <tr className="border-b border-[#DFBD69]/10">
                  <td className="py-4 px-6">Song Length</td>
                  <td className="py-4 px-6 text-center">Standard</td>
                  <td className="py-4 px-6 text-center">Extended</td>
                  <td className="py-4 px-6 text-center">Maximum</td>
                </tr>
                <tr className="border-b border-[#DFBD69]/10">
                  <td className="py-4 px-6">Fan Interaction</td>
                  <td className="py-4 px-6 text-center">Basic</td>
                  <td className="py-4 px-6 text-center">Advanced</td>
                  <td className="py-4 px-6 text-center">Complete Ecosystem</td>
                </tr>
                <tr className="border-b border-[#DFBD69]/10">
                  <td className="py-4 px-6">Priority Generation</td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-red-500">✕</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-[#36E2EC]">✓</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-[#36E2EC]">✓</span>
                  </td>
                </tr>
                <tr className="border-b border-[#DFBD69]/10">
                  <td className="py-4 px-6">Early Access Features</td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-red-500">✕</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-red-500">✕</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-[#36E2EC]">✓</span>
                  </td>
                </tr>
                <tr className="border-b border-[#DFBD69]/10">
                  <td className="py-4 px-6">Dedicated Support</td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-red-500">✕</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-red-500">✕</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-[#36E2EC]">✓</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#23070A]">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl text-center mb-16 text-[#DFBD69]">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#360A0F] p-8 rounded-xl border border-[#DFBD69]/20">
              <h3 className="text-[#DFBD69] text-xl font-serif mb-4">Can I switch plans later?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes will take effect at the start of your next billing cycle.</p>
            </div>
            
            <div className="bg-[#360A0F] p-8 rounded-xl border border-[#DFBD69]/20">
              <h3 className="text-[#DFBD69] text-xl font-serif mb-4">Do unused songs roll over?</h3>
              <p className="text-gray-300">No, song generation credits reset at the beginning of each billing cycle. We encourage you to use all your available credits each month.</p>
            </div>
            
            <div className="bg-[#360A0F] p-8 rounded-xl border border-[#DFBD69]/20">
              <h3 className="text-[#DFBD69] text-xl font-serif mb-4">Who owns the music I create?</h3>
              <p className="text-gray-300">You retain rights to use the music you create for personal enjoyment. For commercial use, please refer to our Terms of Service for detailed licensing information.</p>
            </div>
            
            <div className="bg-[#360A0F] p-8 rounded-xl border border-[#DFBD69]/20">
              <h3 className="text-[#DFBD69] text-xl font-serif mb-4">Is there a free trial?</h3>
              <p className="text-gray-300">Yes, new users can try Band Manager with limited features for 7 days before choosing a subscription plan.</p>
            </div>
            
            <div className="bg-[#360A0F] p-8 rounded-xl border border-[#DFBD69]/20">
              <h3 className="text-[#DFBD69] text-xl font-serif mb-4">Can I cancel anytime?</h3>
              <p className="text-gray-300">Absolutely. You can cancel your subscription at any time, and you'll continue to have access until the end of your current billing period.</p>
            </div>
            
            <div className="bg-[#360A0F] p-8 rounded-xl border border-[#DFBD69]/20">
              <h3 className="text-[#DFBD69] text-xl font-serif mb-4">What payment methods do you accept?</h3>
              <p className="text-gray-300">We accept all major credit cards, PayPal, and Apple Pay. All transactions are securely processed and encrypted.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#23070A] to-[#360A0F]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-[#DFBD69]">
            Ready to Start Your Band's Journey?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Choose the plan that fits your creative ambitions and start creating music today.
          </p>
          <Link 
            href="/signup" 
            className="px-10 py-5 bg-[#DFBD69] text-[#360A0F] rounded-full font-bold text-xl hover:bg-[#DFBD69]/90 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(223,189,105,0.5)]"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </main>
  );
}

import Link from 'next/link';
import Image from 'next/image';

export default function About() {
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
              About Band Manager
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl">
              The story behind the platform that's revolutionizing virtual band creation and management.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-[#23070A]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="font-serif text-4xl mb-6 text-[#DFBD69]">Our Mission</h2>
              <p className="text-lg mb-6 text-gray-300">
                Band Manager was born from a simple yet powerful idea: what if anyone could experience the creative journey of forming a band and producing music, regardless of their musical abilities?
              </p>
              <p className="text-lg mb-6 text-gray-300">
                Our mission is to democratize music creation by combining cutting-edge AI with intuitive creative workflows, allowing everyone to express their musical vision without the traditional barriers of instruments, recording equipment, or technical expertise.
              </p>
              <p className="text-lg text-gray-300">
                We believe that creativity shouldn't be limited by technical skills, and that everyone deserves the chance to bring their musical ideas to life.
              </p>
            </div>
            <div className="md:w-1/2 relative h-80 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-[#DFBD69]/20 to-[#36E2EC]/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-[#DFBD69] text-9xl opacity-20">♪</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-[#360A0F]">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl mb-12 text-[#DFBD69] text-center">Our Story</h2>
          
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 relative h-64 md:h-80">
                <div className="absolute inset-0 bg-[#23070A] rounded-xl overflow-hidden border border-[#DFBD69]/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-[#DFBD69] text-6xl">2022</div>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-[#36E2EC] text-2xl font-serif mb-4">The Idea Takes Shape</h3>
                <p className="text-gray-300 mb-4">
                  It all started when our founder, a music enthusiast with no formal training, wondered why creating music had to be so technically challenging. With advancements in AI technology, particularly in music generation, the possibility of a new kind of creative platform began to emerge.
                </p>
                <p className="text-gray-300">
                  The initial concept was simple: what if we could create a platform where anyone could form a virtual band, define its style and identity, and then actually produce real music that reflected that vision?
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-1/3 relative h-64 md:h-80">
                <div className="absolute inset-0 bg-[#23070A] rounded-xl overflow-hidden border border-[#DFBD69]/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-[#DFBD69] text-6xl">2023</div>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-[#36E2EC] text-2xl font-serif mb-4">Development Begins</h3>
                <p className="text-gray-300 mb-4">
                  With the rapid advancement of AI music generation technologies like Suno, and conversational AI like Claude, the pieces began falling into place. Our team of developers, designers, and music enthusiasts came together to build the first prototype of Band Manager.
                </p>
                <p className="text-gray-300">
                  Early testing revealed something magical: users without any musical background were creating songs they genuinely enjoyed and felt connected to. The platform was doing more than generating music—it was creating a meaningful creative experience.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 relative h-64 md:h-80">
                <div className="absolute inset-0 bg-[#23070A] rounded-xl overflow-hidden border border-[#DFBD69]/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-[#DFBD69] text-6xl">2024</div>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-[#36E2EC] text-2xl font-serif mb-4">Band Manager Launches</h3>
                <p className="text-gray-300 mb-4">
                  After months of development and refinement, Band Manager officially launched. The response exceeded our expectations, with users from all walks of life—from music enthusiasts to complete novices—embracing the platform.
                </p>
                <p className="text-gray-300">
                  What began as a simple idea has evolved into a vibrant creative ecosystem where thousands of virtual bands are born, songs are created, and musical visions come to life every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Technology */}
      <section className="py-16 bg-[#23070A]">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl mb-12 text-[#DFBD69] text-center">Our Technology</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#360A0F] p-8 rounded-xl border border-[#DFBD69]/20 hover:border-[#DFBD69] transition-all">
              <div className="h-16 w-16 rounded-full bg-[#DFBD69]/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#DFBD69" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-[#DFBD69] text-xl font-serif mb-3">Next.js Frontend</h3>
              <p className="text-gray-300">
                Our responsive, modern interface is built with Next.js, ensuring a smooth and intuitive experience across all devices.
              </p>
            </div>
            
            <div className="bg-[#360A0F] p-8 rounded-xl border border-[#DFBD69]/20 hover:border-[#DFBD69] transition-all">
              <div className="h-16 w-16 rounded-full bg-[#DFBD69]/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#DFBD69" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <h3 className="text-[#DFBD69] text-xl font-serif mb-3">Claude AI</h3>
              <p className="text-gray-300">
                Anthropic's Claude powers our creative guidance system, helping users develop band concepts, lyrics, and narratives.
              </p>
            </div>
            
            <div className="bg-[#360A0F] p-8 rounded-xl border border-[#DFBD69]/20 hover:border-[#DFBD69] transition-all">
              <div className="h-16 w-16 rounded-full bg-[#DFBD69]/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#DFBD69" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                </svg>
              </div>
              <h3 className="text-[#DFBD69] text-xl font-serif mb-3">Suno API</h3>
              <p className="text-gray-300">
                Suno's revolutionary AI music generation technology creates professional-quality songs based on user direction.
              </p>
            </div>
            
            <div className="bg-[#360A0F] p-8 rounded-xl border border-[#DFBD69]/20 hover:border-[#DFBD69] transition-all">
              <div className="h-16 w-16 rounded-full bg-[#DFBD69]/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#DFBD69" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
              </div>
              <h3 className="text-[#DFBD69] text-xl font-serif mb-3">Airtable Database</h3>
              <p className="text-gray-300">
                Our flexible Airtable backend manages band data, song catalogs, and fan interactions with scalability in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-[#360A0F]">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl mb-12 text-[#DFBD69] text-center">Meet Our Team</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Rivera",
                role: "Founder & CEO",
                bio: "Music enthusiast and tech entrepreneur with a vision to democratize music creation.",
              },
              {
                name: "Jordan Chen",
                role: "CTO",
                bio: "AI specialist with expertise in music generation technologies and creative applications.",
              },
              {
                name: "Taylor Morgan",
                role: "Creative Director",
                bio: "Former music producer bringing industry experience and creative vision to the platform.",
              },
              {
                name: "Sam Washington",
                role: "Lead Developer",
                bio: "Full-stack engineer passionate about building intuitive creative tools.",
              },
              {
                name: "Riley Kim",
                role: "UX Designer",
                bio: "Designer focused on creating seamless, engaging experiences for creative applications.",
              },
              {
                name: "Casey Johnson",
                role: "Music Advisor",
                bio: "Professional musician helping bridge the gap between AI and authentic musical expression.",
              },
            ].map((member, index) => (
              <div key={index} className="bg-[#23070A] p-8 rounded-xl border border-[#DFBD69]/20">
                <div className="h-24 w-24 rounded-full bg-[#360A0F] border-2 border-[#DFBD69]/30 mb-6 mx-auto"></div>
                <h3 className="text-[#DFBD69] text-xl font-serif mb-1 text-center">{member.name}</h3>
                <p className="text-[#36E2EC] mb-4 text-center">{member.role}</p>
                <p className="text-gray-300 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#23070A]">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl mb-12 text-[#DFBD69] text-center">Our Values</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#360A0F] p-8 rounded-xl border border-[#DFBD69]/20">
              <h3 className="text-[#DFBD69] text-xl font-serif mb-4">Creativity Without Barriers</h3>
              <p className="text-gray-300">
                We believe everyone should be able to express their musical creativity, regardless of technical skill or access to resources. Our platform removes traditional barriers to music creation.
              </p>
            </div>
            
            <div className="bg-[#360A0F] p-8 rounded-xl border border-[#DFBD69]/20">
              <h3 className="text-[#DFBD69] text-xl font-serif mb-4">Human-Centered AI</h3>
              <p className="text-gray-300">
                We develop AI tools that enhance human creativity rather than replace it. Our technology is designed to amplify your creative vision, not dictate it.
              </p>
            </div>
            
            <div className="bg-[#360A0F] p-8 rounded-xl border border-[#DFBD69]/20">
              <h3 className="text-[#DFBD69] text-xl font-serif mb-4">Continuous Innovation</h3>
              <p className="text-gray-300">
                We're committed to pushing the boundaries of what's possible in AI-assisted music creation, constantly improving our platform based on user feedback and technological advancements.
              </p>
            </div>
            
            <div className="bg-[#360A0F] p-8 rounded-xl border border-[#DFBD69]/20">
              <h3 className="text-[#DFBD69] text-xl font-serif mb-4">Inclusive Community</h3>
              <p className="text-gray-300">
                We foster a supportive environment where creators of all backgrounds can share their musical journeys, learn from each other, and celebrate creative expression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#23070A] to-[#360A0F]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-[#DFBD69]">
            Join the Band Manager Community
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Ready to start your musical journey? Create your first band today and experience the future of music creation.
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

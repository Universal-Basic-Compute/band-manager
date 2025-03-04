"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <header className="fixed w-full bg-[#1A0608]/90 backdrop-blur-md z-50 border-b border-[#DFBD69]/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-serif text-2xl text-[#DFBD69] font-bold">Band Manager</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/create-band" className="text-white hover:text-[#36E2EC] transition-colors">
              Create Band
            </Link>
            <Link href="/explore" className="text-white hover:text-[#36E2EC] transition-colors">
              Explore
            </Link>
            <Link href="/pricing" className="text-white hover:text-[#36E2EC] transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-white hover:text-[#36E2EC] transition-colors">
              About
            </Link>
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {session ? (
              <>
                <span className="text-white">Hi, {session.user?.name?.split(' ')[0]}</span>
                <button 
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="px-4 py-2 text-[#36E2EC] border border-[#36E2EC] rounded-full hover:bg-[#36E2EC]/10 transition-colors"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link 
                  href="/login" 
                  className="px-4 py-2 text-[#36E2EC] border border-[#36E2EC] rounded-full hover:bg-[#36E2EC]/10 transition-colors"
                >
                  Log In
                </Link>
                <Link 
                  href="/signup" 
                  className="px-4 py-2 bg-[#DFBD69] text-[#2D1A36] rounded-full hover:bg-[#DFBD69]/90 transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-[#DFBD69]/20">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/create-band" 
                className="text-white hover:text-[#36E2EC] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Create Band
              </Link>
              <Link 
                href="/explore" 
                className="text-white hover:text-[#36E2EC] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Explore
              </Link>
              <Link 
                href="/pricing" 
                className="text-white hover:text-[#36E2EC] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-[#36E2EC] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-[#DFBD69]/20">
                {session ? (
                  <>
                    <span className="text-white">Hi, {session.user?.name?.split(' ')[0]}</span>
                    <button 
                      onClick={() => {
                        signOut({ callbackUrl: '/' });
                        setIsMenuOpen(false);
                      }}
                      className="px-4 py-2 text-center text-[#36E2EC] border border-[#36E2EC] rounded-full hover:bg-[#36E2EC]/10 transition-colors"
                    >
                      Log Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link 
                      href="/login" 
                      className="px-4 py-2 text-center text-[#36E2EC] border border-[#36E2EC] rounded-full hover:bg-[#36E2EC]/10 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Log In
                    </Link>
                    <Link 
                      href="/signup" 
                      className="px-4 py-2 text-center bg-[#DFBD69] text-[#2D1A36] rounded-full hover:bg-[#DFBD69]/90 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const errorParam = searchParams.get("error");

  useEffect(() => {
    if (errorParam) {
      switch (errorParam) {
        case "OAuthSignin":
          setError("An error occurred during the OAuth sign-in process. Please try again.");
          break;
        case "OAuthCallback":
          setError("An error occurred during the OAuth callback. Please try again.");
          break;
        case "OAuthCreateAccount":
          setError("There was an error creating your account. Please try again.");
          break;
        case "EmailCreateAccount":
          setError("There was an error creating your account. Please try again.");
          break;
        case "Callback":
          setError("There was an error during the callback process. Please try again.");
          break;
        case "AccessDenied":
          setError("Access denied. You do not have permission to sign in.");
          break;
        default:
          setError("An error occurred during sign in. Please try again.");
          break;
      }
    }
  }, [errorParam]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl,
      });

      if (!result?.error) {
        router.push(callbackUrl);
      } else {
        setError("Invalid email or password");
        setIsLoading(false);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl });
  };

  return (
    <main className="min-h-screen bg-[#360A0F] text-white">
      <section className="py-20 flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-[#23070A] rounded-xl border border-[#DFBD69]/20">
          <h1 className="font-serif text-3xl mb-6 text-[#DFBD69] text-center">Log In</h1>
          
          {error && (
            <div className="mb-4 p-3 bg-red-900/50 border border-red-500 rounded-md text-white text-sm">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-[#360A0F] border border-[#DFBD69]/30 rounded-md focus:outline-none focus:border-[#DFBD69] text-white"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-[#360A0F] border border-[#DFBD69]/30 rounded-md focus:outline-none focus:border-[#DFBD69] text-white"
                required
              />
            </div>
            
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-6 bg-[#DFBD69] text-[#360A0F] rounded-full font-bold transition-all hover:bg-[#DFBD69]/90 disabled:opacity-70"
              >
                {isLoading ? "Logging in..." : "Log In"}
              </button>
            </div>
          </form>
          
          <div className="mt-6 flex items-center justify-center">
            <span className="bg-[#23070A] px-2 text-gray-400 text-sm">OR</span>
          </div>
          
          <div className="mt-6">
            <button
              onClick={handleGoogleSignIn}
              className="w-full py-3 px-6 bg-white text-gray-800 rounded-full font-bold flex items-center justify-center space-x-2 hover:bg-gray-100 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>
          
          <div className="mt-8 text-center text-sm text-gray-400">
            Don't have an account?{" "}
            <Link href="/signup" className="text-[#36E2EC] hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

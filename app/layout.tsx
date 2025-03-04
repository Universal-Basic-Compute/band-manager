import './globals.css';
import { Playfair_Display, Inter } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthContext from './context/AuthContext';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Band Manager - Create, Manage, and Grow Your Virtual Band with AI',
  description: 'Create, manage, and grow your virtual band with AI. Band Manager is an innovative platform that lets you craft your band\'s identity, produce real music, and build a fan base through intuitive AI-assisted workflows.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#360A0F] text-white">
        <AuthContext>
          <Header />
          <div className="pt-16 min-h-screen flex flex-col"> {/* Add padding to account for fixed header */}
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </AuthContext>
      </body>
    </html>
  );
}

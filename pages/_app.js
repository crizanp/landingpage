import "@/styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import UnderConstruction from '@/components/UnderConstruction';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // If we're not on /under-construction, navigate there.
    if (router.pathname !== '/under-construction') {
      router.replace('/under-construction');
    }
  }, [router]);

  // Show under construction UI while redirecting
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <UnderConstruction />
    </div>
  );
}
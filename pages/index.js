import React, { useState } from 'react';
import Head from 'next/head';
import { Menu, X, Globe, Phone, Mail, MapPin, ArrowRight, CheckCircle, Star, Users, Building, Award, Clock, Shield, HeadphonesIcon, ChevronDown, ChevronUp, Send, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import AppComingSoon from '@/components/AppComingSoon';
import CallToAction from '@/components/Calltoaction';
import FAQ from '@/components/FAQSection';
import ContactUs from '@/components/Contact';
import Footer from '@/components/Footer';

// Main Home Component
export default function Home() {
  const [language, setLanguage] = useState('en');
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'np' : 'en');
  };

  // SEO content based on language
  const seoContent = {
    en: {
      title: "Nepal Shram - श्रम स्वीकृति Online Application | Labor Permit Nepal",
      description: "Apply for Nepal Labor Permit (श्रम स्वीकृति) online. Fast, secure, and government-approved process for Nepali workers. Get your work permit approved in 3-5 days.",
      keywords: "nepal shram, श्रम स्वीकृति, labor permit nepal, nepali shram, work permit nepal, foreign employment permit, labor approval nepal, nepal labor department, overseas employment nepal, shram swikriti",
      ogTitle: "Nepal Shram - Online Labor Permit Application | श्रम स्वीकृति",
      ogDescription: "Official platform for Nepal Labor Permit applications. Fast, secure, and government-approved process for Nepali workers seeking overseas employment.",
      canonicalUrl: "https://nepalishram.com"
    },
    np: {
      title: "नेपाली श्रम - श्रम स्वीकृति अनलाइन आवेदन | Nepal Labor Permit",
      description: "नेपाल श्रम स्वीकृतिको लागि अनलाइन आवेदन दिनुहोस्। छिटो, सुरक्षित, र सरकार अनुमोदित प्रक्रिया। ३-५ दिनमा कामको अनुमति पाउनुहोस्।",
      keywords: "नेपाली श्रम, श्रम स्वीकृति, नेपाल लेबर परमिट, बैदेशिक रोजगार अनुमति, श्रम विभाग नेपाल, बिदेशी रोजगार, नेपाल सरकार श्रम मन्त्रालय",
      ogTitle: "नेपाली श्रम - श्रम स्वीकृति अनलाइन आवेदन",
      ogDescription: "नेपाली श्रमिकहरूका लागि आधिकारिक श्रम स्वीकृति प्लेटफर्म। छिटो, सुरक्षित, र सरकार अनुमोदित प्रक्रिया।",
      canonicalUrl: "https://nepalishram.com/np"
    }
  };

  const currentSeo = seoContent[language];

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    "name": "Nepal Labor Permit Application",
    "alternateName": "श्रम स्वीकृति",
    "description": "Official online platform for Nepal Labor Permit applications for overseas employment",
    "provider": {
      "@type": "GovernmentOrganization",
      "name": "Ministry of Labour, Employment and Social Security, Nepal",
      "url": "https://moless.gov.np"
    },
    "serviceArea": {
      "@type": "Country",
      "name": "Nepal"
    },
    "availableLanguage": ["en", "ne"],
    "url": "https://nepalishram.com",
    "applicationCategory": "Government Service",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "description": "Labor Permit Application Processing",
      "price": "Government fees apply",
      "priceCurrency": "NPR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+977-9842997378",
      "contactType": "customer service",
      "availableLanguage": ["English", "Nepali"]
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is श्रम स्वीकृति (Labor Permit)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "श्रम स्वीकृति (Labor Permit) is a mandatory government approval required for Nepali citizens to work abroad legally. It is issued by the Department of Foreign Employment, Nepal."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to get Nepal Labor Permit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The processing time for Nepal Labor Permit is typically 3-5 working days once all required documents are submitted and verified."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required for श्रम स्वीकृति?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Required documents include passport, citizenship certificate, educational certificates, medical reports, job offer letter, and employment contract."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{currentSeo.title}</title>
        <meta name="title" content={currentSeo.title} />
        <meta name="description" content={currentSeo.description} />
        <meta name="keywords" content={currentSeo.keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content={language === 'en' ? 'English' : 'Nepali'} />
        <meta name="author" content="Nepal Shram" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={currentSeo.canonicalUrl} />
        
        {/* Alternate Language Links */}
        <link rel="alternate" href="https://nepalishram.com" hrefLang="en" />
        <link rel="alternate" href="https://nepalishram.com" hrefLang="ne" />
        <link rel="alternate" href="https://nepalishram.com" hrefLang="x-default" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentSeo.canonicalUrl} />
        <meta property="og:title" content={currentSeo.ogTitle} />
        <meta property="og:description" content={currentSeo.ogDescription} />
        <meta property="og:image" content="https://nepalishram.com/assets/Nepalishram.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Nepal Shram - Labor Permit Application" />
        <meta property="og:site_name" content="Nepal Shram" />
        <meta property="og:locale" content={language === 'en' ? 'en_US' : 'ne_NP'} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={currentSeo.canonicalUrl} />
        <meta property="twitter:title" content={currentSeo.ogTitle} />
        <meta property="twitter:description" content={currentSeo.ogDescription} />
        <meta property="twitter:image" content="https://nepalishram.com/assets/Nepalishram.png" />
        <meta property="twitter:image:alt" content="Nepal Shram - Labor Permit Application" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="NP" />
        <meta name="geo.placename" content="Nepal" />
        <meta name="geo.position" content="27.7172;85.3240" />
        <meta name="ICBM" content="27.7172, 85.3240" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* DNS Prefetch for Performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData)
          }}
        />
        
        {/* Additional Meta Tags for Nepal-specific SEO */}
        <meta name="DC.title" content={currentSeo.title} />
        <meta name="DC.description" content={currentSeo.description} />
        <meta name="DC.creator" content="Nepal Shram" />
        <meta name="DC.language" content={language === 'en' ? 'en' : 'ne'} />
        <meta name="DC.coverage" content="Nepal" />
        
        {/* Government Service Meta Tags */}
        <meta name="service.country" content="Nepal" />
        <meta name="service.type" content="Labor Permit" />
        <meta name="service.category" content="Foreign Employment" />
        <meta name="service.department" content="Department of Foreign Employment" />
        
        {/* Mobile App Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Nepal Shram" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        
        {/* Preload Critical Resources */}
        <link rel="preload" href="/assets/nepalishram_logo.png" as="image" />
        <link rel="preload" href="/assets/heroimage.png" as="image" />
      </Head>

      <div className="font-sans">
        {/* Hidden SEO Content for Better Indexing */}
        <div className="sr-only">
          <h1>Nepal Shram - श्रम स्वीकृति Online Application System</h1>
          <p>
            Apply for Nepal Labor Permit (श्रम स्वीकृति) online through our official government-approved platform. 
            Fast, secure, and reliable process for Nepali workers seeking overseas employment opportunities.
          </p>
          <ul>
            <li>Online Labor Permit Application</li>
            <li>Government Approved Process</li>
            <li>24/7 Customer Support</li>
            <li>Secure Document Upload</li>
            <li>Real-time Application Tracking</li>
            <li>Multiple Payment Options</li>
          </ul>
        </div>

        {/* Main Content */}
        <main>
          <Navbar language={language} toggleLanguage={toggleLanguage} />
          
          <article>
            <header>
              <HeroSection language={language} />
            </header>
            
            <section aria-labelledby="how-it-works-heading">
              <HowItWorks language={language} />
            </section>
            
            <section aria-labelledby="app-coming-soon-heading">
              <AppComingSoon language={language} />
            </section>
            
            <section aria-labelledby="call-to-action-heading">
              <CallToAction language={language} />
            </section>
            
            <section aria-labelledby="faq-heading">
              <FAQ language={language} />
            </section>
            
            <section aria-labelledby="contact-heading">
              <ContactUs language={language} />
            </section>
          </article>
        </main>
        
        <Footer language={language} />
      </div>
    </>
  );
}
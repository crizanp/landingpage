import React, { useState } from 'react';
import Head from 'next/head';
import {
    Menu, X, Globe, Phone, Mail, MapPin,
    Users, Building, Award, Clock, Shield,
    CheckCircle, Star, Target, Heart, Eye
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import ContactUs from '@/components/Contact';
import SimpleFAQ from '@/components/FAQSection';
import Footer from '@/components/Footer';

const AboutUsPage = () => {
    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'np' : 'en');
    };

    // SEO content based on language
    const seoContent = {
        en: {
            title: "About Nepal Shram - Trusted Labor Permit Service Provider | श्रम स्वीकृति",
            description: "Learn about Nepal Shram - your trusted partner for Nepali labor permit services. Government-approved platform with 98% success rate, serving 50,000+ workers worldwide.",
            keywords: "about nepal shram, nepal labor permit company, श्रम स्वीकृति service provider, nepali labor services, foreign employment agency nepal, labor permit consultant, overseas employment nepal, shram swikriti company",
            ogTitle: "About Nepal Shram - Trusted Labor Permit Service Provider",
            ogDescription: "Discover Nepal Shram's mission to empower Nepali workers worldwide. Government-approved, 98% success rate, 50,000+ applications processed.",
            canonicalUrl: "https://nepalishram.com/about"
        },
        np: {
            title: "नेपाली श्रम बारे - भरपर्दो श्रम स्वीकृति सेवा प्रदायक | About Nepal Shram",
            description: "नेपाली श्रम बारे जान्नुहोस् - श्रम स्वीकृति सेवाहरूका लागि तपाईंको भरपर्दो साझेदार। सरकार अनुमोदित प्लेटफर्म, ९८% सफलता दर।",
            keywords: "नेपाली श्रम बारे, श्रम स्वीकृति कम्पनी, बैदेशिक रोजगार एजेन्सी, श्रम परामर्श सेवा, नेपाल लेबर सर्भिस, बिदेशी रोजगार सेवा",
            ogTitle: "नेपाली श्रम बारे - भरपर्दो श्रम स्वीकृति सेवा प्रदायक",
            ogDescription: "नेपाली श्रमिकहरूलाई सशक्त बनाउने हाम्रो मिशन जान्नुहोस्। सरकार अनुमोदित, ९८% सफलता दर।",
            canonicalUrl: "https://nepalishram.com/about-np"
        }
    };

    const currentSeo = seoContent[language];

    // Structured Data for About Page
    const aboutStructuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Nepal Shram",
        "alternateName": "नेपाली श्रम",
        "description": "Leading digital platform for Nepali labor permit services and foreign employment solutions",
        "url": "https://nepalishram.com",
        "logo": "https://nepalishram.com/assets/nepalishram_logo.png",
        "image": "https://nepalishram.com/assets/Nepalishram.png",
        "foundingDate": "2020",
        "founder": {
            "@type": "Person",
            "name": "Nepal Shram Team"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kathmandu",
            "addressLocality": "Kathmandu",
            "addressRegion": "Bagmati",
            "addressCountry": "Nepal"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+977-9842997378",
            "contactType": "customer service",
            "availableLanguage": ["English", "Nepali"],
            "serviceArea": {
                "@type": "Country",
                "name": "Nepal"
            }
        },
        "sameAs": [
            "https://facebook.com/nepalshram",
            "https://twitter.com/nepalshram",
            "https://instagram.com/nepalshram",
            "https://linkedin.com/company/nepalshram"
        ],
        "areaServed": {
            "@type": "Country",
            "name": "Nepal"
        },
        "serviceType": "Labor Permit Services",
        "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "name": "Government Approved Labor Service Provider"
        },
        "knowsAbout": [
            "Nepal Labor Permit",
            "Foreign Employment",
            "श्रम स्वीकृति",
            "Overseas Employment",
            "Labor Migration"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "2500",
            "bestRating": "5",
            "worstRating": "1"
        }
    };

    const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://nepalishram.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "About Us",
                "item": "https://nepalishram.com/about"
            }
        ]
    };

    const translations = {
        en: {
            // Navbar
            navbar: {
                title: "नेपाली श्रम",
                subtitle: "Labor Solutions Nepal",
                home: "Home",
                howItWorks: "How It Works",
                services: "Services",
                about: "About Us",
                news: "News",
                faqs: "FAQs",
                contact: "Contact Us",
                applyNow: "Apply Now",
                language: "नेपाली"
            },
            // About Us Content
            breadcrumb: "Home / About Us",
            title: "About Us",
            subtitle: "Your Trusted Partner for Nepali Labor Services",

            // Hero Section
            heroTitle: "Empowering Nepali Workers Worldwide",
            heroDescription: "We are dedicated to providing smooth, efficient, and reliable labor permit services to Nepali workers seeking job opportunities abroad. And I wish to be a part of your future with us too! Your dreams and efforts truly matter — and we’ll always be here to support you. May your trust and love stay with our service, always working for the well-being of every hardworking soul.",

            // Mission & Vision
            mission: {
                title: "Our Mission",
                description: "To simplify and streamline the labor permit application process for Nepali workers, ensuring they can access international employment opportunities with confidence and ease."
            },
            vision: {
                title: "Our Vision",
                description: "To become the leading digital platform for Nepali labor services, bridging the gap between skilled workers and global employment opportunities."
            },
            values: {
                title: "Our Values",
                description: "We are committed to transparency, reliability, and excellence in serving the Nepali workforce community."
            },

            // Key Features
            features: {
                title: "Why Choose Us",
                items: [
                    {
                        title: "Government Approved Process",
                        description: "Compliant with official regulations",
                        icon: Shield
                    },
                    {
                        title: "Fast Processing",
                        description: "Quick turnaround time for all applications with 3-5 days processing guarantee.",
                        icon: Clock
                    },
                    {
                        title: "Expert Support",
                        description: "Professional guidance throughout the process with 24/7 customer service.",
                        icon: Users
                    },
                    {
                        title: "Secure Platform",
                        description: "Safe and secure handling of your documents with bank-level encryption.",
                        icon: CheckCircle
                    }
                ]
            },

            // Statistics
            stats: [
                { number: "50,000+", label: "Applications Processed" },
                { number: "98%", label: "Success Rate" },
                { number: "24/7", label: "Support Available" },
                { number: "15+", label: "Countries Covered" }
            ],

            // Team
            team: {
                title: "Our Commitment",
                description: "Our experienced team is dedicated to providing exceptional service and support to every client. We understand the importance of your dreams and work tirelessly to make them a reality."
            },

            // Contact CTA
            cta: {
                title: "Ready to Get Started?",
                description: "Join thousands of Nepali workers who have successfully obtained their labor permits through our platform.",
                button: "Apply Now",
                contact: "Contact Us"
            }
        },
        np: {
            // Navbar
            navbar: {
                title: "नेपाली श्रम",
                subtitle: "श्रम समाधान नेपाल",
                home: "गृह पृष्ठ",
                howItWorks: "यसले कसरी काम गर्छ",
                services: "सेवाहरू",
                about: "हाम्रो बारेमा",
                news: "समाचार",
                faqs: "प्रश्न र उत्तर",
                contact: "सम्पर्क गर्नुहोस्",
                applyNow: "अहिले नै आवेदन दिनुहोस्",
                language: "English"
            },
            // About Us Content
            breadcrumb: "गृह पृष्ठ / हाम्रो बारेमा",
            title: "हाम्रो बारेमा",
            subtitle: "नेपाली श्रम सेवाहरूका लागि तपाईंको भरपर्दो साझेदार",

            // Hero Section
            heroTitle: "विश्वव्यापी नेपाली श्रमिकहरूलाई सशक्त बनाउँदै",
            heroDescription: "हामी विदेशमा रोजगारीका अवसरहरू खोज्ने नेपाली श्रमिकहरूलाई निर्बाध, कुशल र भरपर्दो श्रम अनुमति सेवाहरू प्रदान गर्न समर्पित छौं। र हामी प्रति तपाईंहरूको भविष्यमा म पनि सहभागी हुन चाहन्छु। तपाईंहरूको प्रयास र योजनामा हाम्रो साथ र सहयोग निरन्तर रहनेछ। श्रमिकहरूको भलाइका लागि समर्पित हाम्रो सेवामा तपाईंहरूको साथ र विश्वास सधैं रहोस्।",

            // Mission & Vision
            mission: {
                title: "हाम्रो मिशन",
                description: "नेपाली श्रमिकहरूका लागि श्रम अनुमति आवेदन प्रक्रियालाई सरल र सुव्यवस्थित बनाउनु, उनीहरूलाई विश्वास र सहजताका साथ अन्तर्राष्ट्रिय रोजगारी अवसरहरूमा पहुँच गर्न सक्षम बनाउनु।"
            },
            vision: {
                title: "हाम्रो दृष्टिकोण",
                description: "नेपाली श्रम सेवाहरूका लागि अग्रणी डिजिटल प्लेटफर्म बन्नु, दक्ष श्रमिकहरू र विश्वव्यापी रोजगारी अवसरहरूबीचको खाडल पुल्न।"
            },
            values: {
                title: "हाम्रा मूल्यहरू",
                description: "हामी नेपाली श्रमिक समुदायको सेवामा पारदर्शिता, विश्वसनीयता र उत्कृष्टताप्रति प्रतिबद्ध छौं।"
            },

            // Key Features
            features: {
                title: "किन हामीलाई छान्नुहोस्",
                items: [
                    {
                        title: "सरकार अनुमोदित प्रक्रिया",
                        description: "सम्बन्धित सरकारी अधिकारीहरूबाट आधिकारिक प्राधिकरण र सरकारी नियमहरूको पूर्ण अनुपालन।",
                        icon: Shield
                    },
                    {
                        title: "छिटो प्रक्रिया",
                        description: "सबै आवेदनहरूका लागि छिटो समयमा काम पूरा र ३-५ दिनको प्रक्रिया ग्यारेन्टी।",
                        icon: Clock
                    },
                    {
                        title: "विशेषज्ञ सहयोग",
                        description: "सम्पूर्ण प्रक्रियामा पेशेवर मार्गदर्शन र २४/७ ग्राहक सेवा।",
                        icon: Users
                    },
                    {
                        title: "सुरक्षित प्लेटफर्म",
                        description: "तपाईंका कागजातहरूको सुरक्षित र भरपर्दो ह्यान्डलिंग र बैंक-स्तरको एन्क्रिप्शन।",
                        icon: CheckCircle
                    }
                ]
            },

            // Statistics
            stats: [
                { number: "५०,०००+", label: "आवेदन प्रक्रिया" },
                { number: "९८%", label: "सफलता दर" },
                { number: "२४/७", label: "सहयोग उपलब्ध" },
                { number: "१५+", label: "देशहरू समेटिएको" }
            ],

            // Team
            team: {
                title: "हाम्रो प्रतिबद्धता",
                description: "हाम्रो अनुभवी टोली हरेक ग्राहकलाई असाधारण सेवा र सहयोग प्रदान गर्न समर्पित छ। हामी तपाईंका सपनाहरूको महत्त्व बुझ्छौं र तिनीहरूलाई वास्तविकता बनाउन अथक प्रयास गर्छौं।"
            },

            // Contact CTA
            cta: {
                title: "सुरु गर्न तयार हुनुहुन्छ?",
                description: "हाम्रो प्लेटफर्म मार्फत सफलतापूर्वक आफ्नो श्रम अनुमति प्राप्त गर्ने हजारौं नेपाली श्रमिकहरूमा सामेल हुनुहोस्।",
                button: "अहिले नै आवेदन दिनुहोस्",
                contact: "सम्पर्क गर्नुहोस्"
            }
        }
    };

    const t = translations[language];

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
                <link rel="alternate" href="https://nepalishram.com/about" hrefLang="en" />
                <link rel="alternate" href="https://nepalishram.com/about-np" hrefLang="ne" />
                <link rel="alternate" href="https://nepalishram.com/about" hrefLang="x-default" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={currentSeo.canonicalUrl} />
                <meta property="og:title" content={currentSeo.ogTitle} />
                <meta property="og:description" content={currentSeo.ogDescription} />
                <meta property="og:image" content="https://nepalishram.com/assets/Nepalishram.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Nepal Shram - About Us" />
                <meta property="og:site_name" content="Nepal Shram" />
                <meta property="og:locale" content={language === 'en' ? 'en_US' : 'ne_NP'} />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={currentSeo.canonicalUrl} />
                <meta property="twitter:title" content={currentSeo.ogTitle} />
                <meta property="twitter:description" content={currentSeo.ogDescription} />
                <meta property="twitter:image" content="https://nepalishram.com/assets/Nepalishram.png" />
                <meta property="twitter:image:alt" content="Nepal Shram - About Us" />

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

                {/* DNS Prefetch for Performance */}
                <link rel="dns-prefetch" href="//fonts.googleapis.com" />
                <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(aboutStructuredData)
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(breadcrumbStructuredData)
                    }}
                />

                {/* Additional Meta Tags for About Page */}
                <meta name="DC.title" content={currentSeo.title} />
                <meta name="DC.description" content={currentSeo.description} />
                <meta name="DC.creator" content="Nepal Shram" />
                <meta name="DC.language" content={language === 'en' ? 'en' : 'ne'} />
                <meta name="DC.coverage" content="Nepal" />
                <meta name="DC.type" content="Text.AboutPage" />

                {/* Business/Organization Meta Tags */}
                <meta name="business.name" content="Nepal Shram" />
                <meta name="business.type" content="Labor Service Provider" />
                <meta name="business.country" content="Nepal" />
                <meta name="business.industry" content="Foreign Employment Services" />

                {/* Mobile App Meta Tags */}
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Nepal Shram About" />

                {/* Security Headers */}
                <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
                <meta httpEquiv="X-Frame-Options" content="DENY" />
                <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

                {/* Preload Critical Resources */}
                <link rel="preload" href="/assets/nepalishram_logo.png" as="image" />
            </Head>

            <div className="font-sans">
                {/* Hidden SEO Content for Better Indexing */}
                <div className="sr-only">
                    <h1>About Nepal Shram - Leading Labor Permit Service Provider</h1>
                    <p>
                        Nepal Shram is a government-approved digital platform specializing in Nepal labor permit services (श्रम स्वीकृति).
                        We have successfully processed over 50,000 applications with a 98% success rate, helping Nepali workers
                        achieve their dreams of overseas employment.
                    </p>
                    <ul>
                        <li>Government Approved Labor Service Provider</li>
                        <li>50,000+ Applications Successfully Processed</li>
                        <li>98% Success Rate Achievement</li>
                        <li>24/7 Professional Customer Support</li>
                        <li>Services Available in 15+ Countries</li>
                        <li>Secure Document Processing</li>
                        <li>Fast 3-5 Days Processing Time</li>
                    </ul>
                </div>

                {/* Main Content */}
                <main>
                    <Navbar language={language} toggleLanguage={toggleLanguage} />

                    {/* Breadcrumb */}
                    <nav className="bg-gray-50 py-3 sm:py-4" aria-label="Breadcrumb">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <p className="text-sm text-gray-600">{t.breadcrumb}</p>
                        </div>
                    </nav>

                    {/* Hero Section */}
                    <header className="bg-red-50 py-12 sm:py-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                                {t.heroTitle}
                            </h1>
                            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                {t.heroDescription}
                            </p>
                           {/* Intermediary Disclaimer */}
                           <div className="mt-8">
                               <p className="text-xs sm:text-sm text-gray-500 italic max-w-2xl mx-auto bg-yellow-50 border-l-4 border-yellow-400 py-3 px-4 rounded">
                                   {language === 'en'
                                     ? 'The platform serves as an intermediary between the Government of Nepal and individuals seeking labor approval (Shram). It is designed to simplify and streamline the process of obtaining Shram approval.'
                                     : 'यो प्लेटफर्म नेपाल सरकार र श्रम स्वीकृति (श्रम) खोज्ने व्यक्तिहरूबीचको मध्यस्थको रूपमा कार्य गर्दछ। श्रम स्वीकृति प्राप्त गर्ने प्रक्रिया सरल र सुव्यवस्थित बनाउन डिजाइन गरिएको हो।'}
                               </p>
                           </div>
                        </div>
                    </header>

                    {/* Mission, Vision, Values */}
                    <section className="py-12 sm:py-16 bg-white" aria-labelledby="mission-vision-heading">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 id="mission-vision-heading" className="sr-only">
                                Our Mission, Vision, and Values
                            </h2>
                            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-center">
                                <article>
                                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Target className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                                        {t.mission.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">{t.mission.description}</p>
                                </article>

                                <article>
                                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Eye className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                                        {t.vision.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">{t.vision.description}</p>
                                </article>

                                <article>
                                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Heart className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                                        {t.values.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">{t.values.description}</p>
                                </article>
                            </div>
                        </div>
                    </section>

                    {/* Key Features */}
                    <section className="py-12 sm:py-16 bg-white" id="services" aria-labelledby="features-heading">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 id="features-heading" className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10">
                                {t.features.title}
                            </h2>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                {t.features.items.map((feature, index) => {
                                    const Icon = feature.icon;
                                    return (
                                        <article
                                            key={index}
                                            className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                                        >
                                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Icon className="w-8 h-8 text-gray-600" />
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                            <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
                                        </article>
                                    );
                                })}
                            </div>
                        </div>
                    </section>

                    {/* FAQ + Contact */}
                    <SimpleFAQ language={language} />
                    <ContactUs language={language} />
                </main>

                {/* Footer */}
                <Footer language={language} />
            </div>

        </>
    );
};

export default AboutUsPage;
import React, { useState, useEffect } from 'react';
import { Globe, ArrowRight, CheckCircle, Users, FileText, Clock, Shield, Star, Globe2 } from 'lucide-react';
import Link from 'next/link';

const HeroSection = ({ language }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const translations = {
        en: {
            mainTitle: "नेपाली श्रम",
            subtitle: "Labor Solutions Nepal",
            heroTitle: "One App for All Nepali Shram Services",
            heroSubtitle: "Simplifying Government Services with One App",
            description:
                "Apply for श्रम स्वीकृति (Labor Permit) online with ease. Get your work permit approved faster through our streamlined digital platform.",
            applyNow: "Apply Now",
            learnMore: "Learn More",
            trustedBy: "Trusted by 50,000+ Nepali Workers",
            features: [
                "Fast Online Application",
                "Government Approved",
                "24/7 Support",
                "Secure Process",
            ],
            stats: [
                { number: "50,000+", label: "Applications Processed" },
                { number: "98%", label: "Success Rate" },
                { number: "24/7", label: "Support Available" },
                { number: "15+", label: "Countries Covered" },
            ],
        },
        np: {
            mainTitle: "नेपाली श्रम",
            subtitle: "श्रम समाधान नेपाल",
            heroTitle: "सबै नेपाली श्रम सेवाहरूका लागि एउटै एप",
            heroSubtitle: "एकै एपमा सबै सरकारी सेवा सजिलै",
            description:
                "श्रम स्वीकृतिको लागि सजिलैसँग अनलाइन आवेदन दिनुहोस्। हाम्रो सुव्यवस्थित डिजिटल प्लेटफर्म मार्फत छिटो काम अनुमतिको स्वीकृति पाउनुहोस्।",
            applyNow: "अहिले नै आवेदन दिनुहोस्",
            learnMore: "थप जान्नुहोस्",
            trustedBy: "५०,००० भन्दा बढी नेपाली श्रमिकहरूको भरोसा",
            features: [
                "छिटो अनलाइन आवेदन",
                "सरकार अनुमोदित",
                "२४/७ सहयोग",
                "सुरक्षित प्रक्रिया",
            ],
            stats: [
                { number: "५०,०००+", label: "आवेदन प्रक्रिया" },
                { number: "९८%", label: "सफलता दर" },
                { number: "२४/७", label: "सहयोग उपलब्ध" },
                { number: "१५+", label: "देशहरू समेटिएको" },
            ],
        },
    };

    const t = translations[language];

    const backgroundImages = [
        'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=1920&h=1080&fit=crop',
        'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=1920&h=1080&fit=crop',
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop'
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className='bg-white'>
            <div className="relative min-h-screen overflow-hidden lg:mx-5 lg:border lg:border-gray-200 rounded-xl bg-white">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-red-400">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-red-800/90"></div>
                    <div className="absolute inset-0 opacity-10">
                        <div className="w-full h-full" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            backgroundSize: '60px 60px'
                        }}></div>
                    </div>
                </div>
                {/* Content */}
                <div className="relative z-10 min-h-screen flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div className="text-white space-y-8">
                                {/* Main Title */}
                                <div className="space-y-4">
                                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight pt-12 lg:pt-0">
                                        <span className="block text-white">{t.heroTitle.split(' ').slice(0, 2).join(' ')}</span>
                                        <span className="block bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
                                            {t.heroTitle.split(' ').slice(2).join(' ')}
                                        </span>
                                    </h1>
                                </div>

                                {/* Description */}
                                <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                                    {t.description}
                                </p>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    {/* External Link Button */}
                                    <a
                                        href="https://portal.nepalishram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-2xl hover:shadow-red-500/25 transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                                    >
                                        <Globe className="w-5 h-5" />
                                        <span>{t.applyNow}</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </a>

                                    {/* Internal Link Button (no <a> tag inside) */}
                                    <Link
                                        href="/about"
                                        className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
                                    >
                                        {t.learnMore}
                                    </Link>
                                </div>
                            </div>

                            {/* Right Content - Hero Image */}
                            <div className="relative">
                                <div className="relative z-10">
                                    <img
                                        src="assets/heroimage.png"
                                        alt="Nepali Labor Services"
                                        className="w-full h-auto max-w-lg mx-auto rounded-2xl  transform hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Custom Styles */}
                <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
            `}</style>
            </div></div>
    );
};

export default HeroSection;
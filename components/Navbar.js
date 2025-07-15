import React, { useState } from 'react';
import { Menu, X, Globe, Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = ({ language, toggleLanguage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const translations = {
        en: {
            title: "नेपाली श्रम",
            subtitle: "Labor Solutions Nepal",
            home: "Home",
            howItWorks: "How It Works",
            pricing: "Prcing",
            about: "About Us",
            whyUs: "Why Us",
            news: "News",
            faqs: "FAQs",
            contact: "Contact Us",
            applyNow: "Apply Now",
            language: "नेपाली"
        },
        np: {
            title: "नेपाली श्रम",
            subtitle: "श्रम समाधान नेपाल",
            home: "गृह पृष्ठ",
            howItWorks: "यसले कसरी काम गर्छ",
                        pricing: "शुल्क ",

            services: "सेवाहरू",
            about: "हाम्रो बारेमा",
            whyUs: "किन हामी",
            news: "समाचार",
            faqs: "प्रश्न र उत्तर",
            contact: "सम्पर्क गर्नुहोस्",
            applyNow: "अहिले नै आवेदन दिनुहोस्",
            language: "English"
        }
    };

    const t = translations[language];

    return (
        <nav className="bg-white  sticky top-0 z-50">
            {/* Top bar with contact info */}
            <div className="bg-gradient-to-r from-red-700 to-red-600 text-white py-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center text-sm">
                        <div className="hidden md:flex items-center space-x-6">
                            <div className="flex items-center space-x-2">
                                <Phone className="w-4 h-4" />
                                <span>+977-9842997378</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="w-4 h-4" />
                                <span>support@nepalishram.com</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4" />
                                <span>काठमाडौं, नेपाल</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Globe className="w-4 h-4" />
                            <button
                                onClick={toggleLanguage}
                                className="hover:text-red-200 transition-colors duration-200"
                            >
                                {t.language}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main navbar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center no-underline hover:opacity-80">
                            <div className="flex-shrink-0 flex items-center">
                                {/* Government emblem style logo */}
                                <Image
                                    src="/assets/nepalishram_logo.png"
                                    alt="Nepalishram Logo"
                                    width={60}
                                    height={60}
                                />
                                <div className="ml-4">
                                    <h1 className="text-2xl font-bold text-gray-800 leading-tight">{t.title}</h1>
                                    <p className="text-sm text-gray-600 font-medium">{t.subtitle}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <div className="flex items-center space-x-1">

                            <Link href="/#how-it-works" className="text-gray-700 hover:text-blue-600 hover:bg-red-50 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200">
                                {t.howItWorks}
                            </Link>
                            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 hover:bg-red-50 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200">
                                {t.pricing}
                            </Link>
                            <Link href="/about" className="text-gray-700 hover:text-blue-600 hover:bg-red-50 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200">
                                {t.about}
                            </Link>

                            <Link href="#news" className="text-gray-700 hover:text-blue-600 hover:bg-red-50 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200">
                                {t.news}
                            </Link>
                            <Link href="/#faqs" className="text-gray-700 hover:text-blue-600 hover:bg-red-50 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200">
                                {t.faqs}
                            </Link>
                            <Link href="/#contact" className="text-gray-700 hover:text-blue-600 hover:bg-red-50 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200">
                                {t.contact}
                            </Link>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Link href="https://portal.nepalishram.com" target="_blank" rel="noopener noreferrer">
                            <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center space-x-2">
                                <Globe className="w-4 h-4" />
                                <span>{t.applyNow}</span>
                            </button>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-red-600 focus:outline-none focus:text-red-600 p-2"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden pb-4">
                        <div className="px-2 pt-2 pb-3  bg-gray-50 rounded-xl mt-2 shadow-lg">

                            <a href="/#how-it-works" className="text-gray-700 hover:text-red-600 hover:bg-red-50 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200">
                                {t.howItWorks}
                            </a>
                            <a href="/pricing" className="text-gray-700 hover:text-red-600 hover:bg-red-50 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200">
                                {t.pricing}
                            </a>
                            <a href="/about" className="text-gray-700 hover:text-red-600 hover:bg-red-50 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200">
                                {t.about}
                            </a>

                            <a href="/#news" className="text-gray-700 hover:text-red-600 hover:bg-red-50 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200">
                                {t.news}
                            </a>
                            <a href="/#faqs" className="text-gray-700 hover:text-red-600 hover:bg-red-50 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200">
                                {t.faqs}
                            </a>
                            <a href="/#contact" className="text-gray-700 hover:text-red-600 hover:bg-red-50 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200">
                                {t.contact}
                            </a>
                            <div className="px-4 py-3">
                                <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-3 rounded-lg text-sm font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-md flex items-center justify-center space-x-2">
                                    <Globe className="w-4 h-4" />
                                    <span>{t.applyNow}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
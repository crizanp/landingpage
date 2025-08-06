import React, { useState } from 'react';
import Head from 'next/head';
import {
    Menu, X, Globe, Phone, Mail, MapPin,
    Users, Building, Award, Clock, Shield,
    CheckCircle, Star, Target, Heart, Eye, Check
} from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ApplyNowModal from '@/components/ApplyNowModal';
import Link from 'next/link';

const PricingPage = () => {
    const [language, setLanguage] = useState('en');
    const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'np' : 'en');
    };

    const openApplyModal = () => {
        setIsApplyModalOpen(true);
    };

    const closeApplyModal = () => {
        setIsApplyModalOpen(false);
    };

    // SEO content based on language
    const seoContent = {
        en: {
            title: "Nepal Labor Permit Pricing - श्रम स्वीकृति Cost by Age Group | Nepal Shram",
            description: "Check transparent pricing for Nepal Labor Permit (श्रम स्वीकृति) by age group. Rs 7,881 (18-35 years), Rs 9,239 (36-50 years), Rs 13,636 (51-64 years). Includes insurance, welfare fund, SSF.",
            keywords: "nepal labor permit cost, श्रम स्वीकृति price, nepal shram pricing, labor permit fees nepal, foreign employment cost nepal, shram swikriti fees, nepal labor department fees, overseas employment cost",
            ogTitle: "Nepal Labor Permit Pricing - Age-wise Cost for श्रम स्वीकृति",
            ogDescription: "Transparent pricing for Nepal Labor Permit applications. Age-based fees from Rs 7,881 to Rs 13,636. Includes insurance, welfare fund, and SSF contributions.",
            canonicalUrl: "https://nepalishram.com/pricing"
        },
        np: {
            title: "नेपाल श्रम स्वीकृति मूल्य - उमेर अनुसार श्रम परमिट लागत | नेपाली श्रम",
            description: "उमेर समूह अनुसार नेपाल श्रम स्वीकृतिको पारदर्शी मूल्य हेर्नुहोस्। रु ८,०१६ (१८-३५ वर्ष), रु ९,२४४ (३६-५० वर्ष), रु १३,७७६ (५१-६४ वर्ष)।",
            keywords: "नेपाल श्रम परमिट लागत, श्रम स्वीकृति मूल्य, नेपाली श्रम मूल्य निर्धारण, श्रम अनुमति शुल्क, बैदेशिक रोजगार लागत नेपाल",
            ogTitle: "नेपाल श्रम स्वीकृति मूल्य - उमेर अनुसार लागत",
            ogDescription: "नेपाल श्रम स्वीकृति आवेदनको पारदर्शी मूल्य निर्धारण। उमेर आधारित शुल्क रु ८,०१६ देखि रु १३,७७६ सम्म।",
            canonicalUrl: "https://nepalishram.com/np/pricing"
        }
    };

    const currentSeo = seoContent[language];

    // Structured Data for Pricing
    const pricingStructuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Nepal Labor Permit Application",
        "alternateName": "श्रम स्वीकृति",
        "description": "Official Nepal Labor Permit application service with transparent age-based pricing",
        "provider": {
            "@type": "Organization",
            "name": "Nepal Shram",
            "url": "https://nepalishram.com"
        },
        "serviceArea": {
            "@type": "Country",
            "name": "Nepal"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Labor Permit Pricing by Age Group",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "name": "Labor Permit (18-35 years)",
                    "description": "Complete labor permit package for ages 18-35 including insurance, welfare fund, SSF",
                    "price": "8016",
                    "priceCurrency": "NPR",
                    "availability": "https://schema.org/InStock",
                    "validFrom": "2024-01-01",
                    "priceValidUntil": "2024-12-31"
                },
                {
                    "@type": "Offer",
                    "name": "Labor Permit (36-50 years)",
                    "description": "Complete labor permit package for ages 36-50 including insurance, welfare fund, SSF",
                    "price": "9239",
                    "priceCurrency": "NPR",
                    "availability": "https://schema.org/InStock",
                    "validFrom": "2024-01-01",
                    "priceValidUntil": "2024-12-31"
                },
                {
                    "@type": "Offer",
                    "name": "Labor Permit (51-64 years)",
                    "description": "Complete labor permit package for ages 51-64 including insurance, welfare fund, SSF",
                    "price": "13776",
                    "priceCurrency": "NPR",
                    "availability": "https://schema.org/InStock",
                    "validFrom": "2024-01-01",
                    "priceValidUntil": "2024-12-31"
                }
            ]
        },
        "url": "https://nepalishram.com/pricing"
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
                "name": "Pricing",
                "item": "https://nepalishram.com/pricing"
            }
        ]
    };

    const faqStructuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the cost of Nepal Labor Permit for different age groups?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cost varies by age: Rs 7,881 for ages 18-35, Rs 9,239 for ages 36-50, and Rs 13,636 for ages 51-64. This includes insurance, welfare fund, SSF, and service charges."
                }
            },
            {
                "@type": "Question",
                "name": "What is included in the Rs 360 service charge?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Rs 360 service charge includes complete documentation assistance, government liaison support, status tracking, 24/7 customer support, and fast processing guarantee."
                }
            },
            {
                "@type": "Question",
                "name": "Why does labor permit cost increase with age?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cost increases with age primarily due to higher insurance premiums for older workers, as they are considered higher risk for overseas employment."
                }
            }
        ]
    };

    const translations = {
        en: {
            navbar: {
                title: "Nepali Shram",
                subtitle: "Labor Solutions Nepal",
                home: "Home",
                howItWorks: "How It Works",
                services: "Services",
                about: "About",
                news: "News",
                faqs: "FAQs",
                contact: "Contact",
                pricing: "Pricing",
                applyNow: "Apply Now",
                language: "नेपाली"
            },
            breadcrumb: "Home / Pricing",
            title: "Labor Permit Pricing",
            subtitle: "As per Government Rules - Updated 2025",
            heroTitle: "Nepal Labor Permit Cost 2025",
            heroDescription: "All prices follow the official government structure. This includes insurance, welfare, SSF, and service charges. No extra fees.",
            pricingPlans: [
                {
                    ageGroup: "18–35 Years",
                    popular: true,
                    features: [
                        { name: "Insurance", price: "Rs 3,708" },
                        { name: "Welfare Fund", price: "Rs 1,505" },
                        { name: "Social Security Fund", price: "Rs 2,308" },
                        { name: "Service Charge", price: "Rs 360" },
                        { name: "Total", price: "Rs 7,881", highlight: true }
                    ]
                },
                {
                    ageGroup: "36–50 Years",
                    popular: false,
                    features: [
                        { name: "Insurance", price: "Rs 4,931" },
                        { name: "Welfare Fund", price: "Rs 1,505" },
                        { name: "Social Security Fund", price: "Rs 2,308" },
                        { name: "Service Charge", price: "Rs 360" },
                        { name: "Total", price: "Rs 9,104", highlight: true }
                    ]
                },
                {
                    ageGroup: "51–64 Years",
                    popular: false,
                    features: [
                        { name: "Insurance", price: "Rs 9,463" },
                        { name: "Welfare Fund", price: "Rs 1,505" },
                        { name: "Social Security Fund", price: "Rs 2,308" },
                        { name: "Service Charge", price: "Rs 360" },
                        { name: "Total", price: "Rs 13,636", highlight: true }
                    ]
                }
            ],
            serviceFeatures: [
                "Help with all documents",
                "Support for government submissions",
                "Application tracking",
                "24/7 support",
                "Process time: 3–5 working days",
                "Secure online payment"
            ],
            additionalInfo: {
                title: "What is covered in Rs 360 Service Fee?",
                description: "Full support from form fill-up to approval. No confusion. No hidden cost."
            },
            cta: {
                title: "Apply for Labor Permit",
                description: "Select your age group and start now. Simple, secure, and approved by the Government of Nepal.",
                button: "Apply Now",
                contact: "Need Help? Contact Us"
            },
            seoText: {
                title: "Nepal Labor Permit Cost 2025",
                content: "This page explains the full cost of getting a Nepal Labor Permit as of 2025. It includes every official fee required, so you know what to expect."
            }
        },

        np: {
            navbar: {
                title: "नेपाली श्रम",
                subtitle: "श्रम समाधान नेपाल",
                home: "गृहपृष्ठ",
                howItWorks: "यसले कसरी काम गर्छ",
                services: "सेवाहरू",
                about: "हाम्रो बारेमा",
                news: "समाचार",
                faqs: "प्रश्नहरू",
                contact: "सम्पर्क",
                pricing: "मूल्य",
                applyNow: "आवेदन दिनुहोस्",
                language: "English"
            },
            breadcrumb: "गृहपृष्ठ / मूल्य",
            title: "श्रम स्वीकृति मूल्य",
            subtitle: "सरकारी नियम अनुसार - २०२५",
            heroTitle: "नेपाल श्रम स्वीकृति लागत २०२५",
            heroDescription: "सबै शुल्क नेपाल सरकारको संरचना अनुसार छन्। बीमा, कल्याण कोष, सामाजिक सुरक्षा कोष, र सेवा शुल्क समावेश छ। कुनै लुकेको शुल्क छैन।",
            pricingPlans: [
                {
                    ageGroup: "१८–३५ वर्ष",
                    popular: true,
                    features: [
                        { name: "बीमा", price: "रु ३,७०८" },
                        { name: "कल्याण कोष", price: "रु १,५०५" },
                        { name: "सामाजिक सुरक्षा कोष", price: "रु २,३०८" },
                        { name: "सेवा शुल्क", price: "रु ५००" },
                        { name: "कुल", price: "रु ८,०१६", highlight: true }
                    ]
                },
                {
                    ageGroup: "३६–५० वर्ष",
                    popular: false,
                    features: [
                        { name: "बीमा", price: "रु ४,९३१" },
                        { name: "कल्याण कोष", price: "रु १,५०५" },
                        { name: "सामाजिक सुरक्षा कोष", price: "रु २,३०८" },
                        { name: "सेवा शुल्क", price: "रु ५००" },
                        { name: "कुल", price: "रु ९,२४४", highlight: true }
                    ]
                },
                {
                    ageGroup: "५१–६४ वर्ष",
                    popular: false,
                    features: [
                        { name: "बीमा", price: "रु ९,४६३" },
                        { name: "कल्याण कोष", price: "रु १,५०५" },
                        { name: "सामाजिक सुरक्षा कोष", price: "रु २,३०८" },
                        { name: "सेवा शुल्क", price: "रु ५००" },
                        { name: "कुल", price: "रु १३,७७६", highlight: true }
                    ]
                }
            ],
            serviceFeatures: [
                "सबै कागजात तयारीमा सहयोग",
                "सरकारी पेश गर्ने काममा सहयोग",
                "आवेदन ट्र्याक गर्न मिल्ने",
                "२४/७ ग्राहक सेवा",
                "३–५ कार्य दिनमा प्रक्रिया",
                "सुरक्षित अनलाइन भुक्तानी"
            ],
            additionalInfo: {
                title: "रु ५०० सेवा शुल्कमा के समावेश छ?",
                description: "फारम भर्नेदेखि स्वीकृति प्राप्त गर्नेसम्म सम्पूर्ण सहयोग। कुनै झन्झट छैन। लुकेको शुल्क छैन।"
            },
            cta: {
                title: "श्रम स्वीकृतिको लागि आवेदन दिनुहोस्",
                description: "आफ्नो उमेर समूह छान्नुहोस् र सुरु गर्नुहोस्। सजिलो, सुरक्षित र सरकारी स्वीकृत प्रक्रिया।",
                button: "अब आवेदन दिनुहोस्",
                contact: "सहयोग चाहिन्छ? हामीलाई सम्पर्क गर्नुहोस्"
            },
            seoText: {
                title: "नेपाल श्रम स्वीकृति लागत गाइड २०२५",
                content: "नेपाल श्रम स्वीकृति लागत २०२५ मा आधारित सम्पूर्ण जानकारी पाउनुहोस्। सबै शुल्क स्पष्ट रूपमा दिइएको छ।"
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
                <link rel="alternate" href="https://nepalishram.com/pricing" hrefLang="en" />
                <link rel="alternate" href="https://nepalishram.com/np/pricing" hrefLang="ne" />
                <link rel="alternate" href="https://nepalishram.com/pricing" hrefLang="x-default" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={currentSeo.canonicalUrl} />
                <meta property="og:title" content={currentSeo.ogTitle} />
                <meta property="og:description" content={currentSeo.ogDescription} />
                <meta property="og:image" content="https://nepalishram.com/assets/pricing-og-image.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Nepal Labor Permit Pricing by Age Group" />
                <meta property="og:site_name" content="Nepal Shram" />
                <meta property="og:locale" content={language === 'en' ? 'en_US' : 'ne_NP'} />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={currentSeo.canonicalUrl} />
                <meta property="twitter:title" content={currentSeo.ogTitle} />
                <meta property="twitter:description" content={currentSeo.ogDescription} />
                <meta property="twitter:image" content="https://nepalishram.com/assets/pricing-og-image.png" />
                <meta property="twitter:image:alt" content="Nepal Labor Permit Pricing by Age Group" />

                {/* Additional SEO Meta Tags */}
                <meta name="geo.region" content="NP" />
                <meta name="geo.placename" content="Nepal" />
                <meta name="geo.position" content="27.7172;85.3240" />
                <meta name="ICBM" content="27.7172, 85.3240" />

                {/* Pricing Specific Meta Tags */}
                <meta name="price" content="8016-13776" />
                <meta name="priceCurrency" content="NPR" />
                <meta name="availability" content="in stock" />
                <meta name="condition" content="new" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(pricingStructuredData)
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(breadcrumbStructuredData)
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(faqStructuredData)
                    }}
                />

                {/* Additional Meta Tags for Pricing Page */}
                <meta name="service.pricing" content="transparent" />
                <meta name="service.ageGroups" content="18-35,36-50,51-64" />
                <meta name="service.currency" content="NPR" />
                <meta name="service.includes" content="insurance,welfare,ssf,service" />

                {/* Mobile App Meta Tags */}
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Nepal Shram Pricing" />
                <meta name="mobile-web-app-capable" content="yes" />

                {/* Security Headers */}
                <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
                <meta httpEquiv="X-Frame-Options" content="DENY" />
                <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

                {/* Preload Critical Resources */}
                <link rel="preload" href="/assets/pricing-hero.jpg" as="image" />
            </Head>

            <div className="font-sans">
                {/* Hidden SEO Content for Better Indexing */}
                <div className="sr-only">
                    <h1>Nepal Labor Permit Pricing - श्रम स्वीकृति Cost by Age Group</h1>
                    <p>
                        Get transparent pricing for Nepal Labor Permit (श्रम स्वीकृति) applications.
                        Our age-based pricing structure ensures fair and competitive rates for all Nepali workers.
                    </p>
                    <h2>Labor Permit Cost by Age Group:</h2>
                    <ul>
                        <li>Ages 18-35: Rs 7,881 (Most Popular)</li>
                        <li>Ages 36-50: Rs 9,239</li>
                        <li>Ages 51-64: Rs 13,636</li>
                    </ul>
                    <h3>Whats Included:</h3>
                    <ul>
                        <li>Insurance Premium (varies by age)</li>
                        <li>Welfare Fund: Rs 1,505</li>
                        <li>Social Security Fund (SSF): Rs 2,308</li>
                        <li>Professional Service Charge: Rs 360</li>
                    </ul>
                    <h3>Professional Services Include:</h3>
                    <ul>
                        <li>Complete document preparation and verification</li>
                        <li>Government liaison and submission support</li>
                        <li>Real-time application status tracking</li>
                        <li>24/7 multilingual customer support</li>
                        <li>Fast processing guarantee (3-5 working days)</li>
                        <li>Secure online payment processing</li>
                    </ul>
                </div>

                {/* Navbar */}
                <Navbar language={language} toggleLanguage={toggleLanguage} />

                {/* Breadcrumb */}
                <nav className="bg-gray-50 py-3 sm:py-4" aria-label="Breadcrumb">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ol className="flex items-center space-x-2 text-sm text-gray-600">
                            <li><Link href="/" className="hover:text-red-600">Home</Link></li>
                            <li>/</li>
                            <li className="text-gray-900 font-medium">Pricing</li>
                        </ol>
                    </div>
                </nav>

                {/* Hero Section */}
                <header className="bg-red-50 py-12 sm:py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                            {t.heroTitle}
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t.heroDescription}
                        </p>
                    </div>
                </header>

                {/* SEO Content Section */}
                <section className="py-8 sm:py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="prose prose-gray max-w-none text-gray-700">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{t.seoText.title}</h2>
                            <p className="leading-relaxed">{t.seoText.content}</p>
                        </div>
                    </div>
                </section>

                {/* Pricing Cards */}
                <section className="py-12 sm:py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {t.pricingPlans.map((plan, index) => (
                                <article
                                    key={index}
                                    className={`rounded-2xl p-6 sm:p-8 ${plan.popular
                                            ? 'bg-red-50 border-2 border-red-200 transform scale-[1.03]'
                                            : 'bg-white border border-gray-200'
                                        } shadow-lg hover:shadow-xl transition-all duration-300`}
                                >
                                    {plan.popular && (
                                        <div className="bg-red-600 text-white text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">
                                            Most Popular
                                        </div>
                                    )}
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{plan.ageGroup}</h3>
                                    <div className="space-y-4">
                                        {plan.features.map((feature, i) => (
                                            <div
                                                key={i}
                                                className={`flex justify-between items-center py-3 ${feature.highlight ? 'border-t-2 border-red-200 pt-6' : ''
                                                    }`}
                                            >
                                                <span
                                                    className={`${feature.highlight
                                                            ? 'text-base sm:text-lg font-bold text-gray-900'
                                                            : 'text-gray-600'
                                                        }`}
                                                >
                                                    {feature.name}
                                                </span>
                                                <span
                                                    className={`${feature.highlight
                                                            ? 'text-xl sm:text-2xl font-bold text-red-600'
                                                            : 'text-base sm:text-lg font-semibold text-gray-900'
                                                        }`}
                                                >
                                                    {feature.price}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        onClick={openApplyModal}
                                        className={`block text-center w-full mt-8 py-3 px-4 rounded-lg font-medium transition-colors ${plan.popular
                                                ? 'bg-red-600 text-white hover:bg-red-700'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        {t.cta.button}
                                    </button>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Service Features */}
                <section className="py-12 sm:py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10 sm:mb-12">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                                {t.additionalInfo.title}
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                                {t.additionalInfo.description}
                            </p>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {t.serviceFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-md"
                                >
                                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                    <span className="text-gray-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-12 sm:py-16 bg-red-50 text-gray-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t.cta.title}</h2>
                        <p className="text-base sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                            {t.cta.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={openApplyModal}
                                className="border-2 bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors text-center"
                            >
                                {t.cta.button}
                            </button>
                            <Link
                                href="/#contact"
                                className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-red-600 hover:text-white transition-colors text-center"
                            >
                                {t.cta.contact}
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <Footer language={language} />

                {/* Apply Now Modal */}
                <ApplyNowModal 
                    isOpen={isApplyModalOpen} 
                    onClose={closeApplyModal} 
                    language={language} 
                />
            </div>

        </>
    );
};

export default PricingPage;
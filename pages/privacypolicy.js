import React, { useState } from 'react';
import { Shield, Eye, Lock, FileText, RefreshCw, Users, AlertCircle, CheckCircle, Phone, Mail, MapPin, Calendar, ArrowRight, Globe, Download, Upload, CreditCard, Clock, Building, UserCheck, Scale, BookOpen, Heart, Home, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Footer from '@/components/Footer';

const PrivacyPolicyPage = () => {
    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'np' : 'en');
    };

    const translations = {
        en: {
            // SEO and Meta
            title: "Privacy Policy & Terms - Nepal Shram | श्रम स्वीकृति Data Protection",
            description: "Learn about Nepal Shram's privacy policy, data protection measures, refund policy, and terms of service for labor permit applications.",

            // Navbar
            navbar: {
                title: "नेपाली श्रम",
                subtitle: "Labor Solutions Nepal",
                home: "Home",
                howItWorks: "How It Works",
                services: "Services",
                about: "About Us",
                privacy: "Privacy Policy",
                faqs: "FAQs",
                contact: "Contact Us",
                applyNow: "Apply Now",
                language: "नेपाली"
            },

            // Breadcrumb
            breadcrumb: {
                home: "Home",
                privacy: "Privacy Policy"
            },

            // Header
            header: {
                title: "Privacy Policy & Terms of Service",
                subtitle: "Your privacy and data security are our top priorities",
                lastUpdated: "Last Updated: July 15, 2025",
                effectiveDate: "Effective Date: January 1, 2025"
            },

            // Quick Navigation
            quickNav: {
                title: "Quick Navigation",
                items: [
                    { id: "data-collection", title: "Data Collection", icon: FileText },
                    { id: "data-usage", title: "Data Usage", icon: Eye },
                    { id: "data-protection", title: "Data Protection", icon: Shield },
                    { id: "refund-policy", title: "Refund Policy", icon: RefreshCw },
                    { id: "government-process", title: "Government Process", icon: Building },
                    { id: "user-rights", title: "Your Rights", icon: Users },
                    { id: "contact", title: "Contact Us", icon: Phone }
                ]
            },

            // Main Content Sections
            sections: {
                dataCollection: {
                    title: "1. Information We Collect",
                    icon: FileText,
                    content: [
                        {
                            subtitle: "Personal Information",
                            details: [
                                "Full name, date of birth, and citizenship number",
                                "Contact information (phone, email, address)",
                                "Passport details and travel documents",
                                "Educational qualifications and certificates",
                                "Employment history and experience",
                                "Medical fitness certificate details"
                            ]
                        },
                        {
                            subtitle: "Document Information",
                            details: [
                                "Scanned copies of citizenship certificates",
                                "Passport photos and document scans",
                                "Educational certificate copies",
                                "Medical report documents",
                                "Employment contract and job offer letters",
                                "Bank statements and financial documents"
                            ]
                        },
                        {
                            subtitle: "Technical Information",
                            details: [
                                "IP address and device information",
                                "Browser type and operating system",
                                "Login times and access patterns",
                                "Payment transaction details",
                                "Application progress and status updates"
                            ]
                        }
                    ]
                },

                dataUsage: {
                    title: "2. How We Use Your Information",
                    icon: Eye,
                    content: [
                        {
                            subtitle: "Primary Uses",
                            details: [
                                "Processing your labor permit application",
                                "Verifying your identity and documents",
                                "Communicating with government departments",
                                "Providing customer support and assistance",
                                "Sending application status updates",
                                "Facilitating payment processing"
                            ]
                        },
                        {
                            subtitle: "Secondary Uses",
                            details: [
                                "Improving our services and platform",
                                "Analyzing application trends and patterns",
                                "Ensuring compliance with regulations",
                                "Preventing fraud and unauthorized access",
                                "Conducting internal audits and reviews"
                            ]
                        }
                    ]
                },

                dataProtection: {
                    title: "3. Data Protection & Security",
                    icon: Shield,
                    content: [
                        {
                            subtitle: "Security Measures",
                            details: [
                                "256-bit SSL encryption for all data transmission",
                                "Secure cloud storage with regular backups",
                                "Multi-factor authentication for staff access",
                                "Regular security audits and penetration testing",
                                "Firewall protection and intrusion detection",
                                "Access controls and permission management"
                            ]
                        },
                        {
                            subtitle: "Data Retention",
                            details: [
                                "Personal data kept for 7 years as per government regulations",
                                "Document copies stored securely for legal compliance",
                                "Payment records maintained for 5 years",
                                "Technical logs deleted after 2 years",
                                "Customer communications archived for 3 years"
                            ]
                        }
                    ]
                },

                refundPolicy: {
                    title: "4. Refund Policy",
                    icon: RefreshCw,
                    content: [
                        {
                            subtitle: "Refund Conditions",
                            details: [
                                "Full refund available before document submission",
                                "Partial refund (50%) if application cancelled within 24 hours",
                                "No refund once application is submitted to government",
                                "Government processing fees are non-refundable",
                                "Service charges may apply for cancelled applications",
                                "Refunds processed within 7-10 working days"
                            ]
                        },
                        {
                            subtitle: "Non-Refundable Items",
                            details: [
                                "Government fees and official charges",
                                "Applications already under government review",
                                "Approved or rejected applications",
                                "Express processing fees",
                                "Document verification charges",
                                "Third-party service fees"
                            ]
                        },
                        {
                            subtitle: "Refund Process",
                            details: [
                                "Submit refund request through customer portal",
                                "Provide reason for cancellation",
                                "Wait for review and approval (2-3 days)",
                                "Refund credited to original payment method",
                                "Email confirmation sent upon processing",
                                "Contact support for any refund queries"
                            ]
                        }
                    ]
                },

                governmentProcess: {
                    title: "5. Government Process & Physical Presence",
                    icon: Building,
                    content: [
                        {
                            subtitle: "Document Verification",
                            details: [
                                "Original documents must be verified in person",
                                "Visit nearest Department of Foreign Employment office",
                                "Bring all original certificates and documents",
                                "Biometric data collection may be required",
                                "Face-to-face interview if requested",
                                "Additional documentation may be requested"
                            ]
                        },
                        {
                            subtitle: "Government Processing",
                            details: [
                                "Applications processed by DoFE following official procedures",
                                "Standard processing time: 3-5 working days",
                                "Government may request additional information",
                                "Physical presence required for final approval",
                                "Labour permit issued by government authorities",
                                "We facilitate but do not guarantee approval"
                            ]
                        },
                        {
                            subtitle: "Legal Compliance",
                            details: [
                                "All processes follow Nepal government regulations",
                                "Compliance with Foreign Employment Act 2064",
                                "Adherence to Labour Act 2074 provisions",
                                "Regular updates on policy changes",
                                "Coordination with relevant ministries",
                                "Maintaining official approval records"
                            ]
                        }
                    ]
                },

                userRights: {
                    title: "6. Your Rights & Choices",
                    icon: Users,
                    content: [
                        {
                            subtitle: "Data Rights",
                            details: [
                                "Access your personal information anytime",
                                "Request corrections to inaccurate data",
                                "Download your data in portable format",
                                "Request deletion of non-essential data",
                                "Opt-out of marketing communications",
                                "File complaints with data protection authority"
                            ]
                        },
                        {
                            subtitle: "Account Controls",
                            details: [
                                "Change password and security settings",
                                "Update contact information",
                                "Manage notification preferences",
                                "View application history",
                                "Cancel pending applications",
                                "Deactivate account if needed"
                            ]
                        }
                    ]
                },

                contact: {
                    title: "7. Contact Information",
                    icon: Phone,
                    content: [
                        {
                            subtitle: "Customer Support",
                            details: [
                                "Phone: +977-9842997378 (24/7 available)",
                                "Email: support@nepalshram.gov.np",
                                "Live Chat: Available on website",
                                "Office Hours: Sunday to Friday, 9 AM - 5 PM",
                                "Emergency Support: Available 24/7",
                                "Response Time: Within 2 hours"
                            ]
                        },
                        {
                            subtitle: "Office Address",
                            details: [
                                "Nepal Shram Services Pvt. Ltd.",
                                "Department of Foreign Employment Building",
                                "Kathmandu, Nepal",
                                "Postal Code: 44600",
                                "GPS: 27.7172, 85.3240"
                            ]
                        }
                    ]
                }
            },

            // Important Notes
            importantNotes: {
                title: "Important Notes",
                notes: [
                    "We are a government-approved service provider, not a government agency",
                    "Final approval depends on government authorities",
                    "All fees include service charges and government fees",
                    "Processing times may vary based on application complexity",
                    "Keep all original documents safe for verification",
                    "Report any suspicious activity immediately"
                ]
            },

            // Footer CTA
            footerCta: {
                title: "Questions About Our Privacy Policy?",
                description: "Contact our support team for clarification on any privacy-related concerns.",
                contactButton: "Contact Support",
                homeButton: "Back to Home"
            }
        },

        np: {
            // SEO and Meta
            title: "गोपनीयता नीति र सर्तहरू - नेपाली श्रम | श्रम स्वीकृति डेटा सुरक्षा",
            description: "नेपाली श्रमको गोपनीयता नीति, डेटा सुरक्षा उपायहरू, फिर्ता नीति, र श्रम अनुमति आवेदनका सेवा सर्तहरू जान्नुहोस्।",

            // Navbar
            navbar: {
                title: "नेपाली श्रम",
                subtitle: "श्रम समाधान नेपाल",
                home: "गृह पृष्ठ",
                howItWorks: "यसले कसरी काम गर्छ",
                services: "सेवाहरू",
                about: "हाम्रो बारेमा",
                privacy: "गोपनीयता नीति",
                faqs: "प्रश्न र उत्तर",
                contact: "सम्पर्क गर्नुहोस्",
                applyNow: "अहिले नै आवेदन दिनुहोस्",
                language: "English"
            },

            // Breadcrumb
            breadcrumb: {
                home: "गृह पृष्ठ",
                privacy: "गोपनीयता नीति"
            },

            // Header
            header: {
                title: "गोपनीयता नीति र सेवा सर्तहरू",
                subtitle: "तपाईंको गोपनीयता र डेटा सुरक्षा हाम्रो प्राथमिकता हो",
                lastUpdated: "अन्तिम अपडेट: जुलाई १५, २०२५",
                effectiveDate: "प्रभावकारी मिति: जनवरी १, २०२५"
            },

            // Quick Navigation
            quickNav: {
                title: "द्रुत नेभिगेसन",
                items: [
                    { id: "data-collection", title: "डेटा सङ्कलन", icon: FileText },
                    { id: "data-usage", title: "डेटा प्रयोग", icon: Eye },
                    { id: "data-protection", title: "डेटा सुरक्षा", icon: Shield },
                    { id: "refund-policy", title: "फिर्ता नीति", icon: RefreshCw },
                    { id: "government-process", title: "सरकारी प्रक्रिया", icon: Building },
                    { id: "user-rights", title: "तपाईंका अधिकार", icon: Users },
                    { id: "contact", title: "सम्पर्क गर्नुहोस्", icon: Phone }
                ]
            },

            // Main Content Sections
            sections: {
                dataCollection: {
                    title: "१. हामीले सङ्कलन गर्ने जानकारी",
                    icon: FileText,
                    content: [
                        {
                            subtitle: "व्यक्तिगत जानकारी",
                            details: [
                                "पूरा नाम, जन्म मिति, र नागरिकता नम्बर",
                                "सम्पर्क जानकारी (फोन, इमेल, ठेगाना)",
                                "राहदानी विवरण र यात्रा कागजातहरू",
                                "शैक्षिक योग्यता र प्रमाणपत्रहरू",
                                "रोजगारी इतिहास र अनुभव",
                                "चिकित्सा फिटनेस प्रमाणपत्रका विवरणहरू"
                            ]
                        },
                        {
                            subtitle: "कागजात जानकारी",
                            details: [
                                "नागरिकता प्रमाणपत्रका स्क्यान प्रतिहरू",
                                "राहदानी फोटो र कागजात स्क्यान",
                                "शैक्षिक प्रमाणपत्रका प्रतिहरू",
                                "चिकित्सा रिपोर्ट कागजातहरू",
                                "रोजगारी सम्झौता र काम प्रस्ताव पत्रहरू",
                                "बैंक स्टेटमेन्ट र वित्तीय कागजातहरू"
                            ]
                        },
                        {
                            subtitle: "प्राविधिक जानकारी",
                            details: [
                                "आईपी ठेगाना र डिभाइस जानकारी",
                                "ब्राउजर प्रकार र अपरेटिङ सिस्टम",
                                "लगइन समय र पहुँच ढाँचा",
                                "भुक्तानी कारोबारका विवरणहरू",
                                "आवेदन प्रगति र स्थिति अपडेटहरू"
                            ]
                        }
                    ]
                },

                dataUsage: {
                    title: "२. हामी तपाईंको जानकारी कसरी प्रयोग गर्छौं",
                    icon: Eye,
                    content: [
                        {
                            subtitle: "प्राथमिक प्रयोगहरू",
                            details: [
                                "तपाईंको श्रम अनुमति आवेदन प्रक्रिया गर्न",
                                "तपाईंको पहिचान र कागजात प्रमाणित गर्न",
                                "सरकारी विभागहरूसँग सञ्चार गर्न",
                                "ग्राहक सहायता र सहयोग प्रदान गर्न",
                                "आवेदन स्थिति अपडेटहरू पठाउन",
                                "भुक्तानी प्रक्रिया सुविधा प्रदान गर्न"
                            ]
                        },
                        {
                            subtitle: "द्वितीयक प्रयोगहरू",
                            details: [
                                "हाम्रो सेवा र प्लेटफर्म सुधार गर्न",
                                "आवेदन प्रवृत्ति र ढाँचा विश्लेषण गर्न",
                                "नियमहरूको अनुपालन सुनिश्चित गर्न",
                                "धोखाधडी र अनधिकृत पहुँच रोक्न",
                                "आन्तरिक लेखापरीक्षा र समीक्षा गर्न"
                            ]
                        }
                    ]
                },

                dataProtection: {
                    title: "३. डेटा सुरक्षा र संरक्षण",
                    icon: Shield,
                    content: [
                        {
                            subtitle: "सुरक्षा उपायहरू",
                            details: [
                                "सबै डेटा स्थानान्तरणका लागि २५६-बिट SSL एन्क्रिप्शन",
                                "नियमित ब्याकअप सहित सुरक्षित क्लाउड भण्डारण",
                                "स्टाफ पहुँचका लागि बहु-कारक प्रमाणीकरण",
                                "नियमित सुरक्षा लेखापरीक्षा र पेनेट्रेसन परीक्षण",
                                "फायरवाल सुरक्षा र घुसपैठ पत्ता लगाउने",
                                "पहुँच नियन्त्रण र अनुमति व्यवस्थापन"
                            ]
                        },
                        {
                            subtitle: "डेटा राख्ने अवधि",
                            details: [
                                "सरकारी नियम अनुसार व्यक्तिगत डेटा ७ वर्ष राखिन्छ",
                                "कानुनी अनुपालनका लागि कागजातका प्रतिहरू सुरक्षित भण्डारण",
                                "भुक्तानी रेकर्डहरू ५ वर्ष राखिन्छ",
                                "प्राविधिक लगहरू २ वर्षपछि मेटाइन्छ",
                                "ग्राहक सञ्चारहरू ३ वर्षका लागि संग्रहीत"
                            ]
                        }
                    ]
                },

                refundPolicy: {
                    title: "४. फिर्ता नीति",
                    icon: RefreshCw,
                    content: [
                        {
                            subtitle: "फिर्ता सर्तहरू",
                            details: [
                                "कागजात पेश गर्नुअघि पूर्ण फिर्ता उपलब्ध",
                                "२४ घण्टा भित्र रद्द गरेमा आंशिक फिर्ता (५०%)",
                                "सरकारमा आवेदन बुझाएपछि कुनै फिर्ता छैन",
                                "सरकारी प्रक्रिया शुल्क फिर्ता गरिँदैन",
                                "रद्द गरिएका आवेदनहरूका लागि सेवा शुल्क लाग्न सक्छ",
                                "फिर्ता ७-१० कार्य दिनभित्र प्रक्रिया गरिन्छ"
                            ]
                        },
                        {
                            subtitle: "फिर्ता नहुने वस्तुहरू",
                            details: [
                                "सरकारी शुल्क र आधिकारिक चार्जहरू",
                                "पहिले नै सरकारी समीक्षामा रहेका आवेदनहरू",
                                "स्वीकृत वा अस्वीकृत आवेदनहरू",
                                "एक्सप्रेस प्रक्रिया शुल्क",
                                "कागजात प्रमाणीकरण शुल्क",
                                "तेस्रो-पक्षको सेवा शुल्क"
                            ]
                        },
                        {
                            subtitle: "फिर्ता प्रक्रिया",
                            details: [
                                "ग्राहक पोर्टल मार्फत फिर्ता अनुरोध पेश गर्नुहोस्",
                                "रद्दीकरणको कारण प्रदान गर्नुहोस्",
                                "समीक्षा र अनुमोदनका लागि पर्खनुहोस् (२-३ दिन)",
                                "मूल भुक्तानी विधिमा फिर्ता क्रेडिट",
                                "प्रक्रिया गरेपछि इमेल पुष्टि पठाइन्छ",
                                "कुनै फिर्ता प्रश्नका लागि सहयोगलाई सम्पर्क गर्नुहोस्"
                            ]
                        }
                    ]
                },

                governmentProcess: {
                    title: "५. सरकारी प्रक्रिया र शारीरिक उपस्थिति",
                    icon: Building,
                    content: [
                        {
                            subtitle: "कागजात प्रमाणीकरण",
                            details: [
                                "मौलिक कागजातहरू व्यक्तिगत रूपमा प्रमाणित गर्नुपर्छ",
                                "नजिकको वैदेशिक रोजगार विभाग कार्यालयमा जानुहोस्",
                                "सबै मौलिक प्रमाणपत्र र कागजातहरू ल्याउनुहोस्",
                                "बायोमेट्रिक डेटा सङ्कलन आवश्यक हुन सक्छ",
                                "अनुरोध गरिएमा आमने-सामने अन्तर्वार्ता",
                                "थप कागजात माग गर्न सकिन्छ"
                            ]
                        },
                        {
                            subtitle: "सरकारी प्रक्रिया",
                            details: [
                                "DoFE द्वारा आधिकारिक प्रक्रिया पछ्याएर आवेदन प्रक्रिया",
                                "मानक प्रक्रिया समय: ३-५ कार्य दिन",
                                "सरकारले थप जानकारी माग्न सक्छ",
                                "अन्तिम अनुमोदनका लागि शारीरिक उपस्थिति आवश्यक",
                                "सरकारी अधिकारीहरूद्वारा श्रम अनुमति जारी",
                                "हामी सुविधा प्रदान गर्छौं तर अनुमोदनको ग्यारेन्टी गर्दैनौं"
                            ]
                        },
                        {
                            subtitle: "कानुनी अनुपालन",
                            details: [
                                "सबै प्रक्रिया नेपाल सरकारको नियम अनुसार",
                                "वैदेशिक रोजगार ऐन २०६४ को अनुपालन",
                                "श्रम ऐन २०७४ को प्रावधान अनुसार",
                                "नीति परिवर्तनहरूमा नियमित अपडेट",
                                "सम्बन्धित मन्त्रालयहरूसँग समन्वय",
                                "आधिकारिक अनुमोदन रेकर्ड राख्ने"
                            ]
                        }
                    ]
                },

                userRights: {
                    title: "६. तपाईंका अधिकार र विकल्पहरू",
                    icon: Users,
                    content: [
                        {
                            subtitle: "डेटा अधिकारहरू",
                            details: [
                                "जुनसुकै बेला आफ्नो व्यक्तिगत जानकारी पहुँच गर्न",
                                "गलत डेटा सुधारको अनुरोध गर्न",
                                "पोर्टेबल ढाँचामा आफ्नो डेटा डाउनलोड गर्न",
                                "गैर-आवश्यक डेटा मेटाउन अनुरोध गर्न",
                                "मार्केटिङ सञ्चारबाट बाहिर निस्कन",
                                "डेटा सुरक्षा प्राधिकरणमा उजुरी दायर गर्न"
                            ]
                        },
                        {
                            subtitle: "खाता नियन्त्रणहरू",
                            details: [
                                "पासवर्ड र सुरक्षा सेटिङ परिवर्तन गर्न",
                                "सम्पर्क जानकारी अपडेट गर्न",
                                "सूचना प्राथमिकताहरू व्यवस्थापन गर्न",
                                "आवेदन इतिहास हेर्न",
                                "पेन्डिङ आवेदनहरू रद्द गर्न",
                                "आवश्यक भएमा खाता निष्क्रिय गर्न"
                            ]
                        }
                    ]
                },

                contact: {
                    title: "७. सम्पर्क जानकारी",
                    icon: Phone,
                    content: [
                        {
                            subtitle: "ग्राहक सहयोग",
                            details: [
                                "फोन: +977-9842997378 (२४/७ उपलब्ध)",
                                "इमेल: support@nepalshram.gov.np",
                                "लाइभ च्याट: वेबसाइटमा उपलब्ध",
                                "कार्यालय समय: आइतबार देखि शुक्रबार, बिहान ९ बजे - बेलुका ५ बजे",
                                "आपतकालीन सहयोग: २४/७ उपलब्ध",
                                "जवाफ समय: २ घण्टा भित्र"
                            ]
                        },
                        {
                            subtitle: "कार्यालय ठेगाना",
                            details: [
                                "नेपाली श्रम सेवा प्रा. लि.",
                                "वैदेशिक रोजगार विभाग भवन",
                                "काठमाडौं, नेपाल",
                                "हुलाक कोड: ४४६००",
                                "GPS: 27.7172, 85.3240"
                            ]
                        }
                    ]
                }
            },

            // Important Notes
            importantNotes: {
                title: "महत्वपूर्ण टिप्पणीहरू",
                notes: [
                    "हामी एक सरकार-अनुमोदित सेवा प्रदायक हौं, सरकारी एजेन्सी होइन",
                    "अन्तिम अनुमोदन सरकारी अधिकारीहरूमा निर्भर गर्दछ",
                    "सबै शुल्कमा सेवा शुल्क र सरकारी शुल्क समावेश छ",
                    "प्रक्रिया समय आवेदनको जटिलताको आधारमा फरक हुन सक्छ",
                    "प्रमाणीकरणका लागि सबै मूल कागजातहरू सुरक्षित राख्नुहोस्",
                    "कुनै संदिग्ध गतिविधि तुरुन्त रिपोर्ट गर्नुहोस्"
                ]
            },

            // Footer CTA
            footerCta: {
                title: "हाम्रो गोपनीयता नीतिको बारेमा प्रश्नहरू छन्?",
                description: "कुनै पनि गोपनीयता-सम्बन्धी चिन्ताहरूको स्पष्टीकरणका लागि हाम्रो सहयोग टोलीलाई सम्पर्क गर्नुहोस्।",
                contactButton: "सहयोग सम्पर्क गर्नुहोस्",
                homeButton: "गृह पृष्ठमा फर्कनुहोस्"
            }
        }
    };

    const t = translations[language];

    return (
        <div className="min-h-screen bg-gray-50">
  {/* Navigation Bar */}
  <Navbar language={language} toggleLanguage={toggleLanguage} />

  {/* Breadcrumb */}
  <nav className="bg-gray-50 py-3 sm:py-4" aria-label="Breadcrumb">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        <li><Link href="/" className="hover:text-red-600">Home</Link></li>
        <li>/</li>
        <li className="text-gray-900 font-medium">Privacy Policy</li>
      </ol>
    </div>
  </nav>

  {/* Header */}
  <div className="bg-red-100 text-gray-900 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{t.header.title}</h1>
      <p className="text-lg sm:text-xl text-gray-700 mb-6">{t.header.subtitle}</p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8">
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5" />
          <span className="text-gray-700">{t.header.lastUpdated}</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle className="w-5 h-5" />
          <span className="text-gray-700">{t.header.effectiveDate}</span>
        </div>
      </div>
    </div>
  </div>

  {/* Main Content Layout */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Sidebar */}
      <aside className="lg:col-span-1">
        <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6 lg:sticky lg:top-8">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">{t.quickNav.title}</h3>
          <nav className="space-y-2">
            {t.quickNav.items.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center space-x-2 sm:space-x-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 py-2 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm sm:text-base">{item.title}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:col-span-3 space-y-12">
        {Object.entries(t.sections).map(([key, section]) => {
          const icons = {
            dataCollection: FileText,
            dataUsage: Eye,
            dataProtection: Shield,
            refundPolicy: RefreshCw,
            governmentProcess: Building,
            userRights: Users,
            contact: Phone,
          };
          const DetailIcons = {
            dataCollection: CheckCircle,
            dataUsage: ArrowRight,
            dataProtection: Lock,
            refundPolicy: CreditCard,
            governmentProcess: UserCheck,
            userRights: Scale,
            contact: Mail,
          };
          const Icon = icons[key];
          const DetailIcon = DetailIcons[key];

          return (
            <section key={key} id={key} className="bg-white rounded-lg shadow-sm border p-6 sm:p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-red-100 rounded-lg">
                  <Icon className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{section.title}</h2>
              </div>
              <div className="space-y-6">
                {section.content.map((subsection, index) => (
                  <div key={index}>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">{subsection.subtitle}</h3>
                    <ul className="space-y-2">
                      {subsection.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3">
                          <DetailIcon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm sm:text-base">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* Important Notes */}
        <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 sm:p-8">
          <div className="flex items-center space-x-3 mb-4">
            <AlertCircle className="w-6 h-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-blue-800">{t.importantNotes.title}</h3>
          </div>
          <ul className="space-y-2">
            {t.importantNotes.notes.map((note, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-blue-800 text-sm sm:text-base">{note}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  </div>

  {/* Footer CTA */}
  <div className="bg-red-100 text-gray-900 py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t.footerCta.title}</h2>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Link
          href="/#contact"
          className="bg-red-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-black transition-colors flex items-center justify-center space-x-2"
        >
          <Phone className="w-5 h-5" />
          <span>{t.footerCta.contactButton}</span>
        </Link>
        <Link
          href="/"
          className="bg-white text-black px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors flex items-center justify-center space-x-2"
        >
          <Home className="w-5 h-5" />
          <span>{t.footerCta.homeButton}</span>
        </Link>
      </div>
    </div>
  </div>

  {/* Footer */}
  <Footer language={language} />
</div>

    );
};

export default PrivacyPolicyPage;
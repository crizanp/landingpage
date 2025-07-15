import React, { useState } from 'react';
import { Shield, FileText, Users, Phone, CheckCircle, AlertCircle, ArrowRight, Calendar, Home } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const SimpleAgreementPage = () => {
    const [language, setLanguage] = useState('en');
    const [agreed, setAgreed] = useState(false);

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'np' : 'en');
    };

    const translations = {
        en: {
            title: "User Agreement",
            subtitle: "Simple terms for Nepal Shram services",
            lastUpdated: "Last Updated: July 15, 2025",

            sections: {
                dataCollection: {
                    title: "What We Collect",
                    points: [
                        "Personal details (name, contact, citizenship)",
                        "Documents (passport, certificates, medical reports)",
                        "Application and payment information"
                    ]
                },
                dataUsage: {
                    title: "How We Use Your Data",
                    points: [
                        "Process your labor permit application",
                        "Communicate with government offices",
                        "Provide customer support and updates"
                    ]
                },
                dataProtection: {
                    title: "Data Security",
                    points: [
                        "256-bit SSL encryption for all data",
                        "Secure cloud storage with backups",
                        "Data kept for 7 years as per regulations"
                    ]
                },
                refundPolicy: {
                    title: "Refund Policy",
                    points: [
                        "Full refund before document submission",
                        "No refund after government submission",
                        "Government fees are non-refundable"
                    ]
                },
                governmentProcess: {
                    title: "Government Requirements",
                    points: [
                        "Physical presence required for verification",
                        "Original documents must be presented",
                        "Processing time: 3-5 working days"
                    ]
                },
                userRights: {
                    title: "Your Rights",
                    points: [
                        "Access and update your information",
                        "Request data deletion (non-essential)",
                        "Contact support anytime"
                    ]
                }
            },

            importantNotes: {
                title: "Important Notes",
                points: [
                    "We facilitate applications but don't guarantee approval",
                    "Final approval depends on government authorities",
                    "Keep original documents safe for verification"
                ]
            },

            contact: {
                title: "Need Help?",
                phone: "Phone: +977-9842997378",
                email: "Email: support@nepalshram.gov.np",
                address: "Department of Foreign Employment Building, Kathmandu"
            },

            agreement: {
                text: "I have read and agree to the terms and conditions",
                button: "I Agree & Continue",
                backButton: "Back to Home"
            }
        },

        np: {
            title: "प्रयोगकर्ता सम्झौता",
            subtitle: "नेपाली श्रम सेवाका लागि सरल सर्तहरू",
            lastUpdated: "अन्तिम अपडेट: जुलाई १५, २०२५",

            sections: {
                dataCollection: {
                    title: "हामी के सङ्कलन गर्छौं",
                    points: [
                        "व्यक्तिगत विवरण (नाम, सम्पर्क, नागरिकता)",
                        "कागजातहरू (राहदानी, प्रमाणपत्र, चिकित्सा रिपोर्ट)",
                        "आवेदन र भुक्तानी जानकारी"
                    ]
                },
                dataUsage: {
                    title: "हामी तपाईंको डेटा कसरी प्रयोग गर्छौं",
                    points: [
                        "तपाईंको श्रम अनुमति आवेदन प्रक्रिया गर्न",
                        "सरकारी कार्यालयहरूसँग सञ्चार गर्न",
                        "ग्राहक सहायता र अपडेट प्रदान गर्न"
                    ]
                },
                dataProtection: {
                    title: "डेटा सुरक्षा",
                    points: [
                        "सबै डेटाका लागि २५६-बिट SSL एन्क्रिप्शन",
                        "ब्याकअप सहित सुरक्षित क्लाउड भण्डारण",
                        "नियम अनुसार डेटा ७ वर्ष राखिन्छ"
                    ]
                },
                refundPolicy: {
                    title: "फिर्ता नीति",
                    points: [
                        "कागजात पेश गर्नुअघि पूर्ण फिर्ता",
                        "सरकारी पेशपछि कुनै फिर्ता छैन",
                        "सरकारी शुल्क फिर्ता गरिँदैन"
                    ]
                },
                governmentProcess: {
                    title: "सरकारी आवश्यकताहरू",
                    points: [
                        "प्रमाणीकरणका लागि शारीरिक उपस्थिति आवश्यक",
                        "मूल कागजातहरू प्रस्तुत गर्नुपर्छ",
                        "प्रक्रिया समय: ३-५ कार्य दिन"
                    ]
                },
                userRights: {
                    title: "तपाईंका अधिकारहरू",
                    points: [
                        "आफ्नो जानकारी पहुँच र अपडेट गर्न",
                        "डेटा मेटाउन अनुरोध गर्न (गैर-आवश्यक)",
                        "जुनसुकै बेला सहयोग सम्पर्क गर्न"
                    ]
                }
            },

            importantNotes: {
                title: "महत्वपूर्ण टिप्पणीहरू",
                points: [
                    "हामी आवेदन सुविधा गर्छौं तर अनुमोदनको ग्यारेन्टी गर्दैनौं",
                    "अन्तिम अनुमोदन सरकारी अधिकारीहरूमा निर्भर गर्दछ",
                    "प्रमाणीकरणका लागि मूल कागजातहरू सुरक्षित राख्नुहोस्"
                ]
            },

            contact: {
                title: "मद्दत चाहिन्छ?",
                phone: "फोन: +977-9842997378",
                email: "इमेल: support@nepalshram.gov.np",
                address: "वैदेशिक रोजगार विभाग भवन, काठमाडौं"
            },

            agreement: {
                text: "मैले सर्तहरू पढेको छु र सहमत छु",
                button: "म सहमत छु र जारी राख्छु",
                backButton: "गृह पृष्ठमा फर्कनुहोस्"
            }
        }
    };

    const t = translations[language];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50">
            {/* Navigation Bar */}
            <Navbar language={language} toggleLanguage={toggleLanguage} />
 {/* Breadcrumb */}
            <nav className="bg-gray-50 py-3 sm:py-4" aria-label="Breadcrumb">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ol className="flex items-center space-x-2 text-sm text-gray-600">
                        <li><Link href="/" className="hover:text-red-600">Home</Link></li>
                        <li>/</li>
                        <li className="text-gray-900 font-medium">Agreement</li>
                    </ol>
                </div>
            </nav>

            {/* Header */}
            {/* Header */}
<div className="bg-red-100 text-gray-900 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-6">{t.subtitle}</p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span className="text-gray-700">{t.lastUpdated}</span>
            </div>
            <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span className="text-gray-700">{t.header?.effectiveDate || "Effective: July 15, 2025"}</span>
            </div>
        </div>
    </div>
</div>


            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-sm border p-6">
                    {/* Sections Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {Object.entries(t.sections).map(([key, section]) => {
                            const icons = {
                                dataCollection: FileText,
                                dataUsage: Users,
                                dataProtection: Shield,
                                refundPolicy: ArrowRight,
                                governmentProcess: CheckCircle,
                                userRights: Users
                            };
                            const Icon = icons[key];

                            return (
                                <div key={key} className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <div className="p-2  rounded-lg">
                                            <Icon className="w-5 h-5 text-red-600" />
                                        </div>
                                        <h3 className="font-semibold text-gray-900">{section.title}</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {section.points.map((point, index) => (
                                            <li key={index} className="flex items-start space-x-2">
                                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-sm text-gray-600">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>

                    {/* Important Notes */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                        <div className="flex items-center space-x-2 mb-3">
                            <AlertCircle className="w-5 h-5 text-blue-600" />
                            <h3 className="font-semibold text-blue-800">{t.importantNotes.title}</h3>
                        </div>
                        <ul className="space-y-2">
                            {t.importantNotes.points.map((note, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-sm text-blue-800">{note}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                        <div className="flex items-center space-x-2 mb-3">
                            <Phone className="w-5 h-5 text-gray-600" />
                            <h3 className="font-semibold text-gray-900">{t.contact.title}</h3>
                        </div>
                        <div className="space-y-1 text-sm text-gray-600">
                            <p>{t.contact.phone}</p>
                            <p>{t.contact.email}</p>
                            <p>{t.contact.address}</p>
                        </div>
                    </div>

                    {/* Agreement Section */}
                    <div className="border-t pt-6">
                        <div className="flex items-center space-x-3 mb-4">
                            <input
                                type="checkbox"
                                id="agreement"
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                                className="w-5 h-5 text-red-600 rounded border-gray-300 focus:ring-red-500"
                            />
                            <label htmlFor="agreement" className="text-gray-700 cursor-pointer">
                                {t.agreement.text}
                            </label>
                        </div>

                        <button
                            disabled={!agreed}
                            onClick={() => {
                                if (agreed) {
                                    window.location.href = 'https://portal.nepalishram.com';
                                }
                            }}
                            className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${agreed
                                    ? 'bg-red-600 text-white hover:bg-red-700'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                        >
                            {t.agreement.button}
                        </button>

                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer language={language} />
        </div>
    );
};

export default SimpleAgreementPage;
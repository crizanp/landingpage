
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { AlertCircle, Home, Phone, CheckCircle } from 'lucide-react';

const DisclaimerPage = () => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'np' : 'en');
  };

  const translations = {
    en: {
      navbar: {
        title: 'नेपाली श्रम',
        subtitle: 'Labor Solutions Nepal',
        home: 'Home',
        howItWorks: 'How It Works',
        services: 'Services',
        about: 'About Us',
        privacy: 'Privacy Policy',
        faqs: 'FAQs',
        contact: 'Contact Us',
        applyNow: 'Apply Now',
        language: 'नेपाली',
      },
      breadcrumb: {
        home: 'Home',
        disclaimer: 'Disclaimer',
      },
      header: {
        title: 'Disclaimer',
        subtitle: 'Please read this important information about our platform',
        lastUpdated: 'Last Updated: July 27, 2025',
      },
      sections: [
        {
          title: 'Intermediary Role',
          icon: CheckCircle,
          details: [
            'Nepali Shram is a digital platform designed to simplify and streamline the process of obtaining labor approval (Shram) for individuals seeking employment abroad.',
            'The platform serves as an intermediary between the Government of Nepal and individuals seeking labor approval, providing guidance, resources, and a user-friendly interface to facilitate the application process.',
            'Nepali Shram does not issue labor permits or approvals. All final decisions, approvals, and rejections are made solely by the Government of Nepal and its authorized agencies.'
          ]
        },
        {
          title: 'Information Accuracy',
          icon: CheckCircle,
          details: [
            'While we strive to provide accurate and up-to-date information, Nepali Shram is not responsible for any errors, omissions, or changes in government policies, procedures, or requirements.'
          ]
        },
        {
          title: 'Third-Party Links',
          icon: CheckCircle,
          details: [
            'The platform may contain links to third-party websites, including government portals and partner organizations. Nepali Shram is not responsible for the content, privacy practices, or accuracy of information on these external sites.'
          ]
        },
        {
          title: 'Data Privacy',
          icon: CheckCircle,
          details: [
            'User data is handled in accordance with our Privacy Policy. We do not share personal information with unauthorized third parties.'
          ]
        },
        {
          title: 'No Legal Advice',
          icon: CheckCircle,
          details: [
            'The information provided on this platform is for general guidance only and does not constitute legal advice. Users are encouraged to consult official government sources or legal professionals for specific concerns.'
          ]
        },
        {
          title: 'Service Limitations',
          icon: CheckCircle,
          details: [
            'Nepali Shram is not liable for delays, technical issues, or unsuccessful applications resulting from factors beyond our control, including but not limited to government system outages or user-provided information errors.'
          ]
        }
      ],
      footerCta: {
        title: 'Questions About This Disclaimer?',
        description: 'Contact our support team for clarification on any disclaimer-related concerns.',
        contactButton: 'Contact Support',
        homeButton: 'Back to Home',
      }
    },
    np: {
      navbar: {
        title: 'नेपाली श्रम',
        subtitle: 'श्रम समाधान नेपाल',
        home: 'गृह पृष्ठ',
        howItWorks: 'यसले कसरी काम गर्छ',
        services: 'सेवाहरू',
        about: 'हाम्रो बारेमा',
        privacy: 'गोपनीयता नीति',
        faqs: 'प्रश्न र उत्तर',
        contact: 'सम्पर्क गर्नुहोस्',
        applyNow: 'अहिले नै आवेदन दिनुहोस्',
        language: 'English',
      },
      breadcrumb: {
        home: 'गृह पृष्ठ',
        disclaimer: 'डिस्क्लेमर',
      },
      header: {
        title: 'डिस्क्लेमर',
        subtitle: 'कृपया हाम्रो प्लेटफर्मको बारेमा यो महत्वपूर्ण जानकारी पढ्नुहोस्',
        lastUpdated: 'अन्तिम अपडेट: जुलाई २७, २०२५',
      },
      sections: [
        {
          title: 'मध्यस्थको भूमिका',
          icon: CheckCircle,
          details: [
            'नेपाली श्रम एक डिजिटल प्लेटफर्म हो जसले विदेशमा रोजगारी खोज्ने व्यक्तिहरूका लागि श्रम स्वीकृति (श्रम) प्राप्त गर्ने प्रक्रिया सरल र सुव्यवस्थित बनाउँछ।',
            'यो प्लेटफर्म नेपाल सरकार र श्रम स्वीकृति खोज्ने व्यक्तिहरूबीच मार्गदर्शन, स्रोतहरू, र प्रयोगकर्ता मैत्री इन्टरफेस प्रदान गर्दै मध्यस्थको रूपमा कार्य गर्दछ।',
            'नेपाली श्रम श्रम अनुमति वा स्वीकृति जारी गर्दैन। सबै अन्तिम निर्णय, स्वीकृति, र अस्वीकृति नेपाल सरकार र यसको अधिकृत निकायहरूद्वारा मात्र गरिन्छ।'
          ]
        },
        {
          title: 'जानकारीको शुद्धता',
          icon: CheckCircle,
          details: [
            'हामी सही र अद्यावधिक जानकारी प्रदान गर्न प्रयास गर्छौं, तर सरकारी नीतिहरू, प्रक्रियाहरू, वा आवश्यकताहरूमा कुनै त्रुटि, छुट, वा परिवर्तनको लागि नेपाली श्रम जिम्मेवार छैन।'
          ]
        },
        {
          title: 'तेस्रो-पक्ष लिंकहरू',
          icon: CheckCircle,
          details: [
            'प्लेटफर्ममा तेस्रो-पक्ष वेबसाइटहरू, सरकारी पोर्टलहरू, र साझेदार संस्थाहरूका लिंकहरू हुन सक्छन्। यी बाह्य साइटहरूको सामग्री, गोपनीयता अभ्यास, वा जानकारीको शुद्धताको लागि नेपाली श्रम जिम्मेवार छैन।'
          ]
        },
        {
          title: 'डेटा गोपनीयता',
          icon: CheckCircle,
          details: [
            'प्रयोगकर्ता डेटा हाम्रो गोपनीयता नीतिअनुसार ह्यान्डल गरिन्छ। हामी अनधिकृत तेस्रो पक्षसँग व्यक्तिगत जानकारी साझा गर्दैनौं।'
          ]
        },
        {
          title: 'कानूनी सल्लाह छैन',
          icon: CheckCircle,
          details: [
            'यो प्लेटफर्ममा प्रदान गरिएको जानकारी सामान्य मार्गदर्शनका लागि मात्र हो र कानूनी सल्लाह होइन। प्रयोगकर्ताहरूलाई विशेष चिन्ताका लागि आधिकारिक सरकारी स्रोत वा कानूनी पेशेवरसँग परामर्श गर्न प्रोत्साहित गरिन्छ।'
          ]
        },
        {
          title: 'सेवा सीमाहरू',
          icon: CheckCircle,
          details: [
            'सरकारको प्रणालीमा समस्या वा प्रयोगकर्ताद्वारा प्रदान गरिएको जानकारीको त्रुटि लगायत हाम्रो नियन्त्रण बाहिरका कारण ढिलाइ, प्राविधिक समस्या, वा असफल आवेदनहरूको लागि नेपाली श्रम जिम्मेवार छैन।'
          ]
        }
      ],
      footerCta: {
        title: 'डिस्क्लेमरको बारेमा प्रश्नहरू छन्?',
        description: 'डिस्क्लेमर सम्बन्धी कुनै पनि चिन्ताको स्पष्टीकरणका लागि हाम्रो सहयोग टोलीलाई सम्पर्क गर्नुहोस्।',
        contactButton: 'सहयोग सम्पर्क गर्नुहोस्',
        homeButton: 'गृह पृष्ठमा फर्कनुहोस्',
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
            <li><Link href="/" className="hover:text-red-600">{t.breadcrumb.home}</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{t.breadcrumb.disclaimer}</li>
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
              <AlertCircle className="w-5 h-5" />
              <span className="text-gray-700">{t.header.lastUpdated}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <main className="space-y-10">
          {t.sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <section key={idx} className="bg-white rounded-lg shadow-sm border p-6 sm:p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <ul className="space-y-2">
                  {section.details.map((detail, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm sm:text-base">{detail}</span>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </main>
      </div>

    

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
};

export default DisclaimerPage;

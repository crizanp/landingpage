import React from 'react';
import { HelpCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';

const SimpleFAQ = ({ language = 'en' }) => {
  const translations = {
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Find answers to common questions about Nepal Labor Permit application process",
      faqs: [
        {
          question: "What is Nepal Labor Permit System?",
          answer: "The Nepal Labor Permit System is a digital platform that allows Nepali citizens to apply for labor permits (श्रम स्वीकृति) online for foreign employment. This system streamlines the process of obtaining necessary approvals from the Department of Foreign Employment (DoFE) for working abroad legally."
        },
        {
          question: "Who needs a Labor Permit?",
          answer: "Any Nepali citizen who wants to work abroad legally must obtain a Labor Permit from the Department of Foreign Employment. This includes workers going to Gulf countries, Malaysia, and other destinations for employment purposes."
        },
        {
          question: "How long does the application process take?",
          answer: "The standard processing time is 3-5 working days from the date of complete application submission with all required documents. However, this may vary depending on the destination country and completeness of documentation."
        },
        {
          question: "Can I apply online from anywhere?",
          answer: "Yes, you can apply online from anywhere in Nepal or abroad. However, you may need to visit the nearest DoFE office or authorized center for biometric verification and document verification in some cases."
        },
        {
          question: "What documents are required for Labor Permit?",
          answer: "Required documents include: Valid passport, Citizenship certificate, Educational certificates, Medical fitness certificate, Job offer letter, Employment contract, Passport-sized photographs, and other country-specific requirements."
        },
        {
          question: "What are the fees for Labor Permit?",
          answer: "The standard fee is NPR 360 for Labor Permit application service. Additional charges may apply for express processing, document verification, and other services. Payment can be made online through digital wallets, banking, or cards."
        },
        {
          question: "What payment methods are accepted?",
          answer: "We accept various payment methods including debit/credit cards, mobile banking, digital wallets (eSewa, Khalti), and online banking transfers for your convenience."
        },
        {
          question: "How can I track my application status?",
          answer: "You can track your application status in real-time through your dashboard. You'll also receive SMS and email notifications at each stage of processing. Use your application number to check status."
        },
        {
          question: "How can I get help if I have problems?",
          answer: "You can contact our 24/7 customer support at +977-9842997378, email us at support@nepalshram.com, or visit the nearest DoFE office. We also have live chat support available on our website."
        },
        {
          question: "Can I modify my application after submission?",
          answer: "Minor corrections can be made through your dashboard before final approval. For major changes, you may need to contact customer support or submit a new application depending on the stage of processing."
        }
      ],
      contactInfo: {
        title: "Need More Help?",
        subtitle: "Contact our support team for personalized assistance",
        phone: "+977-9842997378",
        email: "support@nepalshram.com",
        address: "Department of Foreign Employment, Kathmandu, Nepal",
        hours: "24/7 Customer Support Available"
      }
    },
    np: {
      title: "बारम्बार सोधिने प्रश्नहरू",
      subtitle: "नेपाल श्रम अनुमति आवेदन प्रक्रियाको बारेमा सामान्य प्रश्नहरूको जवाफ पाउनुहोस्",
      faqs: [
        {
          question: "नेपाल श्रम अनुमति प्रणाली के हो?",
          answer: "नेपाल श्रम अनुमति प्रणाली एक डिजिटल प्लेटफर्म हो जसले नेपाली नागरिकहरूलाई वैदेशिक रोजगारीको लागि श्रम अनुमति (श्रम स्वीकृति) अनलाइन आवेदन दिन अनुमति दिन्छ। यो प्रणालीले वैदेशिक रोजगार विभाग (DoFE) बाट वैध रूपमा विदेश काम गर्नको लागि आवश्यक अनुमोदन प्राप्त गर्ने प्रक्रियालाई सुव्यवस्थित बनाउँछ।"
        },
        {
          question: "श्रम अनुमति कसलाई चाहिन्छ?",
          answer: "वैध रूपमा विदेश काम गर्न चाहने कुनै पनि नेपाली नागरिकले वैदेशिक रोजगार विभागबाट श्रम अनुमति लिनुपर्छ। यसमा खाडी देशहरू, मलेसिया, र अन्य गन्तव्यहरूमा रोजगारीको उद्देश्यले जाने कामदारहरू समावेश छन्।"
        },
        {
          question: "आवेदन प्रक्रियामा कति समय लाग्छ?",
          answer: "सबै आवश्यक कागजातहरू सहित पूर्ण आवेदन पेश गरेको मितिदेखि मानक प्रक्रिया समय ३-५ कार्य दिन हो। तर, यो गन्तव्य देश र कागजातको पूर्णताको आधारमा फरक हुन सक्छ।"
        },
        {
          question: "के म जहाँबाट पनि अनलाइन आवेदन दिन सक्छु?",
          answer: "हो, तपाईं नेपाल भित्र वा विदेशबाट जहाँबाट पनि अनलाइन आवेदन दिन सक्नुहुन्छ। तर, केही अवस्थामा बायोमेट्रिक प्रमाणीकरण र कागजात प्रमाणीकरणको लागि नजिकैको DoFE कार्यालय वा अधिकृत केन्द्रमा जानुपर्न सक्छ।"
        },
        {
          question: "श्रम अनुमतिको लागि कुन कागजातहरू आवश्यक छन्?",
          answer: "आवश्यक कागजातहरूमा समावेश छ: वैध राहदानी, नागरिकता प्रमाणपत्र, शैक्षिक प्रमाणपत्रहरू, चिकित्सा फिटनेस प्रमाणपत्र, जागिर प्रस्ताव पत्र, रोजगारी सम्झौता, राहदानी आकारको फोटो, र अन्य देश-विशिष्ट आवश्यकताहरू।"
        },
        {
          question: "श्रम अनुमतिको लागि शुल्क कति छ?",
          answer: "श्रम अनुमति आवेदनको लागि मानक शुल्क रु. 360 छ। एक्सप्रेस प्रोसेसिंग, कागजात प्रमाणीकरण, र अन्य सेवाहरूको लागि थप शुल्क लाग्न सक्छ। भुक्तानी डिजिटल वालेट, बैंकिङ, वा कार्ड मार्फत अनलाइन गर्न सकिन्छ।"
        },
        {
          question: "कुन भुक्तानी विधिहरू स्वीकार गरिन्छन्?",
          answer: "हामी तपाईंको सुविधाको लागि डेबिट/क्रेडिट कार्ड, मोबाइल बैंकिङ, डिजिटल वालेट (eSewa, Khalti), र अनलाइन बैंकिङ ट्रान्सफर सहित विभिन्न भुक्तानी विधिहरू स्वीकार गर्छौं।"
        },
        {
          question: "म कसरी मेरो आवेदन स्थिति ट्र्याक गर्न सक्छु?",
          answer: "तपाईं आफ्नो ड्यासबोर्ड मार्फत आफ्नो आवेदन स्थिति वास्तविक समयमा ट्र्याक गर्न सक्नुहुन्छ। तपाईंले प्रक्रियाको प्रत्येक चरणमा SMS र इमेल सूचनाहरू पनि प्राप्त गर्नुहुनेछ। स्थिति जाँच गर्न आफ्नो आवेदन नम्बर प्रयोग गर्नुहोस्।"
        },
        {
          question: "यदि मलाई समस्या छ भने कसरी सहायता पाउन सक्छु?",
          answer: "तपाईं हाम्रो २४/७ ग्राहक सहायतालाई +977-9842997378 मा सम्पर्क गर्न सक्नुहुन्छ, हामीलाई support@nepalshram.com मा इमेल गर्नुहोस्, वा नजिकैको DoFE कार्यालयमा जानुहोस्। हामीसँग हाम्रो वेबसाइटमा लाइभ च्याट सहयोग पनि उपलब्ध छ।"
        },
        {
          question: "के म आवेदन बुझाएपछि परिमार्जन गर्न सक्छु?",
          answer: "अन्तिम अनुमोदन भन्दा पहिले तपाईंको ड्यासबोर्ड मार्फत साना सुधारहरू गर्न सकिन्छ। ठूला परिवर्तनहरूको लागि, तपाईंले ग्राहक सहायतालाई सम्पर्क गर्नुपर्न सक्छ वा प्रक्रियाको चरणको आधारमा नयाँ आवेदन पेश गर्नुपर्न सक्छ।"
        }
      ],
      contactInfo: {
        title: "थप सहायता चाहिन्छ?",
        subtitle: "व्यक्तिगत सहायताको लागि हाम्रो सहयोग टोलीलाई सम्पर्क गर्नुहोस्",
        phone: "+977-9842997378",
        email: "support@nepalshram.com",
        address: "वैदेशिक रोजगार विभाग, काठमाडौं, नेपाल",
        hours: "२४/७ ग्राहक सहायता उपलब्ध"
      }
    }
  };

  const t = translations[language];

  return (
    <section
      className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-blue-50 to-white"
      id="faqs"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-2 sm:px-4">
            {t.subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 sm:space-y-6 mb-10 sm:mb-16">
          {t.faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 p-4 sm:p-6"
            >
              <div className="flex items-start gap-3 sm:gap-4 flex-wrap sm:flex-nowrap">
                <div className="flex-shrink-0 mt-1">
                  <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base lg:text-lg leading-tight">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default SimpleFAQ;
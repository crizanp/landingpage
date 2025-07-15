import React, { useState, useEffect, useRef } from 'react';
import { 
  UserPlus, 
  LogIn, 
  FileText, 
  Upload, 
  CreditCard, 
  CheckCircle, 
  Eye, 
  ArrowRight,
  Clock,
  Shield,
  Phone
} from 'lucide-react';

const HowItWorks = ({ language }) => {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementTop = rect.top + scrollY;
          const elementHeight = rect.height;
          
          // Check if element is in viewport
          if (rect.top < windowHeight * 0.7 && rect.bottom > windowHeight * 0.3) {
            setActiveStep(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    en: {
      title: "How It Works",
      subtitle: "Follow These Simple Steps to Get Your Labor Permit",
      description: "Complete these easy steps to apply for your श्रम स्वीकृति (Labor Permit) online",
      steps: [
        {
          title: "Sign Up",
          description: "Create your account with basic information",
          details: "Provide your name, email, phone number, and create a secure password to get started.",
          icon: UserPlus,
          color: "bg-red-400"
        },
        {
          title: "Login",
          description: "Access your personal dashboard",
          details: "Use your credentials to log into your secure personal dashboard where you can manage all your applications.",
          icon: LogIn,
          color: "bg-red-400"
        },
        {
          title: "Fill Application",
          description: "Complete the labor permit application form",
          details: "Fill out all required fields including personal information, destination country, job details, and employer information.",
          icon: FileText,
          color: "bg-red-400"
        },
        {
          title: "Upload Documents",
          description: "Submit all required documents",
          details: "Upload passport copy, citizenship, educational certificates, medical reports, and other required documents.",
          icon: Upload,
          color: "bg-red-400"
        },
        {
          title: "Make Payment",
          description: "Complete the payment process",
          details: "Pay the required government fees securely through our integrated payment system using card, mobile banking, or digital wallet.",
          icon: CreditCard,
          color: "bg-red-400"
        },
        {
          title: "Track Progress",
          description: "Monitor your application status",
          details: "Track your application in real-time, receive updates via SMS/email, and download your approved permit when ready.",
          icon: Eye,
          color: "bg-red-400"
        }
      ],
      features: [
        "Quick 15-minute application",
        "Government approved process",
        "24/7 customer support",
        "Secure document handling"
      ],
      getStarted: "Get Started Now",
      viewDetails: "View Details",
      processing: "Processing Time: 3-5 working days",
      support: "Need Help? Call +977-9842997378"
    },
    np: {
      title: "यसले कसरी काम गर्छ",
      subtitle: "तपाईंको श्रम अनुमति प्राप्त गर्नका लागि यी सरल चरणहरू पालना गर्नुहोस्",
      description: "तपाईंको श्रम स्वीकृति (Labor Permit) को लागि अनलाइन आवेदन दिन यी सजिलो चरणहरू पूरा गर्नुहोस्",
      steps: [
        {
          title: "साइन अप गर्नुहोस्",
          description: "आधारभूत जानकारी सहित तपाईंको खाता बनाउनुहोस्",
          details: "सुरु गर्नका लागि तपाईंको नाम, इमेल, फोन नम्बर प्रदान गर्नुहोस् र सुरक्षित पासवर्ड बनाउनुहोस्।",
          icon: UserPlus,
          color: "bg-blue-500"
        },
        {
          title: "लगइन गर्नुहोस्",
          description: "तपाईंको व्यक्तिगत ड्यासबोर्डमा पहुँच गर्नुहोस्",
          details: "तपाईंको सुरक्षित व्यक्तिगत ड्यासबोर्डमा लगइन गर्नका लागि तपाईंको प्रमाणपत्रहरू प्रयोग गर्नुहोस् जहाँ तपाईं आफ्ना सबै आवेदनहरू व्यवस्थापन गर्न सक्नुहुन्छ।",
          icon: LogIn,
          color: "bg-green-500"
        },
        {
          title: "आवेदन फारम भर्नुहोस्",
          description: "श्रम अनुमति आवेदन फारम पूरा गर्नुहोस्",
          details: "व्यक्तिगत जानकारी, गन्तव्य देश, कामको विवरण, र रोजगारदाताको जानकारी सहित सबै आवश्यक क्षेत्रहरू भर्नुहोस्।",
          icon: FileText,
          color: "bg-blue-500"
        },
        {
          title: "कागजातहरू अपलोड गर्नुहोस्",
          description: "सबै आवश्यक कागजातहरू पेश गर्नुहोस्",
          details: "राहदानीको प्रतिलिपि, नागरिकता, शैक्षिक प्रमाणपत्र, स्वास्थ्य रिपोर्ट, र अन्य आवश्यक कागजातहरू अपलोड गर्नुहोस्।",
          icon: Upload,
          color: "bg-orange-500"
        },
        {
          title: "भुक्तानी गर्नुहोस्",
          description: "भुक्तानी प्रक्रिया पूरा गर्नुहोस्",
          details: "कार्ड, मोबाइल बैंकिङ, वा डिजिटल वालेट प्रयोग गरेर हाम्रो एकीकृत भुक्तानी प्रणाली मार्फत आवश्यक सरकारी शुल्क सुरक्षित रूपमा भुक्तानी गर्नुहोस्।",
          icon: CreditCard,
          color: "bg-red-400"
        },
        {
          title: "प्रगति ट्र्याक गर्नुहोस्",
          description: "तपाईंको आवेदनको स्थिति निगरानी गर्नुहोस्",
          details: "तपाईंको आवेदनलाई वास्तविक समयमा ट्र्याक गर्नुहोस्, SMS/इमेल मार्फत अपडेटहरू प्राप्त गर्नुहोस्, र तयार भएपछि तपाईंको अनुमोदित अनुमति डाउनलोड गर्नुहोस्।",
          icon: Eye,
          color: "bg-blue-500"
        }
      ],
      features: [
        "छिटो १५ मिनेटको आवेदन",
        "सरकार अनुमोदित प्रक्रिया",
        "२४/७ ग्राहक सहयोग",
        "सुरक्षित कागजात ह्यान्डलिंग"
      ],
      getStarted: "अहिले नै सुरु गर्नुहोस्",
      viewDetails: "विस्तार हेर्नुहोस्",
      processing: "प्रक्रिया समय: ३-५ कार्य दिन",
      support: "सहायता चाहिन्छ? फोन गर्नुहोस् +977-9842997378"
    }
  };

  const t = translations[language];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-3 sm:mb-4 px-4 sm:px-0">
            {t.subtitle}
          </p>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto px-4 sm:px-0">
            {t.description}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Progress Line (Desktop only) */}
          <div className="hidden lg:block absolute left-5 top-0 h-full w-1 bg-gray-200">
            <div 
              className="bg-gradient-to-b from-blue-500 to-red-500 transition-all duration-1000 w-full"
              style={{ height: `${(activeStep / (t.steps.length - 1)) * 100}%` }}
            ></div>
          </div>

          {/* Steps Container */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-16">
            {t.steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;

              return (
                <div
                  key={index}
                  ref={(el) => stepRefs.current[index] = el}
                  className="relative flex items-center"
                >
                  {/* Step Number (Desktop only) */}
                  <div className="hidden lg:flex absolute left-0 z-10">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl transition-all duration-500 ${
                      isCompleted ? 'bg-green-500 scale-110' : isActive ? 'bg-blue-500 scale-110' : 'bg-gray-300'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="w-8 h-8" />
                      ) : (
                        <span>{index + 1}</span>
                      )}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 lg:ml-24">
                    <div className={`bg-white rounded-xl lg:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 transform transition-all duration-500 ${
                      isActive ? 'ring-2 ring-blue-400/60 shadow-xl scale-105' : 'hover:scale-105'
                    }`}>
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        {/* Mobile Step Number */}
                        <div className="lg:hidden">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg transition-all duration-500 ${
                            isCompleted ? 'bg-green-500' : isActive ? 'bg-blue-500' : 'bg-gray-300'
                          }`}>
                            {isCompleted ? (
                              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                            ) : (
                              <span>{index + 1}</span>
                            )}
                          </div>
                        </div>

                        {/* Icon */}
                        <div className={`${step.color} p-3 sm:p-4 rounded-lg sm:rounded-xl flex-shrink-0 transform transition-all duration-500 ${
                          isActive ? 'scale-110' : ''
                        }`}>
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                            {step.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-4">
                            {step.description}
                          </p>
                          
                          {/* Details - Hidden on mobile */}
                          <p className="hidden sm:block text-xs sm:text-sm text-gray-500">
                            {step.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 sm:mt-16 bg-white rounded-xl lg:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {t.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
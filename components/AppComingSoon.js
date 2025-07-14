import React, { useState } from 'react';
import { 
  Smartphone, 
  Bell, 
  CheckCircle, 
  Mail,
  Send
} from 'lucide-react';

const AppComingSoon = ({ language = 'en' }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const translations = {
    en: {
      title: "Mobile App Coming Soon",
      subtitle: "Apply for labor permits directly from your phone",
      features: [
        "Instant notifications",
        "Secure document upload", 
        "Track application status"
      ],
      notify: {
        title: "Get notified when we launch",
        placeholder: "Enter your email",
        button: "Notify Me",
        success: "Thank you! We'll notify you when ready."
      },
      launch: "Expected Launch: September 2025",
      platforms: "Available on iOS and Android"
    },
    np: {
      title: "मोबाइल एप छिट्टै आउँदै",
      subtitle: "आफ्नो फोनबाट सिधै श्रम अनुमतिको लागि आवेदन दिनुहोस्",
      features: [
        "तुरुन्त सूचनाहरू",
        "सुरक्षित कागजात अपलोड",
        "आवेदन स्थिति ट्र्याक गर्नुहोस्"
      ],
      notify: {
        title: "हामी सुरु गर्दा सूचना पाउनुहोस्",
        placeholder: "आफ्नो इमेल राख्नुहोस्",
        button: "मलाई सूचना दिनुहोस्",
        success: "धन्यवाद! तयार हुँदा हामी तपाईंलाई सूचना दिनेछौं।"
      },
      launch: "अपेक्षित सुरुवात: सेप्टेम्बर २०२५",
      platforms: "iOS र Android मा उपलब्ध"
    }
  };

  const t = translations[language];

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Curved Background */}
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 1440 800"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="curvedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e0e7ff" />
              <stop offset="50%" stopColor="#c7d2fe" />
              <stop offset="100%" stopColor="#a5b4fc" />
            </linearGradient>
          </defs>
          
        
          
          {/* Secondary wave */}
          <path
            d="M0,100 C300,150 600,50 900,100 C1200,150 1440,80 1440,80 L1440,500 C1200,600 800,450 600,500 C400,550 200,400 0,450 Z"
            fill="url(#curvedGradient)"
            opacity="0.2"
          />
          
         
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-lg">
            <Smartphone className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  <div className="bg-blue-600 h-20 flex items-center justify-center">
                    <h3 className="text-white font-semibold">श्रम स्वीकृति</h3>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-gray-600">Application Submitted</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Bell className="w-5 h-5 text-blue-500" />
                      <span className="text-sm text-gray-600">Document Verified</span>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3">
                      <p className="text-xs text-gray-500">Status: Processing</p>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Features */}
            <div className="space-y-4">
              {t.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Email Signup */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {t.notify.title}
              </h3>
              
              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.notify.placeholder}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90"
                      required
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                      <Send className="w-4 h-4" />
                      <span>{t.notify.button}</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span>{t.notify.success}</span>
                </div>
              )}
            </div>

            {/* Launch Info */}
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600 font-medium">{t.launch}</p>
              <p className="text-sm text-gray-500">{t.platforms}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppComingSoon;
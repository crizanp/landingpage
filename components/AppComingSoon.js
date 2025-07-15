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

  const handleSubmit = () => {
    if (email && email.includes('@')) {
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
    <section className="relative py-8 sm:py-12 lg:py-16 overflow-hidden bg-white">
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

          {/* Primary wave */}
          <path
            d="M0,50 C300,100 600,0 900,50 C1200,100 1440,30 1440,30 L1440,400 C1200,500 800,350 600,400 C400,450 200,300 0,350 Z"
            fill="url(#curvedGradient)"
            opacity="0.3"
          />

          {/* Secondary wave */}
          <path
            d="M0,100 C300,150 600,50 900,100 C1200,150 1440,80 1440,80 L1440,500 C1200,600 800,450 600,500 C400,550 200,400 0,450 Z"
            fill="url(#curvedGradient)"
            opacity="0.2"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/80 backdrop-blur-sm rounded-full mb-4 sm:mb-6 shadow-lg">
            <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Phone Mockup */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative">
              <div className="w-48 h-72 sm:w-56 sm:h-80 lg:w-64 lg:h-96 bg-gray-900 rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-xl sm:rounded-2xl overflow-hidden">
                  {/* Phone Screen Header */}
                  <div className="bg-blue-600 h-14 sm:h-16 lg:h-20 flex items-center justify-center relative">
                    {/* Status bar */}
                    <div className="absolute top-1 left-0 right-0 flex justify-between items-center px-3 text-white text-xs opacity-80">
                      <span>9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-2 border border-white rounded-sm">
                          <div className="w-3 h-1 bg-white rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-white font-semibold text-sm sm:text-base">श्रम स्वीकृति</h3>
                  </div>

                  {/* Phone Screen Content */}
                  <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600">Application Submitted</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600">Document Verified</span>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-2 sm:p-3">
                      <p className="text-xs text-gray-500">Status: Processing</p>
                      <div className="mt-2 bg-blue-200 h-1 rounded-full">
                        <div className="bg-blue-600 h-1 rounded-full w-2/3"></div>
                      </div>
                    </div>

                    {/* Additional mobile app elements */}
                    <div className="space-y-2">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                        <p className="text-xs text-green-700">Next: Medical Check</p>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
                        <p className="text-xs text-blue-700">Estimated: 2 days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-4 bg-red-400 text-white rounded-md w-auto h-auto px-2 py-1 sm:px-3 sm:py-1.5 flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg animate-pulse">
                coming soon
              </div>

            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* Features */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 px-4 sm:px-0">
                Key Features
              </h3>
              {t.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 px-4 sm:px-0">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Email Signup */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-white/20 mx-4 sm:mx-0">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                {t.notify.title}
              </h3>

              {!isSubscribed ? (
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.notify.placeholder}
                      className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 text-sm sm:text-base"
                    />
                    <button
                      onClick={handleSubmit}
                      className="px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform hover:scale-105 text-sm sm:text-base font-medium"
                    >
                      <Send className="w-4 h-4" />
                      <span>{t.notify.button}</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-2 text-green-600 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{t.notify.success}</span>
                </div>
              )}
            </div>

            {/* Launch Info */}
            <div className="text-center space-y-2 px-4 sm:px-0">
              <p className="text-sm sm:text-base text-gray-600 font-medium">{t.launch}</p>
              <p className="text-xs sm:text-sm text-gray-500">{t.platforms}</p>

              {/* App Store Badges */}
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 mt-4 pt-4 border-t border-gray-200">
                {/* App Store Badge */}
                <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors cursor-pointer">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs opacity-80">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </div>

                {/* Google Play Badge */}
                <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors cursor-pointer">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs opacity-80">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppComingSoon;
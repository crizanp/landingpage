import React from 'react';
import Image from 'next/image';

const UnderConstruction = ({ language = 'en' }) => {
  const t = {
    en: {
      title: 'We’re Building Something Great',
      subtitle: 'Nepal Shram will be back soon with an improved experience for Labour Permit services.',
      message: 'Our team is working hard to launch the new site. Meanwhile you can contact support or request a notification when we go live.',
      whatsapp: 'Message on WhatsApp',
      notify: 'Notify Me'
    },
    np: {
      title: 'हामी केही उत्कृष्ट निर्माण गर्दैछौं',
      subtitle: 'नेपाली श्रम छिट्टै श्रम स्वीकृति सेवाहरूको लागि नयाँ अनुभवका साथ फर्कनेछ।',
      message: 'हाम्रो टिमले नयाँ साइट सुरू गर्न मेहनत गरिरहेको छ। यसबीच तपाई समर्थनसँग सम्पर्क गर्न वा हामी लाइभ हुँदा सूचना अनुरोध गर्न सक्नुहुन्छ।',
      whatsapp: 'WhatsApp मा सन्देश पठाउनुहोस्',
      notify: 'मलाई जानकारी दिनुहोस्'
    }
  };

  const s = t[language] || t.en;
  const supportEmail = 'nepalishramofficial@gmail.com';
  const mailto = `mailto:${supportEmail}?subject=${encodeURIComponent('Site launch inquiry')}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-red-100 to-red-50 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left: Content */}
        <div className="px-6 py-8 lg:py-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 relative">
              <Image src="/assets/nepalishram_logo.png" alt="logo" fill style={{ objectFit: 'contain' }} />
            </div>
            <div>
              <h3 className="text-sm text-red-600 font-semibold">Nepal Shram</h3>
              <p className="text-xs text-gray-500">Labor Permit & Govt Services</p>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            {s.title}
          </h1>
          <p className="text-gray-700 text-lg mb-6 max-w-xl">{s.subtitle}</p>

          <p className="text-gray-600 mb-8 max-w-xl">{s.message}</p>

          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <a
              href={mailto}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-3 rounded-lg shadow-lg hover:from-red-700 hover:to-red-800 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8.5v7A2.5 2.5 0 005.5 18h13a2.5 2.5 0 002.5-2.5v-7" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 7l-9 6-9-6" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-medium">Contact Support</span>
            </a>

            <button className="inline-flex items-center gap-2 border border-red-600 text-red-600 px-5 py-3 rounded-lg hover:bg-red-50 transition" onClick={() => window.alert('We will notify you when we launch!')}>
              {s.notify}
            </button>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow">💡</div>
              <p className="text-sm mt-2 text-gray-700">Fast Process</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow">🔒</div>
              <p className="text-sm mt-2 text-gray-700">Secure</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow">🌐</div>
              <p className="text-sm mt-2 text-gray-700">Easy to apply</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow">📞</div>
              <p className="text-sm mt-2 text-gray-700">24/7 Support</p>
            </div>
          </div>
        </div>

        {/* Right: Illustration */}
        <div className="hidden lg:flex items-center justify-center p-6">
          <div className="w-full max-w-md relative">
            <Image src="/assets/heroimage.png" alt="hero" width={720} height={480} className="rounded-2xl shadow-2xl" />
            <div className="absolute -bottom-6 left-6 bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg">
              <p className="text-sm text-gray-700">getting back — stay tuned</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;

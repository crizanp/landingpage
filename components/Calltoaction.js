import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const CallToAction = ({ language }) => {
  const translations = {
    en: {
      processing: "Processing Time: 3-5 working days",
      support: "Need Help? Call +977-9842997378",
      getStarted: "Get Started Now"
    },
    np: {
      processing: "प्रक्रिया समय: ३-५ कार्य दिन",
      support: "सहायता चाहिन्छ? फोन गर्नुहोस् +977-9842997378",
      getStarted: "अहिले नै सुरु गर्नुहोस्"
    }
  };

  const t = translations[language];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="bg-blue-200 rounded-2xl p-8 text-black">
            <h3 className="text-2xl font-bold mb-4">
              {t.processing}
            </h3>
            <p className="text-geay-600 ">
              {t.support}
            </p>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
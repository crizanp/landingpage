import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle, 
  Clock,
  Headphones,
  Globe,
  User,
  MessageCircle
} from 'lucide-react';

const ContactUs = ({ language = 'en' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const translations = {
    en: {
      title: "Get Support For the App",
      subtitle: "Contact Us",
      description: "Need help with your labor permit application? Our support team is here to assist you.",
      form: {
        name: "Your Name",
        email: "Your Email",
        phone: "Telephone",
        subject: "Subject",
        message: "Your Message",
        submit: "Send Message",
        submitting: "Sending...",
        success: "Message sent successfully! We'll get back to you soon."
      },
      contact: {
        phone: {
          title: "Contact Number",
          number: "+977-9842997378"
        },
        email: {
          title: "Email Support",
          primary: "info@nepalishram.com",
          secondary: "support@nepalishram.com"
        },
        address: {
          title: "Office Address",
          location: "Kathmandu, Nepal"
        },
        hours: {
          title: "Support Hours",
          time: "Sunday - Friday: 10:00 AM - 5:00 PM"
        }
      },
      quickSupport: {
        title: "Quick Support",
        items: [
          "Application Status Check",
          "Document Upload Issues",
          "Payment Problems",
          "Technical Support"
        ]
      }
    },
    np: {
      title: "एपको लागि सहायता प्राप्त गर्नुहोस्",
      subtitle: "सम्पर्क",
      description: "तपाईंको श्रम अनुमति आवेदनमा सहायता चाहिन्छ? हाम्रो सहायता टोली तपाईंलाई सहयोग गर्न यहाँ छ।",
      form: {
        name: "तपाईंको नाम",
        email: "तपाईंको इमेल",
        phone: "टेलिफोन",
        subject: "विषय",
        message: "तपाईंको सन्देश",
        submit: "सन्देश पठाउनुहोस्",
        submitting: "पठाउँदै...",
        success: "सन्देश सफलतापूर्वक पठाइयो! हामी छिट्टै तपाईंलाई जवाफ दिनेछौं।"
      },
      contact: {
        phone: {
          title: "निःशुल्क नम्बर",
          number: "११०१"
        },
        email: {
          title: "इमेल सहायता",
          primary: "info@nepalishram.com",
          secondary: "support@nepalishram.com"
        },
        address: {
          title: "कार्यालय ठेगाना",
          location: "काठमाडौं, नेपाल"
        },
        hours: {
          title: "सहायता समय",
          time: "आइतवार - शुक्रवार: बिहान १०:०० - साँझ ५:००"
        }
      },
      quickSupport: {
        title: "द्रुत सहायता",
        items: [
          "आवेदन स्थिति जाँच",
          "कागजात अपलोड समस्या",
          "भुक्तानी समस्या",
          "प्राविधिक सहायता"
        ]
      }
    }
  };

  const t = translations[language];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white" id='contact'>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            {t.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {/* Phone */}
              <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-100 transition-shadow">
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                  </div>
                  <div className="ml-3 sm:ml-4 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{t.contact.phone.title}</h3>
                    <p className="text-sm sm:text-base font-bold text-red-600 truncate">{t.contact.phone.number}</p>
                  </div>
                </div>
              </div>

              {/* Support Hours */}
              <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-100 transition-shadow">
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </div>
                  <div className="ml-3 sm:ml-4 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{t.contact.hours.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{t.contact.hours.time}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-100">
              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                </div>
                <div className="ml-3 sm:ml-4 min-w-0 flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{t.contact.email.title}</h3>
                  <p className="text-red-600 hover:text-red-800 cursor-pointer mb-1 text-sm sm:text-base break-all">
                    {t.contact.email.primary}
                  </p>
                  <p className="text-red-600 hover:text-red-800 cursor-pointer text-sm sm:text-base break-all">
                    {t.contact.email.secondary}
                  </p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-100">
              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                </div>
                <div className="ml-3 sm:ml-4 min-w-0">
                  <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{t.contact.address.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{t.contact.address.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg sm:rounded-xl border border-gray-100 p-4 sm:p-6 lg:p-8">
            {isSubmitted ? (
              <div className="text-center py-6 sm:py-8">
                <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600 text-sm sm:text-base px-2">{t.form.success}</p>
              </div>
            ) : (
              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      {t.form.name} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      {t.form.email} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      {t.form.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      {t.form.subject}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    {t.form.message} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors resize-none text-sm sm:text-base"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-md sm:rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center space-x-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-2 border-white border-t-transparent"></div>
                      <span>{t.form.submitting}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{t.form.submit}</span>
                    </>
                  )}
                </button>
                              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
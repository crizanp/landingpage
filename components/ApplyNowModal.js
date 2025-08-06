import React, { useState } from 'react';
import { X, User, Mail, Phone, Send } from 'lucide-react';

const ApplyNowModal = ({ isOpen, onClose, language }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const translations = {
        en: {
            title: "Apply for Labor Permit",
            name: "Full Name",
            email: "Email Address",
            phone: "Phone Number",
            namePlaceholder: "Enter your full name",
            emailPlaceholder: "Enter your email address",
            phonePlaceholder: "Enter your phone number",
            applyNow: "Apply Now",
            cancel: "Cancel",
            submitting: "Submitting..."
        },
        np: {
            title: "श्रम स्वीकृतिको लागि आवेदन दिनुहोस्",
            name: "पूरा नाम",
            email: "इमेल ठेगाना",
            phone: "फोन नम्बर",
            namePlaceholder: "आफ्नो पूरा नाम लेख्नुहोस्",
            emailPlaceholder: "आफ्नो इमेल ठेगाना लेख्नुहोस्",
            phonePlaceholder: "आफ्नो फोन नम्बर लेख्नुहोस्",
            applyNow: "अहिले नै आवेदन दिनुहोस्",
            cancel: "रद्द गर्नुहोस्",
            submitting: "पेश गर्दै..."
        }
    };

    const t = translations[language];

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

        try {
            // Validate form
            if (!formData.name || !formData.email || !formData.phone) {
                alert(language === 'en' ? 'Please fill all fields' : 'कृपया सबै फिल्डहरू भर्नुहोस्');
                setIsSubmitting(false);
                return;
            }

            // Construct WhatsApp message
            const message = language === 'en' 
                ? `I am applying for the shram swikriti (labor permit). My details are:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Please guide me with the further process. What should I do next?`
                : `म श्रम स्वीकृतिको लागि आवेदन दिन चाहन्छु। मेरो विवरण:
नाम: ${formData.name}
इमेल: ${formData.email}
फोन: ${formData.phone}

कृपया मलाई अगाडिको प्रक्रिया बारे मार्गदर्शन गर्नुहोस्। मैले अब के गर्नुपर्छ?`;

            // WhatsApp Business API or direct WhatsApp link
            const phoneNumber = "9779842997378"; // Your WhatsApp business number
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

            // Open WhatsApp
            window.open(whatsappUrl, '_blank');

            // Redirect to portal after a short delay
            setTimeout(() => {
                window.open('https://portal.nepalishram.com', '_blank');
            }, 2000);

            // Close modal and reset form
            onClose();
            setFormData({ name: '', email: '', phone: '' });

        } catch (error) {
            console.error('Error submitting form:', error);
            alert(language === 'en' ? 'Something went wrong. Please try again.' : 'केहि गलत भयो। कृपया फेरि प्रयास गर्नुहोस्।');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-gray-800">{t.title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {/* Name Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <User className="w-4 h-4 inline mr-2" />
                            {t.name}
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder={t.namePlaceholder}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 placeholder-gray-500"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Mail className="w-4 h-4 inline mr-2" />
                            {t.email}
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder={t.emailPlaceholder}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 placeholder-gray-500"
                            required
                        />
                    </div>

                    {/* Phone Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Phone className="w-4 h-4 inline mr-2" />
                            {t.phone}
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder={t.phonePlaceholder}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 placeholder-gray-500"
                            required
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex space-x-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                            {t.cancel}
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                        >
                            <Send className="w-4 h-4" />
                            <span>{isSubmitting ? t.submitting : t.applyNow}</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApplyNowModal;

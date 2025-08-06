import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';

const ApplyNowButton = ({ onClick, language, className = "", size = "medium", children }) => {
    const translations = {
        en: {
            applyNow: "Apply Now"
        },
        np: {
            applyNow: "अहिले नै आवेदन दिनुहोस्"
        }
    };

    const t = translations[language] || translations.en;

    const sizeClasses = {
        small: "px-4 py-2 text-sm",
        medium: "px-6 py-3 text-sm",
        large: "px-8 py-4 text-lg"
    };

    const baseClasses = "bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 rounded-lg";

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${sizeClasses[size]} ${className}`}
        >
            <Globe className="w-4 h-4" />
            <span>{children || t.applyNow}</span>
            {size === "large" && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
        </button>
    );
};

export default ApplyNowButton;

import React from 'react';

const Footer = ({ language = 'en' }) => {
    const footerLinks = [
        { name: 'Privacy', href: '/privacypolicy' },
        { name: 'How to Use', href: 'https://portal.nepalishram.com/tutorial' },
        { name: 'Agreement', href: '/agreement' },
        { name: 'About Us', href: '/about' },
        { name: 'Disclaimer', href: '/disclaimer' },
        { name: 'Compression', href: '/image-compression' },
        { name: 'Portal', href: 'https://portal.nepalishram.com' }
    ];

    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <img
                            src="/assets/Nepalishram.png"
                            alt="Nepali Shram Logo"
                            className="h-32 w-auto"
                        />
                    </div>
                    
                    {/* Links Section */}
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {footerLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="px-3 py-1.5 text-xs text-gray-600 hover:text-white hover:bg-red-600   rounded-md transition-all duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
                
                {/* Copyright Section */}
                <div className="text-center py-4 border-t border-gray-200 mt-4">
                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} Nepali Shram. All rights reserved. Powered by{' '}
                        <a 
                            href="https://nxtechhosting.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-red-600 hover:text-red-700 transition-colors"
                        >
                            NXtech
                        </a>
                        {' '}in coordination with{' '}
                        <a 
                            href="https://foxbeep.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-red-600 hover:text-red-700 transition-colors"
                        >
                            Foxbeep Technology
                        </a>
                    </p>
                </div>
                {/* Disclaimer Section */}
                <div className="text-center py-2">
                    <p className="text-xs text-gray-400 italic max-w-2xl mx-auto">
                        Disclaimer: The platform serves as an intermediary between the Government of Nepal and individuals seeking labor approval (Shram). It is designed to simplify and streamline the process of obtaining Shram approval.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
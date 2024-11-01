import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const EcommerceFooter: React.FC = () => {
    const companyName = 'E-Shop';
    const description = 'Your one-stop shop for everything you need. Discover quality products and exceptional service.';

    const footerLinks = [
        {
            title: 'Customer Service',
            links: [
                { label: 'Help Center', href: '#' },
                { label: 'Returns', href: '#' },
                { label: 'Shipping', href: '#' },
                { label: 'Track Order', href: '#' },
            ],
        },
        {
            title: 'About Us',
            links: [
                { label: 'Our Story', href: '#' },
                { label: 'Careers', href: '#' },
                { label: 'Press', href: '#' },
                { label: 'Investor Relations', href: '#' },
            ],
        },
    ];

    const socialLinks = [
        { icon: <FaFacebookF />, label: 'Facebook', href: '#' },
        { icon: <FaTwitter />, label: 'Twitter', href: '#' },
        { icon: <FaInstagram />, label: 'Instagram', href: '#' },
    ];

    return (
        <footer className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 ">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-3">{companyName}</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
                    </div>

                    {/* Footer Links */}
                    {footerLinks.map((section) => (
                        <div key={section.title} className="text-center md:text-left">
                            <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 "
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Social Links */}
                    <div className="flex justify-center md:justify-start space-x-4 mt-6 md:mt-0">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 "
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        © {new Date().getFullYear()} {companyName}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default EcommerceFooter;
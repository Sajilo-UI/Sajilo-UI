import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const PortfolioFooter: React.FC = () => {
    const navigationLinks = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        { icon: <FaLinkedin />, label: 'LinkedIn', href: '#' },
        { icon: <FaGithub />, label: 'GitHub', href: '#' },
        { icon: <FaTwitter />, label: 'Twitter', href: '#' },
        { icon: <FaEnvelope />, label: 'Email', href: '#' },
    ];

    return (
        <footer className="bg-gradient-to-b from-gray-200 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-300">
            <div className="container mx-auto px-8 py-12">
                {/* Top Section */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4">Let's Collaborate</h2>
                    <p className="text-md text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
                        Passionate about creating impactful web experiences. Reach out to discuss a project or just to connect!
                    </p>
                </div>

                {/* Divider */}
                <div className="border-b border-gray-300 dark:border-gray-700 mb-10"></div>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Brand */}
                    <div className="mb-6 md:mb-0">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Your Portfolio</h1>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Web Developer & Designer</p>
                    </div>

                    {/* Navigation Links */}
                    <nav className="mb-6 md:mb-0">
                        <ul className="flex flex-wrap justify-center space-x-6">
                            {navigationLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Social Links */}
                    <div className="flex space-x-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-transform transform hover:scale-110 duration-200"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center mt-10">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        © {new Date().getFullYear()} Your Name. All rights reserved.
                    </p>
                    <a
                        href="#top"
                        className="mt-3 inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-600 transition-colors duration-200"
                    >
                        <FaArrowUp className="inline-block mr-1" /> Back to Top
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default PortfolioFooter;
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative w-full border-t bg-gray-50 dark:bg-gray-900 py-8 xl:py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
        
        {/* Footer Message */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Built with care by Sajilo UI. Follow our journey!
        </p>

        {/* Contact & Copyright Section */}
        <div className="text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sajilo UI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
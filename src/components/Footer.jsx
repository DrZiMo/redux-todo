import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-8 mt-12'>
      <div className='container mx-auto px-6 sm:px-12 lg:px-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Logo and Brand Name */}
          <div className='flex flex-col items-start'>
            <div className='text-3xl font-bold text-blue-500 mb-4'>
              TIIGSI PAGES
            </div>
            <p className='text-gray-400 text-sm max-w-xs'>
              A trusted platform for your web pages and development needs. Let’s
              build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className='text-lg font-semibold text-gray-200 mb-4'>
              Quick Links
            </h5>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#home'
                  className='text-gray-400 hover:text-blue-500'>
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  className='text-gray-400 hover:text-blue-500'>
                  About
                </a>
              </li>
              <li>
                <a
                  href='#services'
                  className='text-gray-400 hover:text-blue-500'>
                  Services
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='text-gray-400 hover:text-blue-500'>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className='text-lg font-semibold text-gray-200 mb-4'>
              Contact Us
            </h5>
            <ul className='space-y-2'>
              <li className='text-gray-400'>
                Email:{' '}
                <a
                  href='mailto:contact@tiigsipages.com'
                  className='hover:text-blue-500'>
                  contact@tiigsipages.com
                </a>
              </li>
              <li className='text-gray-400'>Phone: +123 456 7890</li>
              <li className='text-gray-400'>
                Address: 123 Main St, City, Country
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h5 className='text-lg font-semibold text-gray-200 mb-4'>
              Follow Us
            </h5>
            <div className='flex space-x-4'>
              <a
                href='https://facebook.com'
                className='text-gray-400 hover:text-blue-500'>
                <i className='fab fa-facebook-f text-xl'></i>
              </a>
              <a
                href='https://twitter.com'
                className='text-gray-400 hover:text-blue-500'>
                <i className='fab fa-twitter text-xl'></i>
              </a>
              <a
                href='https://linkedin.com'
                className='text-gray-400 hover:text-blue-500'>
                <i className='fab fa-linkedin-in text-xl'></i>
              </a>
              <a
                href='https://instagram.com'
                className='text-gray-400 hover:text-blue-500'>
                <i className='fab fa-instagram text-xl'></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className='text-center text-gray-400 mt-8'>
          <p>&copy; 2025 TIIGSI PAGES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

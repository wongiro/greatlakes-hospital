import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-sm text-gray-300">
            Great Lakes International Hospital is committed to providing world-class healthcare services with compassion, advanced technology, and highly skilled medical professionals. We strive to exceed patient expectations through quality care.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li>
              <Link href="#about" className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded">
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Information */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-center">
              <Phone className="mr-2" aria-hidden="true" />
              <span aria-label="Phone number">+256 (0)705627072, +256 (0)778399055</span>
            </li>
            <li className="flex items-center">
              <Mail className="mr-2" aria-hidden="true" />
              <span aria-label="Email">greatlakesinternationalhospita@gmail.com</span>
            </li>
            <li aria-label="Mailing address">
              P.O. Box 909, Fort Portal, Uganda
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-10 flex justify-center space-x-6">
        <a
          href="#"
          className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded"
          aria-label="Facebook"
        >
          <FiFacebook className="w-6 h-6" />
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded"
          aria-label="Twitter"
        >
          <FaXTwitter className="w-6 h-6" />
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded"
          aria-label="Instagram"
        >
          <FiInstagram className="w-6 h-6" />
        </a>
      </div>

      {/* Copyright and Legal Info */}
      <div className="mt-6 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Great Lakes International Hospital. All rights reserved.</p>
        <p>
          <Link href="#about" className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded">
            Privacy Policy
          </Link> 
          {" | "} 
          <Link href="#about" aria-disabled='true' className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

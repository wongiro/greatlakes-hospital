"use client"; // Ensures the component is treated as a Client Component

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error('Please fill in all fields.');
      return;
    }

    // Display a success toast notification
    toast.success('Contact us directly!');

    // Clear form fields
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gray-100 py-12">
      <main className="flex-grow container mx-auto p-4">
        <ToastContainer /> {/* Add ToastContainer for notifications */}

        {/* Contact Us Section */}
        <section id="contact" className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-extrabold text-blue-600 mb-6">Contact Us</h2>

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Address and Contact Information */}
            <div>
              <h3 className="text-xl font-bold text-gray-700 mb-4">Get in Touch</h3>
              <p className="text-lg text-gray-600 mb-4 flex items-center">
                <MapPin size={25} className="mr-2 text-blue-600" />
                Great Lakes International Hospital, P.O. Box 909, Fort Portal
              </p>
              <p className="text-lg text-gray-600 mb-4 flex items-center">
                <Phone size={25}  className="mr-2 text-blue-600" />
                <a href="tel:+256705627072" className="underline hover:text-blue-600">Mob: +256 (0)705 627 072</a>, <a href="tel:+256778399055" className="underline hover:text-blue-600">+256 (0)778 399 055</a>
              </p>
              <p className="text-lg text-gray-600 mb-4 flex items-center">
                <Mail size={25}  className="mr-2 text-blue-600" />
                <a href="mailto:greatlakesinternationalhospita@gmail.com" target='_blank' className="underline hover:text-blue-600">greatlakesinternationalhospita@gmail.com</a>
              </p>
              <p className="text-lg text-gray-600 mb-4 flex items-center">
                <FaWhatsapp size={25} className="mr-2 text-blue-600" />
                <a 
                  href="https://wa.me/256778399055" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="underline hover:text-blue-600"
                >
                  WhatsApp: +256 (0)778 399 055
                </a>
              </p>

              <p className="text-lg text-gray-600 mb-4 flex items-center">
                <Clock size={25}  className="mr-2 text-blue-600" />
                Open: 24/7 for both Out Patient and In-Patient Services
              </p>

          {/* Social Media Links */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-700 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800" aria-label="Facebook">
                <FiFacebook size={32} />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800" aria-label="Twitter">
                <FaXTwitter size={32} />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800" aria-label="Instagram">
                <FiInstagram size={32} />
              </a>
            </div>
          </div>
            </div>

            {/* Map Section (Placeholder) */}
            <div className="w-full h-64 bg-gray-200 rounded-lg shadow-md overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.469412360084!2d30.2752912!3d0.6562141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x176a69e2383b935f%3A0x3c78eaf0765a7e9b!2sFort%20Portal!5e0!3m2!1sen!2sug!4v1631575910071!5m2!1sen!2sug"
                allowFullScreen={true}
                loading="lazy"
                title="Google Map of Great Lakes International Hospital"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-700 mb-4">Send Us a Message</h3>
            <form className="grid grid-cols-1 gap-6 md:grid-cols-2" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-3 rounded-md border text-gray-900  border-gray-300 focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your name"
                  required
                  aria-label="Your Name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-700 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 rounded-md border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your email"
                  required
                  aria-label="Your Email"
                />
              </div>
              <div className="flex flex-col col-span-1 md:col-span-2">
                <label htmlFor="message" className="text-gray-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="p-3 rounded-md border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your message"
                  required
                  aria-label="Your Message"
                ></textarea>
              </div>
              <div className="col-span-1 md:col-span-2">
                <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </section>
      </main>
    </div>
  );
};

export default Contact;

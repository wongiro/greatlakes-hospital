"use client"; // Ensures the component is treated as a Client Component

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import AppointmentModal from './AppointmentModal';
import { motion } from 'framer-motion'; // Importing Framer Motion for animations
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false); // State for modal

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <header className='bg-white max-w-full px-6 py-12 relative'>
      <main className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
        {/* Left Side Content */}
        <div className="flex-1 lg:mt-[60px] md:mt-[40px] text-center lg:text-left" data-aos="fade-right">
          <h1 className="text-blue-900 text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            Welcome to Great Lakes International Hospital
          </h1>
          <p className="text-gray-700 text-lg md:text-xl font-normal mb-8">
            Providing world-class medical services with state-of-the-art facilities and compassionate care. Experience healthcare like never before.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={toggleModal} 
              className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold transition-all transform hover:scale-105 hover:bg-blue-100"
            >
              Book Appointment
            </button>
            <button 
              className="text-blue-600 border border-blue-600 rounded-lg w-[200px] h-[50px] font-bold transition-all transform hover:bg-blue-600 hover:text-white hover:scale-105"
            >
              <Link href="#contact">Contact Us</Link>
            </button>
          </div>
        </div>

        {/* Right Side Image with Animation */}
        <motion.div 
          className="md:block lg:block tablet:block"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image 
            src='/images/hospitalFront.jpg' 
            alt='Great Lakes International Hospital' 
            width={750} 
            height={550} 
            quality={100} 
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </main>

      
        <AppointmentModal isOpen={isModalOpen} onClose={toggleModal} />
    </header>
  );
}

export default Header;

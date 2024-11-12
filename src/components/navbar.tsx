"use client";
import React, { useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import AppointmentModal from './AppointmentModal';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="#header">
            <Image
              src="/images/glh_transparent.png"
              width={150}
              height={50}
              className="logo"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center text-blue-600">
          <Link href="#about" className="hover:underline transition duration-300">About</Link>
          <Link href="#services" className="hover:underline transition duration-300">Services</Link>
          <Link href="#team" className="hover:underline transition duration-300">Team</Link>
          <Link href="#contact" className="hover:underline transition duration-300">Contact</Link>

          {/* Book Appointment Button */}
          <button
            onClick={toggleModal}
            className="text-white bg-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Appointment</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-blue-600 focus:outline-none menu-button"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-blue-600 py-4 px-6 nav-items">
          <ul className="space-y-4">
            <li><Link href="#about" className="block text-white hover:underline">About Us</Link></li>
            <li><Link href="#services" className="block text-white hover:underline">Services</Link></li>
            <li><Link href="#team" className="block text-white hover:underline">Team</Link></li>
            <li><Link href="#contact" className="block text-white hover:underline">Contact</Link></li>
            <li>
              <button
                onClick={toggleModal}
                className="w-full bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </button>
            </li>
          </ul>
        </nav>
      )}

      {/* Appointment Modal */}
      {isModalOpen && (
        <AppointmentModal isOpen={isModalOpen} onClose={toggleModal} />
      )}
    </header>
  );
};

export default NavBar;

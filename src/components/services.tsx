"use client"; 
import React from 'react';
import Image from 'next/image';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow container mx-auto mt-8 p-4">
        <section id="services" className="mb-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-extrabold text-blue-600 mb-6">Our Services</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-8">
            <li>Dental Services</li>
            <li>Orthopedic Services</li>
            <li>Gynecology and Obstetrics</li>
            <li>Pediatrics</li>
            <li>X-ray Services</li>
            <li>Ultrasound Services</li>
            <li>Theatre Services</li>
            <li>Maternity/Child Healthcare Services</li>
            <li>Immunisation Services</li>
            <li>Eurological Services</li>
            <li>ENT(Ear, Nose and Throat) Services</li>
            <li>Advanced Laboratory Services</li>
            <li>Ophthalmological Services</li>
          </ul>

          {/* Image Collage for Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { src: '/images/doctor1.jpg', alt: 'Dental Services', title: 'Dental Services' },
              { src: '/images/doctor2.jpg', alt: 'Orthopedic Services', title: 'Orthopedic Services' },
              { src: '/images/doctor4.jpg', alt: 'Gynecology and Obstetrics', title: 'Gynecology and Obstetrics' },
              { src: '/images/doctor3.jpg', alt: 'Pediatrics', title: 'Pediatrics' },
              { src: '/images/doctor5.jpg', alt: 'X-ray Services', title: 'X-ray Services' },
              { src: '/images/doctor6.jpg', alt: 'Ultrasound Services', title: 'Ultrasound Services' },
              { src: '/images/patient1.jpg', alt: 'Theatre Services', title: 'Theatre Services' },
              { src: '/images/doctor1.jpg', alt: 'Modern Laboratory Services', title: 'Advanced Laboratory Services' },
              { src: '/images/doctor1.jpg', alt: 'Ophthalmological Services', title: 'Ophthalmological Services' },
            ].map((service, index) => (
              <div key={index} className="relative group">
                <Image
                  src={service.src}
                  width={400}
                  height={100}
                  quality={100}
                  alt={service.alt}
                  className="w-full h-48 object-cover rounded-lg shadow-md transition-transform transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center transition-opacity opacity-0 group-hover:opacity-100">
                  {service.title}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;

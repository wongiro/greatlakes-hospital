"use client"; 
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';

const About = () => {
  const [isVisionOpen, setIsVisionOpen] = useState(false);
  const [isMissionOpen, setIsMissionOpen] = useState(false);
  const [isCoreValuesOpen, setIsCoreValuesOpen] = useState(true); // Core values open by default

  const toggleSection = (section: string) => {
    if (section === "vision") {
      setIsVisionOpen(!isVisionOpen);
    } else if (section === "mission") {
      setIsMissionOpen(!isMissionOpen);
    } else if (section === "coreValues") {
      setIsCoreValuesOpen(!isCoreValuesOpen);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 py-12">
      <main className="flex-grow container mx-auto px-4">
        {/* About Us Section */}
        <section id="about" className="mb-12 bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl font-extrabold text-blue-600 mb-6">About Us</h2>
            <p className="text-lg text-gray-700 mb-4">
              Fins Medical University (FMU), in a bid to provide quality Health Sciences Education, established the Great Lakes International Hospital to offer much-needed quality medical care.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Opened in June 2021, the hospital serves as both a key service provider in the region and a critical element in developing the University’s department of Medicine by offering rarely available diagnosis and treatment services.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our hospital is a 50 in-patient capacity facility, with all patients staying in private rooms. We have medical experts available 24/7 for outpatient and inpatient services.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image src="/images/doctor6.jpg" width={400} height={100} quality={100} alt="Great Lakes International Hospital" className="rounded-lg shadow-lg w-full transition-transform transform hover:scale-105" />
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="mb-12 bg-white p-8 rounded-lg shadow-md">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection("vision")}>
            <h3 className="text-2xl font-bold text-blue-600">Vision</h3>
            {isVisionOpen ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-blue-600" />}
          </div>
          {isVisionOpen && (
            <div className="mt-4 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <p className="text-lg text-gray-700 mt-4 md:mt-0">
                  To be a world-class Hospital by exceeding patient expectations.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Mission Section */}
        <section id="mission" className="mb-12 bg-white p-8 rounded-lg shadow-md">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection("mission")}>
            <h3 className="text-2xl font-bold text-blue-600">Mission</h3>
            {isMissionOpen ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-blue-600" />}
          </div>
          {isMissionOpen && (
            <div className="mt-4 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <p className="text-lg text-gray-700 mt-4 md:mt-0">
                  To provide world-class medical services.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Core Values Section */}
        <section id="core-values" className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection("coreValues")}>
            <h3 className="text-2xl font-bold text-blue-600">Core Values</h3>
            {isCoreValuesOpen ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-blue-600" />}
          </div>
          {isCoreValuesOpen && (
            <ul className="list-disc pl-5 space-y-4 text-lg text-gray-700 mt-4">
              <li>
                <strong>Excellence:</strong> We determine what is valuable and hold ourselves to high performance standards that fulfill our promises.
              </li>
              <li>
                <strong>Humanity:</strong> We serve our clients with kindness and patience, just as we would wish to be treated.
              </li>
              <li>
                <strong>Collegiality:</strong> We build strong, supportive relationships within our team to serve the community better.
              </li>
              <li>
                <strong>Integrity:</strong> We maintain the highest ethical standards and accept accountability for all we do.
              </li>
              <li>
                <strong>Hard work:</strong> We work hard to achieve our mission and goals, avoiding time wasting.
              </li>
            </ul>
          )}
        </section>
      </main>
    </div>
  );
};

export default About;

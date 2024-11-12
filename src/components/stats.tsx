import React from 'react';
import { User, HeartPulse, Microscope, Stethoscope } from 'lucide-react';
import CountUp from 'react-countup';

const Stats = () => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Our Commitment to Quality Care</h2>
        <p className="text-center text-gray-700 mb-16 max-w-2xl mx-auto">
          GreatLakes Hospital, established in June 2021, is dedicated to providing exceptional healthcare services and fostering a learning environment for future health professionals. We aim to deliver quality medical care while supporting the education of health workers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Patients Treated */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <HeartPulse className="text-blue-600 w-16 h-16 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-blue-600">
              <CountUp start={0} end={5000} duration={6} separator="," />
            </h3>
            <p className="text-gray-700 mt-4">Patients Treated</p>
            <p className="text-gray-500 mt-2">
              Since our inception, we have treated over 5,000 patients, ensuring that each individual receives the highest standard of care tailored to their needs.
            </p>
          </div>

          {/* Healthcare Professionals Trained */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <User className="text-blue-600 w-16 h-16 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-blue-600">
              <CountUp start={0} end={50} duration={6} separator="," />
            </h3>
            <p className="text-gray-700 mt-4">Healthcare Professionals Trained</p>
            <p className="text-gray-500 mt-2">
              Our hospital has trained over 50 healthcare professionals, equipping them with the skills necessary to excel in their fields and contribute to the community’s health.
            </p>
          </div>

          {/* Specialties Offered */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Stethoscope className="text-blue-600 w-16 h-16 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-blue-600">
              <CountUp start={0} end={30} duration={6} separator="," />
            </h3>
            <p className="text-gray-700 mt-4">Specialties Offered</p>
            <p className="text-gray-500 mt-2">
              We proudly offer 30 medical specialties, ensuring comprehensive care that meets the diverse needs of our patients.
            </p>
          </div>

          {/* Research Projects */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Microscope className="text-blue-600 w-16 h-16 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-blue-600">
              <CountUp start={0} end={25} duration={6} separator="," />
            </h3>
            <p className="text-gray-700 mt-4">Research Projects</p>
            <p className="text-gray-500 mt-2">
              Our commitment to innovation is reflected in our 25 ongoing research projects aimed at advancing medical knowledge and improving patient outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

"use client"; // Ensures the component is treated as a Client Component

import React, { useState } from 'react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  title: string;
  description: string;
  image: string;
  detailedInfo: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Prof. Fernando Perez',
    title: 'Gynecological and Obstetrics Specialist and GIH Medical Director',
    description: 'Expert in Internal Medicine with over 20 years of experience.',
    image: '/images/team/fernando.png',
    detailedInfo: 'Dr. Perez has a track record of excellence in patient care and leadership in the healthcare sector.',
  },
  {
    name: 'Dr. Silver',
    title: 'Pediatric Specialist',
    description: 'Specializes in the health of infants, children, adolescents and young adults.',
    image: '/images/team/silva.jpg',
    detailedInfo: 'Dr. Silver is dedicated to improving child health outcomes across the community.',
  },
  {
    name: 'Dr. Muhindo Peter',
    title: 'Senior Medical Officer',
    description: 'Coordinate a team of staff members who work on various aspects of patient care, including doctors, nurses.',
    image: '/images/team/muhindo.jpeg',
    detailedInfo: 'Dr. Peter coordinates a team of staff members who work on various aspects of patient care, including doctors, nurses.',
  },
  {
    name: 'Bakesiga Cossy',
    title: 'Nurse',
    description: 'Provides and coordinate patient care, educate patients and the public about various health conditions.',
    image: '/images/team/cossy.jpeg',
    detailedInfo: 'Cossy has been instrumental in building a compassionate, patient-centered nursing team.',
  },
  {
    name: 'Dr. Aije Brian',
    title: 'Medical Officer',
    description: 'Diagnoses and treats different illnesses, injuries and disabilities.',
    image: '/images/team/brian.jpeg',
    detailedInfo: 'Dr. Brian diagnoses and treats different illnesses.',
  },
  {
    name: 'Twine Samuel',
    title: 'Nurse',
    description: 'Provides and coordinate patient care, educate patients and the public about various health conditions.',
    image: '/images/team/sam.jpg',
    detailedInfo: 'Samuel has been instrumental in building a compassionate, patient-centered nursing team.',
  },
  {
    name: 'Alinaitwe Maureen',
    title: 'Midwife',
    description: 'Works closely with pregnant women, providing support, advice and guidance on options and services available.',
    image: '/images/team/maureen.jpeg',
    detailedInfo: 'Maureen works closely with pregnant women, providing support, advice and guidance on options and services available.',
  },
  {
    name: 'Knight Josephine',
    title: 'Nurse',
    description: 'Provides and coordinate patient care, educate patients and the public about various health conditions.',
    image: '/images/team/josephine.jpeg',
    detailedInfo: 'Josephine has been instrumental in building a compassionate, patient-centered nursing team.',
  },
  {
    name: 'Kugonza Everest',
    title: 'Pharmacist',
    description: 'Dispense prescription medications and provide information to patients about the drugs and their use.',
    image: '/images/team/everest.jpeg',
    detailedInfo: 'Everest provides information to patients about the drugs and their use.',
  },
];

const ITEMS_PER_PAGE = 3; 

const MeetOurTeam = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);


  const totalPages = Math.ceil(teamMembers.length / ITEMS_PER_PAGE);

  // Get the team members for the current page
  const paginatedTeamMembers = teamMembers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-gray-100 py-12">
      <main className="flex-grow container mx-auto p-4">
        {/* Meet Our Team Section */}
        <section id="team" className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Meet Our Team</h2>
          <p className="text-center text-gray-700 mb-16 max-w-2xl mx-auto">
            Our team of dedicated professionals is committed to providing the highest quality of healthcare. Meet our expert team who are here to serve you.
          </p>

          {/* Team Member Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedTeamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => handleCardClick(member)}
              >
                <div className="h-56 overflow-hidden">
                  <Image
                    width={750} 
                    height={750} 
                    quality={100} 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-fit flex-center"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.title}</p>
                  <p className="text-gray-700">{member.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-8">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 mx-2 rounded-full font-semibold transition-colors ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            >
              Previous
            </button>
            <span className="px-4 py-2 mx-2 font-semibold text-gray-700">{currentPage} of {totalPages}</span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 mx-2 rounded-full font-semibold transition-colors ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            >
              Next
            </button>
          </div>
        </section>
      </main>

      {/* Modal for detailed team member info */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-red-500 hover:text-red-600 focus:outline-none"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 mb-4 rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${selectedMember.image})` }}></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedMember.name}</h3>
              <p className="text-gray-600 mb-2">{selectedMember.title}</p>
              <p className="text-gray-700">{selectedMember.detailedInfo}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MeetOurTeam;

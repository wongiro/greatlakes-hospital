"use client";
import React from 'react';
import Image from 'next/image';

const insurancePartners = [
  { name: "AAR", logo: "https://aar-healthcare.com/ug/wp-content/uploads/2017/02/aarlogonew.png" },
  { name: "Jubilee insurance", logo: "/images/jubilee-logo.png" },
  { name: "Sanlam", logo: "https://www.sanlam.com/images/sanlam-logo.png" },
  { name: "Prudential", logo: "/images/prudential.png" },
  { name: "APA", logo: "	https://dwa0cwf9sc24.cloudfront.net/avatar/apa-logo.png" },
  { name: "CIGNA", logo: "https://image2.comms.cigna.com/EloquaImages/clients/CignaGHBIntl/%7B7177abb9-7e77-4ddd-bbbb-6f8fee021d59%7D_cigna-healthcare-logo.png" },
  { name: "YOPSA", logo: "https://yopsa.co.ug/wp-content/uploads/2023/08/image001.png" },
];

const InsurancePartners = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-8">
          Our Insurance Partners
        </h2>

        <p className="text-center text-gray-600 mb-12">
          We collaborate with leading insurance providers to ensure you receive the best care at affordable rates.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {insurancePartners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow"
            >
              <Image
                width={750} 
                height={550} 
                quality={100} 
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-16 w-auto mb-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsurancePartners;

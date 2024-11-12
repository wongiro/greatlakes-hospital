import React from 'react';
import { User } from 'lucide-react';

const testimonials = [
  {
    name: 'John Smith',
    role: 'Patient',
    message: 'The care I received at GreatLakes Hospital was exceptional. The staff was attentive and made my recovery smooth.',
  },
  {
    name: 'Emily Johnson',
    role: 'Medical Student',
    message: 'Studying at GreatLakes Hospital has been a life-changing experience. The hands-on training is invaluable.',
  },
  {
    name: 'Michael Brown',
    role: 'Patient',
    message: 'I was impressed by the professionalism and compassion of the medical team. Highly recommend!',
  },
  {
    name: 'Sarah Davis',
    role: 'Nursing Student',
    message: 'GreatLakes Hospital provides an excellent environment for learning. The faculty is supportive and knowledgeable.',
  },
  {
    name: 'David Wilson',
    role: 'Patient',
    message: 'The facilities are top-notch, and the staff truly cares about their patients. I felt safe and well taken care of.',
  },
  {
    name: 'Jessica Taylor',
    role: 'Medical Intern',
    message: 'My internship at GreatLakes Hospital has been incredibly rewarding. I’ve gained so much practical experience.',
  },
];

const PatientExperiences = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Patient Experiences</h2>
        <p className="text-center text-gray-700 mb-16 max-w-2xl mx-auto">
          Hear from our patients and students about their transformative journeys at GreatLakes Hospital.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <User className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-700 italic mb-4">&quot;{testimonial.message}&quot;</p>
              <h3 className="text-lg font-bold text-blue-600">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientExperiences;

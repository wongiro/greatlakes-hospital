import React, { useEffect } from 'react';
import { Phone, Mail } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  // Close modal on "Escape" key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-auto"
      role="dialog"
      aria-labelledby="appointment-modal-title"
      aria-modal="true"
      aria-live="assertive"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full mx-4">
        <h2 id="appointment-modal-title" className="text-2xl font-bold mb-4 text-blue-600">
          Book an Appointment
        </h2>

        <p className="text-lg mb-6 text-gray-700">
          To book an appointment, please contact us via phone or email. We are happy to assist you.
        </p>

        <div className="flex justify-center space-x-4">
          <a href="tel:+256705627072" className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            <Phone className="w-5 h-5 mr-2" />
            Call Us
          </a>
          <a
            href="mailto:greatlakesinternationalhospita@gmail.com"
            target='_blank'
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            <Mail className="w-5 h-5 mr-2" />
            Email Us
          </a>
        </div>

        <div className="flex justify-center mt-6">
          <button onClick={onClose} className="text-red-500 hover:underline">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;

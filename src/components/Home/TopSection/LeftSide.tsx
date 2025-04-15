import ClientRequisitionForm from "@/components/Clients/Requisition";
import Modal from "@/components/shared/Modal";
import { neon_font, space_grotest, archivo } from "@/fonts";
import { useState } from "react";
import Typical from "react-typical";

const LeftSide = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="text-white h-full overflow-hidden">
      <div className="flex flex-col md:gap-y-4 gap-y-4 h-full justify-center">
        <h1
          className={`md:text-4xl text-2xl text-[#65BD46] font-bold mb-6 leading-tight ${archivo.className}`}
        >
          Hire Trained, Trustworthy Support Staff for Your Business — Fast.
        </h1>
        <p
          className={`md:text-2xl text-lg text-gray-800 mb-4 leading-relaxed ${space_grotest.className}`}
        >
          Whether you run a hotel, hospital, office, or residential complex —
          we&apos;ll provide you with skilled workers like waiters, ward boys,
          cleaners, security guards, and more.
        </p>

        <p className="md:text-2xl text-lg text-gray-800 leading-relaxed">
          So you can focus on your business, while we take care of the manpower.
        </p>

        <button
          className={`bg-primary uppercase md:w-fit md:text-[1.2rem] md:py-4 py-2 px-8 rounded-md md:rounded-[50px] text-white ${space_grotest.className} hidden md:block`}
          onClick={openModal}
        >
          Request Staff Now
        </button>
      </div>

      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <ClientRequisitionForm />
      </Modal>
    </div>
  );
};

export default LeftSide;

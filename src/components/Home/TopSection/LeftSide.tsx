import ClientRequisitionForm from "@/components/Clients/Requisition";
import Modal from "@/components/shared/Modal";
import { neon_font, space_grotest } from "@/fonts";
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
      {/* <div
        className={`flex gap-x-5 text-5xl font-bold uppercase text-neon-orange mb-20 ${neon_font.className}`}
      >
        FIND YOUR{" "}
        <p className={`text-neon-blue ${neon_font.className}`}>
          <Typical
            steps={["JOB!", 1000, "MANPOWER!", 1000]}
            loop={Infinity}
            wrapper="b"
          />
        </p>
      </div> */}

      <div className="flex flex-col gap-y-10 h-full ">
        <p
          className={`text-[2rem] font-semibold bg-gradient-to-r from-[#2664ebfe] via-[#ae06f6fe] to-[#ff0099] bg-clip-text text-transparent`}
        >
          A Sustainable Business is Humanly Possible When Perfect Employee Works
          in Perfect Company
        </p>

        <p className="text-lg text-black">
          At Manpower Research &amp; Synchronization, we believe meaningful,
          sustainable employment has the power to change the world. Because when
          you combine talented people with innovative companies, you can build a
          brighter future for everyone.
        </p>

        <button
          className={`bg-primary uppercase md:w-fit md:text-[1.2rem] md:py-4 py-2 px-8 rounded-md md:rounded-[50px] text-white ${space_grotest.className}`}
          onClick={openModal}
        >
          Be Our Client
        </button>
      </div>

      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <ClientRequisitionForm />
      </Modal>
    </div>
  );
};

export default LeftSide;

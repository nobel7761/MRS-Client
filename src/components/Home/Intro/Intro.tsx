import Image from "next/image";
import Modal from "../../shared/Modal";
import { useState } from "react";
import IntroForm from "./IntroForm";

const Intro = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-white px-4 py-5 md:px-0 md:py-0">
      <div className="md:w-10/12 mx-auto md:flex md:gap-x-4 md:py-10">
        <div className="md:w-1/2 md:py-5 md:px-10 flex flex-col md:gap-y-10 gap-y-4">
          <h1 className="font-extrabold md:text-[3rem] text-[1.5rem]">
            Looking Employees For Your Business? Here We GoOo...
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
            labore perspiciatis beatae! Aliquid officia ut nostrum suscipit sint
            quos deserunt. Dolor id natus magni quae ut, repellat non sed vel
            soluta ea, sunt est? Fugit incidunt reiciendis quidem iusto quisquam
            a expedita labore nemo voluptate debitis. Id quo corrupti
            aspernatur, earum quos culpa aliquid in alias minus consequatur!
            Corrupti placeat quibusdam sapiente consectetur accusamus deleniti
            provident omnis nostrum! Reprehenderit id quis sed fugit minima
            voluptate? Ipsum voluptas earum ipsa debitis?
          </p>
          <button
            className="bg-primary md:w-[30%] md:text-[1.2rem] md:py-4 py-2 rounded-md md:rounded-[50px] text-white"
            onClick={openModal}
          >
            Get Started
          </button>
        </div>
        <div className="hidden  w-1/2 md:flex justify-center items-center">
          <Image
            src="/Jobhunt.gif"
            height={500}
            width={800}
            alt="gify"
            className="w-4/6 h-[30rem]"
          />
        </div>
      </div>

      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <IntroForm onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default Intro;

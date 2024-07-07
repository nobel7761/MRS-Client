import CustomContainer from "@/components/shared/Container";
import Title from "@/components/shared/Title";
import { inter } from "@/fonts";
import { useState } from "react";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";

const accordionData = [
  {
    id: 1,
    title: "What Is A Mental Health Consultant?",
    description:
      "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam sed et. A in ullamcorper ipsum justo vestibulum sit cursus. A risus donec eget enim aliquet integer cursus et. Phasellus ac augue ultricies sem aliquam faucibus sem non volutpat.",
  },
  {
    id: 2,
    title: "What Services Do You Offer As A Mental Health Consultant?",
    description:
      "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam sed et. A in ullamcorper ipsum justo vestibulum sit cursus. A risus donec eget enim aliquet integer cursus et. Phasellus ac augue ultricies sem aliquam faucibus sem non volutpat.",
  },
  {
    id: 3,
    title: "How Can I Benefit From Working With A Mental Health Consultant?",
    description:
      "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam sed et. A in ullamcorper ipsum justo vestibulum sit cursus. A risus donec eget enim aliquet integer cursus et. Phasellus ac augue ultricies sem aliquam faucibus sem non volutpat.",
  },
  {
    id: 4,
    title: "What Types Of Issues Can A Mental Health Consultant Help With?",
    description:
      "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam sed et. A in ullamcorper ipsum justo vestibulum sit cursus. A risus donec eget enim aliquet integer cursus et. Phasellus ac augue ultricies sem aliquam faucibus sem non volutpat.",
  },
];

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(Array(accordionData.length).fill(false));

  const toggleAccordion = (index: number) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <div className="pb-10 bg-backgroundColor">
      <CustomContainer>
        <>
          <Title text="Frequently Asked Questions" />
          <div className="">
            <div className="text-center flex flex-col gap-y-4"></div>

            <div className="">
              {accordionData.map((accordion, index) => (
                <div key={accordion.id}>
                  <h2 onClick={() => toggleAccordion(index)} className="">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full py-5 rounded-t-xl "
                    >
                      <span className="md:text-[1.4rem] font-extrabold">
                        {accordion.title}
                      </span>
                      {isOpen[index] ? (
                        <BsCaretUpFill className="md:text-[20px]" />
                      ) : (
                        <BsCaretDownFill className="md:text-[20px]" />
                      )}
                    </button>
                  </h2>
                  <div
                    className={`${
                      isOpen[index] ? "block" : "hidden"
                    } text-justify md:text-left py-4 transition-all duration-300 ease-in-out`}
                  >
                    <div>
                      <p className={`${inter.className} text-[1rem]`}>
                        {accordion.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      </CustomContainer>
    </div>
  );
};

export default FAQ;

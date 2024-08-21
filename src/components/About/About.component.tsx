import { benefits } from "@/assets/information";
import TopCover from "../shared/TopCover.component";
import CustomContainer from "../shared/Container";
import { open_sans } from "@/fonts";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormInput from "../shared/Forms/FormInput";
import FormTextArea from "../shared/Forms/FormTextArea";

const AboutPageComponent = () => {
  const methods = useForm();
  const { handleSubmit, reset } = methods;

  const handleStudentOnSubmit = (data: any) => {
    reset({
      name: "",
      email: "",
      phone_number: "",
      message: "",
    });
  };

  return (
    <div>
      <TopCover imageUrl="/breadcrumb-background.jpg" title="About" />

      <div className={`bg-[#F8F8F8] py-20`}>
        <CustomContainer>
          <div className="flex">
            <div
              className={`text-7xl font-bold w-1/2 text-right ${open_sans.className}`}
            >
              <p className="text-primary">WHO</p>
              <p>WE</p>
              <p>
                ARE<span className="text-primary">?</span>
              </p>
            </div>
            <div className="flex justify-center items-center mx-12">
              <p className="w-[2px] h-[80%] bg-primary"></p>
            </div>
            <div className="w-1/2 py-2 flex flex-col gap-y-8">
              <p className="text-justify">
                Manpower Research and Synchronization began its operation in
                2021. At present, its primary service area is in Dhaka,
                Bangladesh and after completing some mission, it will serve the
                global manpower solution. It is transformed to work by aiming to
                cultivate the strength of people, to unfold the opportunity in
                our society that people naturally can put their efforts for
                happiness and add value to the business. It observes the
                challenges how we are creating in our lives and finds the
                optimum contrivances to minimize it. It has innovative team work
                to construct the believe in the people that life is what we work
                on and it happens what we expect. It has taken an assiduity to
                implement that People is a beauty of the earth.
              </p>
            </div>
          </div>
        </CustomContainer>
      </div>

      <CustomContainer>
        <div className="pb-20 w-5/6 mx-auto">
          <p className={`${open_sans.className} text-center py-16 text-4xl`}>
            BENEFITS OF WORKING WITH <br />
            <span className="text-primary">
              MANPOWER RESEARCH & SYNCHRONIZATION
            </span>
          </p>
          <div className="grid grid-cols-2 gap-14">
            {benefits.map((benefit, index) => (
              <div key={index} className="">
                <div className="h-32 w-32 border-[4px] border-primary flex justify-center items-center rounded-full text-primary text-7xl">
                  {React.createElement(benefit.icon)}
                </div>
                <h3
                  className={`py-5 text-2xl text-primary ${open_sans.className}`}
                >
                  {benefit.title}
                </h3>
                <p className="">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </CustomContainer>

      <div className="bg-[#F8F8F8] py-20">
        <CustomContainer>
          <div className="flex">
            <p className={`${open_sans.className} text-7xl w-1/2 text-right`}>
              WANT US
              <br />
              TO <span className="text-primary">CALL</span>
              <br />
              YOU?
            </p>
            <div className="flex justify-center items-center mx-12">
              <p className="w-[4px] h-[80%] bg-primary"></p>
            </div>
            <div className="w-1/2">
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(handleStudentOnSubmit)}>
                  <FormInput
                    type="text"
                    name="name"
                    size="large"
                    placeholder="Name"
                    validation={{ required: "Name is required" }}
                  />
                  <FormInput
                    type="email"
                    name="email"
                    size="large"
                    placeholder="Email"
                  />
                  <FormInput
                    type="number"
                    name="phone_number"
                    size="large"
                    placeholder="Phone Number"
                    validation={{
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10,15}$/,
                        message: "Please enter a valid phone number",
                      },
                    }}
                  />
                  <FormTextArea
                    name="message"
                    placeholder="Message"
                    validation={{ required: "Message is required" }}
                  />

                  <button
                    type="submit"
                    className="bg-primary text-white w-full py-2 text-xl rounded"
                  >
                    SEND
                  </button>
                </form>
              </FormProvider>
            </div>
          </div>
        </CustomContainer>
      </div>
    </div>
  );
};

export default AboutPageComponent;

import CustomContainer from "@/components/shared/Container";
import Title from "@/components/shared/Title";
import Image from "next/image";

const TrainingAndDevelopment = () => {
  return (
    <div className="bg-[#EFECE4] pb-10">
      <CustomContainer>
        <>
          <Title text="Training & Development" />

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 space-y-8">
              <p className="text-4xl font-bold">
                We train people. We unlock potential.
              </p>
              <p className="text-2xl">
                Before placing any worker, we assess their skills, provide
                targeted training, and ensure they&apos;re ready to deliver.
              </p>
              <p className="text-2xl">
                Whether it&apos;s for hospitality, hospitals, or offices — we
                prepare candidates to meet industry standards with confidence.
              </p>
              <p className="md:text-2xl">
                Our goal is to empower individuals to perform at their best —
                creating real value for your business and our society.
              </p>
            </div>

            <div className="md:w-1/2">
              <Image
                src="/mrs/TrainingAndDevelopment.png"
                alt="top-section-photo"
                height={1200}
                width={1200}
                className="w-full"
              />
            </div>
          </div>
        </>
      </CustomContainer>
    </div>
  );
};

export default TrainingAndDevelopment;

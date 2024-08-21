import CustomContainer from "@/components/shared/Container";
import Title from "@/components/shared/Title";
import Image from "next/image";

const OurValues = () => {
  return (
    <div className="bg-backgroundColor md:py-10">
      <CustomContainer>
        <>
          <div className="flex justify-center items-center">
            <Image
              src="/mrs/our-values.png"
              alt="top-section-photo"
              height={1200}
              width={1200}
              className="w-2/3"
            />
            <Title text="Our Values" className="w-1/3" />
          </div>

          <p className="text-xl mt-10">
            We believe that each and every human is blessed with great power in
            the earth. But all of them always cannot put their real strengths on
            work efficiently and effectively. So they fail to reach to the
            success. We search such unprivileged people and find their bindings
            and impediment for what they could not introduce their real strength
            on work
          </p>
        </>
      </CustomContainer>
    </div>
  );
};

export default OurValues;

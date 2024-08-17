import Image from "next/image";

const RightSide = () => {
  return (
    <div className="relative w-full overflow-hidden flex gap-x-2">
      {/* <Image
        src="/topSection/bn-img2.jpg"
        alt="top-section-photo"
        height={1200}
        width={1200}
        className="rounded-full w-full mt-12"
      />
      <Image
        src="/topSection/bn-img1.jpg"
        alt="top-section-photo"
        height={1200}
        width={1200}
        className="rounded-full w-full h-1/2"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] rounded-full bg-[#245DFF] flex justify-center items-center">
        <p className="text-7xl text-white">MRS</p>
      </div> */}

      <Image
        src="/mrs/top-right.png"
        alt="top-section-photo"
        height={1200}
        width={1200}
        className="rounded-md w-full "
      />
    </div>
  );
};

export default RightSide;

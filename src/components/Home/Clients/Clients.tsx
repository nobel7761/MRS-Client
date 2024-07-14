import Image from "next/image";
import Marquee from "react-fast-marquee";

const Clients = () => {
  return (
    <div className={`mx-auto overflow-hidden`}>
      <div className="overflow-hidden">
        <div className="w-[80%] mx-auto flex md:flex-row flex-col gap-y-8 justify-between">
          <Marquee autoFill={true} gradient={true} pauseOnHover={true}>
            <Image
              src="/clients/griddle.jpeg"
              height={100}
              width={100}
              alt="gify"
              className="w-fit h-fit"
            />
            <Image
              src="/clients/Rustic-Eatery.png"
              height={100}
              width={100}
              alt="gify"
              className="w-fit h-fit"
            />
            <Image
              src="/clients/the-cafe-rio.jpeg"
              height={100}
              width={100}
              alt="gify"
              className="w-fit h-fit"
            />
            <Image
              src="/clients/purple-cafe.jpeg"
              height={100}
              width={100}
              alt="gify"
              className="w-fit h-fit"
            />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Clients;

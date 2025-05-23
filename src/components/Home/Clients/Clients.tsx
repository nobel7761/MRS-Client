import { clients } from "@/assets/information";
import CustomContainer from "@/components/shared/Container";
import Title from "@/components/shared/Title";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

const Clients = () => {
  return (
    // <div className={`mx-auto overflow-hidden`}>
    //   <div className="overflow-hidden">
    //     <div className="w-[80%] mx-auto flex md:flex-row flex-col gap-y-8 justify-between">
    //       <Marquee autoFill={true} gradient={true} pauseOnHover={true}>
    //         <Image
    //           src="/clients/griddle.jpeg"
    //           height={100}
    //           width={100}
    //           alt="gify"
    //           className="w-fit h-fit"
    //         />
    //         <Image
    //           src="/clients/Rustic-Eatery.png"
    //           height={100}
    //           width={100}
    //           alt="gify"
    //           className="w-fit h-fit"
    //         />
    //         <Image
    //           src="/clients/the-cafe-rio.jpeg"
    //           height={100}
    //           width={100}
    //           alt="gify"
    //           className="w-fit h-fit"
    //         />
    //         <Image
    //           src="/clients/purple-cafe.jpeg"
    //           height={100}
    //           width={100}
    //           alt="gify"
    //           className="w-fit h-fit"
    //         />
    //       </Marquee>
    //     </div>
    //   </div>
    // </div>

    <CustomContainer>
      <div className="pb-10">
        <Title text="Our Clients" />
        <p className="text-center text-gray-500">
          We proudly serve some of the top hotels, hospitals, cafes, and
          corporate offices in Bangladesh. These organizations trust us to
          supply skilled, dependable support staff — and we deliver.
        </p>

        <div className="flex gap-x-10 mt-10">
          <Swiper
            slidesPerView={5.5}
            spaceBetween={30}
            modules={[Autoplay]}
            className=""
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {clients.map((client, index) => (
              <div key={index}>
                <SwiperSlide>
                  <Image
                    src={client.logo}
                    alt={String(client.id)}
                    width={1200}
                    height={1200}
                    className="h-full"
                  />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </CustomContainer>
  );
};

export default Clients;

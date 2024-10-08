import Image from "next/image";
import TopCover from "../shared/TopCover.component";
import CustomContainer from "../shared/Container";
import { useState } from "react";
import styles from "./Team.module.css";
import { teamMembers } from "@/assets/information";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay } from "swiper/modules";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface IMember {
  name: string;
  role: string;
  source: string;
  description: string;
}

interface ITeamMemberCard {
  member: IMember;
  index: number;
  hoverIndex: number | null;
  setHoverIndex: (index: number | null) => void;
}

const TeamMemberCard = ({
  member,
  index,
  hoverIndex,
  setHoverIndex,
}: ITeamMemberCard) => {
  return (
    <div
      className={`w-fit rounded-lg shadow-lg bg-gradient-to-b from-[#060530] via-[#3244c3] to-[#081337] overflow-hidden relative cursor-pointer`}
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(null)}
    >
      <div className="relative">
        <Image
          height={1200}
          width={1200}
          src={member.source}
          alt={`Photo of ${member.name}`}
          className={`md:h-[60vh] h-[55vh] 
            ${
              (member.name.includes("Hira") ||
                member.name.includes("Laboni")) &&
              "scale-x-125"
            }
            ${member.name.includes("Rokaiah") && "scale-110"}
            `}
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        <div className="absolute bottom-0 w-full pb-4">
          <h3 className="text-xl font-extrabold">{member.name}</h3>
          <p className="text-base font-medium text-blue-400">{member.role}</p>
        </div>
      </div>

      <div
        className={`absolute inset-0  bg-gradient-to-b from-[#262492] via-transparent to-[#262492] text-white flex flex-col justify-between p-4 cursor-pointer transition-opacity duration-300 ${
          hoverIndex === index ? styles.slideIn : styles.slideOut
        }`}
        style={{
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(17, 10, 30, 0.5)",
        }}
      >
        <div>
          <p className="flex justify-start text-xl font-extrabold">
            {member.name}
          </p>
          <p className="flex justify-start text-[0.6rem]">{member.role}</p>
        </div>
        <p className="flex justify-start text-xs text-justify">
          {member.description}
        </p>
      </div>
    </div>
  );
};

const TeamPageComponent = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <TopCover imageUrl="/breadcrumb-background.jpg" title="Team" />

      <section className="bg-[#060628] text-white md:py-16 py-8">
        <div className="md:container mx-auto text-center">
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="md:text-4xl text-2xl font-bold mb-8"
          >
            Partnered with most of the <br />
            <span className="text-blue-400">top people at each industry</span>
          </motion.h2>

          <CustomContainer maxWidth="w-[70%]">
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex justify-between gap-x-4 overflow-hidden"
            >
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: true,
                }}
                modules={[Autoplay]}
                allowTouchMove
                breakpoints={{
                  // when window width is >= 320px (mobile)
                  320: {
                    slidesPerView: 1,
                  },
                  // when window width is >= 768px (tablet and above)
                  768: {
                    slidesPerView: 3,
                  },
                }}
              >
                {teamMembers.map((member, index) => (
                  <SwiperSlide key={index}>
                    <TeamMemberCard
                      member={member}
                      index={index}
                      hoverIndex={hoverIndex}
                      setHoverIndex={setHoverIndex}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </CustomContainer>
        </div>
      </section>
    </div>
  );
};

export default TeamPageComponent;

import { space_grotest } from "@/fonts";
import Link from "next/link";
import { ReactElement } from "react";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TopCover = ({
  height,
  imageUrl,
  title,
  children,
}: {
  height?: string;
  imageUrl: string;
  title?: string;
  children?: ReactElement;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  //! showing bototm to top
  // const headingVariants = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 1,
  //       ease: "easeOut",
  //     },
  //   },
  // };

  //! fade in
  // const headingVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       duration: 1,
  //       ease: "easeOut",
  //     },
  //   },
  // };

  //! sliding text from left to right
  // const headingVariants = {
  //   hidden: { opacity: 0, x: -100 },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       duration: 1,
  //       ease: "easeOut",
  //     },
  //   },
  // };
  //! sliding left to right
  // const maskVariants = {
  //   hidden: { width: 0 },
  //   visible: {
  //     width: "100%",
  //     transition: {
  //       duration: 1,
  //       ease: "easeOut",
  //     },
  //   },
  // };

  // const headingVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       duration: 1,
  //       ease: "easeOut",
  //     },
  //   },
  // };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <div
      className={`bg-cover bg-center -mt-[12.5rem] pt-60 ${height}`}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${imageUrl})`,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(17, 10, 30, 0.7)",
      }}
    >
      {title ? (
        <div className="text-white py-10" ref={ref}>
          <motion.p
            variants={headingVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={`text-center text-8xl font-bold pb-10 ${space_grotest.className}`}
          >
            {title}
          </motion.p>

          <div
            className={`w-fit mx-auto border border-white rounded-xl flex gap-x-4 justify-between items-center py-1 px-3 text-lg font-bold ${space_grotest.className}`}
          >
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <RiArrowRightDoubleLine />
            <p>{title}</p>
          </div>
        </div>
      ) : (
        <div className="py-10">{children}</div>
      )}
    </div>
  );
};

export default TopCover;

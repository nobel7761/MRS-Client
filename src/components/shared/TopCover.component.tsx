import { space_grotest } from "@/fonts";
import Link from "next/link";
import { ReactElement } from "react";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const TopCover = ({
  height = "h-[45rem]",
  imageUrl,
  title,
  children,
}: {
  height?: string;
  imageUrl: string;
  title?: string;
  children?: ReactElement;
}) => {
  return (
    <div
      className={`bg-cover bg-center -mt-60 py-72 ${height}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(17, 10, 30, 0.7)",
      }}
    >
      {title ? (
        <div className="text-white py-10">
          <p
            className={`text-center text-8xl font-bold pb-10 ${space_grotest.className}`}
          >
            {title}
          </p>
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
        children
      )}
    </div>
  );
};

export default TopCover;

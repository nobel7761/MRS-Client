import { oswald } from "@/fonts";
import Image from "next/image";
import React from "react";

const BrandLogo = ({ className }: { className: string }) => {
  return (
    <div className="flex items-center">
      <Image
        src="/mrs/brand-logo.png"
        alt="mrs-logo"
        height={2400}
        width={2400}
        className="md:w-[15%] w-[20%] transform md:hover:scale-125 transition-transform duration-300"
      />
      <p className={`md:text-[26px] text-[16px] ${oswald.className}`}>
        Manpower Research & Synchronization
      </p>
    </div>
  );
};

export default BrandLogo;

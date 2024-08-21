import { oswald } from "@/fonts";
import Image from "next/image";
import React from "react";

const BrandLogo = ({ className }: { className: string }) => {
  return (
    <div className="flex items-center gap-x-2">
      <Image
        src="/mrs/brand-logo.png"
        alt="mrs-logo"
        height={2400}
        width={2400}
        // className={className}
        className="w-[15%] transform hover:scale-125 transition-transform duration-300"
      />
      <p className={`text-[26px] ${oswald.className} text-white`}>
        Manpower Research & Synchronization
      </p>
    </div>
  );
};

export default BrandLogo;

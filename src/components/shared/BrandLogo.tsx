import Image from "next/image";
import React from "react";

const BrandLogo = ({ className }: { className: string }) => {
  return (
    <Image
      src="/Logos/brand-logo-no-background.png"
      alt="mrs-logo"
      height={2400}
      width={2400}
      className={className}
    />
  );
};

export default BrandLogo;

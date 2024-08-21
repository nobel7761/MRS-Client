import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BrandLogo from "./BrandLogo";
import { space_grotest } from "@/fonts";
import { navbarItems } from "@/assets/information";

const MainNavbar = () => {
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState<string>("");

  useEffect(() => {
    setActiveRoute(router.pathname);
  }, [router.pathname]);

  return (
    <div className="max-w-[82.5%] mx-auto  px-[3rem] py-5 bg-primary rounded-full overflow-hidden flex justify-between items-center gap-x-[10%]">
      <Link href="/" className="w-[55%]">
        <BrandLogo className="" />
      </Link>

      <nav className="w-[45%] flex justify-between pr-10">
        {navbarItems.map((item, index) => (
          <Link
            key={index}
            href={item.route}
            className={` ${space_grotest.className} hover:text-white ${
              activeRoute === item.route
                ? "text-white font-extrabold text-xl"
                : "text-white font-extralight text-base"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MainNavbar;

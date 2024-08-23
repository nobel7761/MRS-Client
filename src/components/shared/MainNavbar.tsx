import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BrandLogo from "./BrandLogo";
import { space_grotest } from "@/fonts";
import { navbarItems } from "@/assets/information";
import { FiMenu, FiX } from "react-icons/fi";

const MainNavbar = () => {
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    setActiveRoute(router.pathname);
  }, [router.pathname]);

  return (
    <div className="md:max-w-[82.5%] mx-auto md:px-6 p-1 md:py-5 md:bg-primary md:rounded-full overflow-hidden flex justify-between items-center gap-x-1 md:border-0 border-b border-black md:mb-0 mb-5">
      <Link href="/" className="md:w-[55%]">
        <BrandLogo className="" />
      </Link>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden z-20" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <FiX className=" text-3xl cursor-pointer" />
        ) : (
          <FiMenu className=" text-3xl cursor-pointer" />
        )}
      </div>

      {/* Navigation Links */}
      <nav
        className={`lg:flex md:w-[45%] justify-between pr-10 lg:static absolute top-full left-0 right-0 bg-primary lg:bg-transparent lg:flex-row flex-col items-center lg:items-start lg:space-x-0 space-y-6 lg:space-y-0 px-6 py-6 lg:p-0 transition-all duration-300 ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        {navbarItems.map((item, index) => (
          <Link
            key={index}
            href={item.route}
            className={` ${space_grotest.className} hover:text-white ${
              activeRoute === item.route
                ? "text-white font-extrabold text-xl"
                : "text-white font-extralight text-base"
            }`}
            onClick={() => setMenuOpen(false)} // Close menu on link click
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MainNavbar;

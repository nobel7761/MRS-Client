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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setActiveRoute(router.pathname);
  }, [router.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative z-10">
      <div className="md:max-w-[82.5%] mx-auto md:px-6 p-1 md:py-5 md:bg-primary md:rounded-full overflow-hidden flex justify-between items-center gap-x-1 md:border-0 border-b border-black md:mb-0 mb-5">
        <Link href="/" className="md:w-[55%]">
          <BrandLogo className="" />
        </Link>
        <button
          type="button"
          className={`md:hidden p-2 text-2xl hover:bg-[#041E42] hover:text-white rounded-lg  ${
            isMobileMenuOpen ? "bg-[#041E42] text-white" : ""
          }`}
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto absolute  top-full left-0 right-0 bg-[#041E42] md:bg-transparent md:static md:mt-0  transition-all ease-in-out duration-300`}
        >
          <ul className="font-medium flex md:flex-row md:gap-x-8 flex-col md:p-0 p-4">
            {navbarItems.map((item, index) => (
              <Link
                key={index}
                href={item.route}
                onClick={toggleMobileMenu}
                className={`${
                  space_grotest.className
                } md:p-0 p-4 rounded-lg hover:text-white ${
                  activeRoute === item.route
                    ? "text-white md:font-extrabold md:text-xl bg-primary "
                    : "text-white md:font-extralight text-base hover:bg-gray-700 md:hover:bg-transparent"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;

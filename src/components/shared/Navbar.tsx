import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { space_grotest } from "@/fonts";
import MainNavbar from "./MainNavbar";
import { useRouter } from "next/router";

const Navbar = () => {
  const { pathname } = useRouter();
  return (
    <div className={`${pathname === "/" && "bg-backgroundColor"} md:pt-8 z-10`}>
      <div className="md:w-[65%] w-full mx-auto py-2 px-2 md:pl-10 md:rounded-tl-full md:rounded-tr-full overflow-hidden bg-[#041E42]">
        <div className="text-white text-sm font-bold flex justify-between items-center">
          <div className="md:w-1/2 flex items-center gap-x-2">
            <FaPhoneAlt />
            <div className=" flex gap-x-2 items-center">
              <p className={`${space_grotest.className} hidden md:block`}>
                Call Now
              </p>
              <p>01701228433</p>
            </div>
          </div>

          <div className="md:w-1/5 flex md:gap-x-10 gap-x-5 items-center">
            <Link
              href="https://wa.me/+8801701228433"
              target="_blank"
              className="w-fit"
            >
              <IoLogoWhatsapp className="hover:text-whatsapp text-lg" />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100078968657675"
              target="_blank"
              className="w-fit"
            >
              <BsFacebook className="hover:text-facebook text-lg" />
            </Link>
            <Link
              href="mailto:manpowersync@gmail.com"
              target="_blank"
              className="w-fit"
            >
              <MdEmail className="hover:text-black text-lg" />
            </Link>
          </div>
        </div>
      </div>

      <MainNavbar />
    </div>
  );
};

export default Navbar;

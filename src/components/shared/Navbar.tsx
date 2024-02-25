import Link from "next/link";
import MainNavbar from "./MainNavbar";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { space_grotest } from "@/fonts";

const Navbar = () => {
  return (
    <div>
      <div
        className="w-[73%] mx-auto px-[5rem] pt-4 pb-3 rounded-tl-full rounded-tr-full overflow-hidden"
        style={{
          background: "linear-gradient( 90deg, #5956f0 0%, #ff50b8 100%)",
        }}
      >
        <div className="text-white text-xl font-bold flex justify-between items-center">
          <div className="w-1/2 flex items-center gap-x-2">
            <FaPhoneAlt />
            <div className="text-base flex gap-x-2 items-center">
              <p className={`${space_grotest.className}`}>Call Now</p>
              <p>01701228430</p>
            </div>
          </div>

          <div className="w-1/5 flex gap-x-10">
            <Link
              href="https://wa.me/+8801701228430"
              target="_blank"
              className="w-fit"
            >
              <IoLogoWhatsapp className="hover:text-whatsapp text-2xl" />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100078968657675"
              target="_blank"
              className="w-fit"
            >
              <BsFacebook className="hover:text-facebook text-2xl" />
            </Link>
            <Link
              href="mailto:manpowersync@gmail.com"
              target="_blank"
              className="w-fit"
            >
              <MdEmail className="hover:text-black text-2xl" />
            </Link>
          </div>
        </div>
      </div>

      <MainNavbar />
    </div>
  );
};

export default Navbar;

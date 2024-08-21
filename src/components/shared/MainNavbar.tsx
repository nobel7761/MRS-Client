import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BrandLogo from "./BrandLogo";
import { space_grotest } from "@/fonts";

const navbarItems = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Blog",
    route: "/blog",
  },
  {
    label: "Service",
    route: "/service",
  },
  {
    label: "Team",
    route: "/team",
  },
  // {
  //   label: "Career",
  //   route: "/career",
  // },
  {
    label: "About",
    route: "/about",
  },
  // {
  //   label: "Contact",
  //   route: "/contact",
  // },
];

const MainNavbar = () => {
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState<string>("");

  useEffect(() => {
    setActiveRoute(router.pathname);
  }, [router.pathname]);

  return (
    <div className="max-w-[82.5%] mx-auto bg-primary px-[3rem] py-5 rounded-full overflow-hidden flex justify-between items-center gap-x-[10%]">
      <Link href="/" className="w-[25%]">
        <BrandLogo className="transform hover:scale-125 transition-transform duration-300 " />
      </Link>

      <nav className="w-[45%] flex justify-between pr-10">
        {navbarItems.map((item, index) => (
          <Link
            key={index}
            href={item.route}
            className={`text-xl ${space_grotest.className} hover:text-white ${
              activeRoute === item.route
                ? "text-white font-extrabold"
                : "text-black"
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

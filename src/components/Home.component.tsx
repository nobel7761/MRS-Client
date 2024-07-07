import { neon_font } from "@/fonts";
import TopCover from "./shared/TopCover.component";
import CustomContainer from "./shared/Container";
import Typical from "react-typical";
import Image from "next/image";

import CounterSection from "./Home/CounterSection";
import Intro from "./Home/Intro/Intro";
import Clients from "./Home/Clients/Clients";
import AboutUs from "./Home/AboutUs/AboutUs";
import Services from "./Home/Services/Services";
import Teams from "./Home/Teams/Teams";
import Quote from "./Home/Quote/Quote";
import Reviews from "./Home/Reviews/Reviews";
import FAQ from "./Home/FAQ/FAQ";
import Blog from "./Home/Blog/Blog";
import TopSection from "./Home/TopSection/TopSection";

const HomeComponent = () => {
  return (
    <div className="relative">
      <TopSection />
      <Intro />
      <CounterSection />
      <Clients />
      <AboutUs />
      <Services />
      <Teams />
      <Quote />
      <Reviews />
      <FAQ />
      <Blog />
      <h1>this will be footer</h1>
    </div>
  );
};

export default HomeComponent;

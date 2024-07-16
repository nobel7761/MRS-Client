import AboutUs from "./Home/AboutUs/AboutUs";
import Blog from "./Home/Blog/Blog";
import Clients from "./Home/Clients/Clients";
import CounterSection from "./Home/CounterSection";
import FAQ from "./Home/FAQ/FAQ";
import Intro from "./Home/Intro/Intro";
import Quote from "./Home/Quote/Quote";
import Reviews from "./Home/Reviews/Reviews";
import Services from "./Home/Services/Services";
import Teams from "./Home/Teams/Teams";
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
    </div>
  );
};

export default HomeComponent;

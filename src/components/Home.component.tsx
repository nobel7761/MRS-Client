import AboutUs from "./Home/AboutUs/AboutUs";
import Blog from "./Home/Blog/Blog";
import Clients from "./Home/Clients/Clients";
import CounterSection from "./Home/CounterSection";
import FAQ from "./Home/FAQ/FAQ";
import Intro from "./Home/Intro/Intro";
import OurValues from "./Home/OurValues/OurValues";
import Quote from "./Home/Quote/Quote";
import Reviews from "./Home/Reviews/Reviews";
import Services from "./Home/Services/Services";
import Teams from "./Home/Teams/Teams";
import TopSection from "./Home/TopSection/TopSection";
import TrainingAndDevelopment from "./Home/TrainingAndDevelopment/TrainingAndDevelopment";
import WhyWeAre from "./Home/WhyWeAre/WhyWeAre";

const HomeComponent = () => {
  return (
    <div className="relative">
      <TopSection />
      <CounterSection />
      {/* <Intro /> */}
      <OurValues />
      {/* <Quote /> */}
      <Clients />
      <TrainingAndDevelopment />
      <WhyWeAre />
      {/* <FAQ /> */}
      <Blog />
      {/* <AboutUs /> */}
      <Services />
      {/* <Teams /> */}

      {/* <Reviews /> */}
    </div>
  );
};

export default HomeComponent;

import AboutPageComponent from "@/components/About/About.component";
import { layoutUser } from "@/components/layouts/UserLayout";

const AboutPage = () => {
  return (
    <div>
      <AboutPageComponent />
      <h1>about</h1>
    </div>
  );
};

AboutPage.getLayout = layoutUser;

export default AboutPage;

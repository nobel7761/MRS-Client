import AboutPageComponent from "@/components/About/About.component";
import { layoutUser } from "@/components/layouts/UserLayout";
import Head from "next/head";

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>MRS | About</title>
      </Head>
      <AboutPageComponent />
    </div>
  );
};

AboutPage.getLayout = layoutUser;

export default AboutPage;

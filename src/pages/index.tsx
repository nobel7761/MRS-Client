import HomeComponent from "@/components/Home.component";
import { layoutUser } from "@/components/layouts/UserLayout";
import Head from "next/head";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>MRS</title>
      </Head>
      <HomeComponent />
    </div>
  );
};

HomePage.getLayout = layoutUser;

export default HomePage;

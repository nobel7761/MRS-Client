import { layoutUser } from "@/components/layouts/UserLayout";
import ServiceComponent from "@/components/Services/Service.component";
import Head from "next/head";

const ServicePage = () => {
  return (
    <div>
      <Head>
        <title>MRS | Services</title>
      </Head>
      <ServiceComponent />
    </div>
  );
};

ServicePage.getLayout = layoutUser;

export default ServicePage;

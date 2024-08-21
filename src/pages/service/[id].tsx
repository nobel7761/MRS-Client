import { layoutUser } from "@/components/layouts/UserLayout";
import ServiceDetailsComponent from "@/components/Services/ServiceDetails.component";
import Head from "next/head";

const ServiceDetails = () => {
  return (
    <div>
      <Head>
        <title>MRS | Service Details</title>
      </Head>
      <ServiceDetailsComponent />
    </div>
  );
};

ServiceDetails.getLayout = layoutUser;

export default ServiceDetails;

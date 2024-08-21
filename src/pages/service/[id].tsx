import { layoutUser } from "@/components/layouts/UserLayout";
import ServiceDetailsComponent from "@/components/Services/ServiceDetails.component";

const ServiceDetails = () => {
  return (
    <div>
      <ServiceDetailsComponent />
    </div>
  );
};

ServiceDetails.getLayout = layoutUser;

export default ServiceDetails;

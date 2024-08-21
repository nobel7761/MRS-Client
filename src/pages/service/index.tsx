import { layoutUser } from "@/components/layouts/UserLayout";
import ServiceComponent from "@/components/Services/Service.component";

const ServicePage = () => {
  return (
    <div>
      <ServiceComponent />
    </div>
  );
};

ServicePage.getLayout = layoutUser;

export default ServicePage;

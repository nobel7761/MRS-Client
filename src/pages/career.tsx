import CareerPageComponent from "@/components/Career/Career.component";
import { layoutUser } from "@/components/layouts/UserLayout";

const CareerPage = () => {
  return (
    <div>
      <CareerPageComponent />
      <h1>career</h1>
    </div>
  );
};

CareerPage.getLayout = layoutUser;

export default CareerPage;

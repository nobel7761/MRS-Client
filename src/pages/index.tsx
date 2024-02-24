import HomeComponent from "@/components/Home.component";
import { layoutUser } from "@/components/layouts/UserLayout";

const HomePage = () => {
  return (
    <div>
      <HomeComponent />
    </div>
  );
};

HomePage.getLayout = layoutUser;

export default HomePage;

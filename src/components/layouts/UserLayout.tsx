import { ReactElement, ReactNode } from "react";
import { layoutMain } from "./MainLayout";
import Navbar from "../shared/Navbar";

const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col overflow-y-auto min-h-screen">
      <Navbar />
      <section>{children}</section>
      {/* <Footer /> */}
    </div>
  );
};

export const layoutUser = (page: ReactElement) =>
  layoutMain(<UserLayout>{page}</UserLayout>);

export default UserLayout;

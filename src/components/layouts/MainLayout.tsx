import { ReactElement, ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen w-screen overflow-y-auto">
      <div className="w-full overflow-hidden">{children}</div>
    </div>
  );
};

export default MainLayout;

export const layoutMain = (page: ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

import React, { ReactElement } from "react";

const CustomContainer = ({ children }: { children: ReactElement }) => {
  return <div className="max-w-[82.5%] mx-auto">{children}</div>;
};

export default CustomContainer;

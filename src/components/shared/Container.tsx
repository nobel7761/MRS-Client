import React, { ReactElement } from "react";

const CustomContainer = ({
  maxWidth = "max-w-[82.5%]",
  children,
}: {
  maxWidth?: string;
  children: ReactElement;
}) => {
  return (
    <div className={`${maxWidth} mx-auto overflow-hidden`}>{children}</div>
  );
};

export default CustomContainer;

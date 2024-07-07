import React from "react";

const Title = ({ text, className }: { text?: string; className?: string }) => {
  return (
    <p className={`text-center text-5xl font-extrabold py-10 ${className}`}>
      {text}
    </p>
  );
};

export default Title;

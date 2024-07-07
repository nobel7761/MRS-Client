import CustomContainer from "@/components/shared/Container";
import { bona_nova } from "@/fonts";
import Image from "next/image";
import React from "react";

const Quote = () => {
  return (
    <div className=" overflow-hidden">
      <div
        //   className="bg-[url('/quote-background.jpg')] h-[450px] bg-center mix-blend-overlay"
        className={`bg-cover bg-center`}
        style={{
          backgroundImage: `url(/quote-background.jpg)`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <CustomContainer>
          <>
            <div className="py-20 px-0">
              <Image
                src="/4.png"
                alt="comma"
                height={800}
                width={800}
                className="w-[80px]"
              />
              <p
                className={`text-center text-[2rem] text-white font-extrabold ${bona_nova.className}`}
              >
                Rivers do not drink their own water, trees do not eat their own
                fruit.
                <br /> Sun does not shine on itself and flowers do not spread
                their fragrance for themselves. <br />
                Living for others is a rule of nature. We are all born to help
                each other. No matter how difficult it is.
                <br />
                Life is good when you are happy, but much better when others are
                happy because of you.
              </p>
              <div className="flex justify-end">
                <Image
                  src="/5.png"
                  alt="comma1"
                  height={800}
                  width={800}
                  className="w-[80px]"
                />
              </div>
            </div>
          </>
        </CustomContainer>
      </div>
    </div>
  );
};

export default Quote;

import CustomContainer from "@/components/shared/Container";
import { bona_nova } from "@/fonts";
import Image from "next/image";

const Quote = () => {
  return (
    <div className=" overflow-hidden">
      <div
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
                className="md:w-[80px] w-[20px]"
              />
              <p
                className={`text-center md:text-[1.5rem] text-white font-extrabold hidden md:block ${bona_nova.className}`}
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

              <p
                className={`w-[85%] mx-auto text-center text-white font-extrabold block md:hidden ${bona_nova.className}`}
              >
                Rivers do not drink their own water, trees do not eat their own
                fruit. Sun does not shine on itself and flowers do not spread
                their fragrance for themselves. Living for others is a rule of
                nature. We are all born to help each other. No matter how
                difficult it is. Life is good when you are happy, but much
                better when others are happy because of you.
              </p>
              <div className="flex justify-end">
                <Image
                  src="/5.png"
                  alt="comma1"
                  height={800}
                  width={800}
                  className="md:w-[80px] w-[20px]"
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

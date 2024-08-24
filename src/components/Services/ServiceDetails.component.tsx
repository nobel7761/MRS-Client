import { useRouter } from "next/router";
import TopCover from "../shared/TopCover.component";
import { useEffect, useState } from "react";
import CustomContainer from "../shared/Container";
import { services } from "@/assets/information";
import Image from "next/image";

interface ISingleService {
  id: number;
  image: string;
  logo: string;
  title: string;
  description: string;
}

const ServiceDetailsComponent = () => {
  const router = useRouter();
  const [singleService, setSingleService] = useState<
    ISingleService | undefined
  >(undefined);

  useEffect(() => {
    if (router.query) {
      const foundService = services.find(
        (service) => service.id === Number(router.query.id)
      );
      setSingleService(foundService);
    }
  }, [router.query]);
  return (
    <>
      <TopCover
        imageUrl={
          singleService?.image
            ? singleService.image
            : "/breadcrumb-background.jpg"
        }
        title="Service Details"
      />
      <CustomContainer>
        <>
          {singleService && (
            <div className="flex flex-col md:gap-y-10 gap-y-4 md:py-10 pb-10">
              <Image
                src={singleService?.logo}
                alt={singleService?.description}
                height={2400}
                width={2400}
                className="md:w-2/4 mx-auto"
              />
              <h1 className="text-center md:font-extrabold font-semibold md:text-5xl text-2xl">
                {singleService.title}
              </h1>
              <p className="md:text-left text-justify md:text-base text-sm">
                {singleService?.description}
              </p>
            </div>
          )}
        </>
      </CustomContainer>
    </>
  );
};

export default ServiceDetailsComponent;

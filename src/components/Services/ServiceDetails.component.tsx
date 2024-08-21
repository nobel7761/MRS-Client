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
            <div className="flex flex-col gap-y-10 py-10">
              <Image
                src={singleService?.logo}
                alt={singleService?.description}
                height={2400}
                width={2400}
                className="w-2/4 mx-auto"
              />
              <h1 className="text-center font-extrabold text-5xl">{}</h1>
              <p>{singleService?.description}</p>
            </div>
          )}
        </>
      </CustomContainer>
    </>
  );
};

export default ServiceDetailsComponent;

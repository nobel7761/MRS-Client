import { services } from "@/assets/information";
import TopCover from "../shared/TopCover.component";
import Link from "next/link";
import Image from "next/image";

const ServiceComponent = () => {
  return (
    <>
      <TopCover imageUrl="/breadcrumb-background.jpg" title="Service" />

      <div>
        {services.map((service, index) => (
          <div
            key={index}
            className={
              index % 2 === 0
                ? "flex md:flex-row flex-col"
                : "flex md:flex-row-reverse flex-col"
            }
          >
            <Link href={`service/${service.id}`} className="md:w-1/2">
              <Image
                src={service.image}
                alt={service.description}
                height={2400}
                width={2400}
                className="w-full md:h-[35rem] h-[25rem] object-cover mix-blend-overlay"
              />
            </Link>
            <div className="md:w-1/2 flex flex-col md:px-10 px-4">
              <Link
                href={`service/${service.id}`}
                className="font-extrabold md:text-3xl text-xl md:my-10 my-4 hover:text-primary"
              >
                {service.title}
              </Link>
              <p className="md:mb-0 mb-8">
                {service.description.length > 1000 ? (
                  <>
                    {service.description.substring(0, 1000)}...
                    <Link
                      href={`/service/${service.id}`}
                      className="text-primary ml-2 hover:underline hover:font-semibold"
                    >
                      Read More
                    </Link>
                  </>
                ) : (
                  service.description
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceComponent;

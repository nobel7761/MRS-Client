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
            className={index % 2 === 0 ? "flex" : "flex flex-row-reverse"}
          >
            <Link href={`service/${service.id}`} className="w-1/2">
              <Image
                src={service.image}
                alt={service.description}
                height={2400}
                width={2400}
                className="w-full h-[35rem] object-cover mix-blend-overlay"
              />
            </Link>
            <div className="w-1/2 flex flex-col px-10">
              <Link
                href={`service/${service.id}`}
                className="font-extrabold text-3xl my-10 hover:text-primary"
              >
                {service.description}
              </Link>
              <p>
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

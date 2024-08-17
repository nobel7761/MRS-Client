import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import CustomContainer from "@/components/shared/Container";
import Title from "@/components/shared/Title";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "@/assets/information";

const Blog = () => {
  return (
    <div className="pb-10">
      <CustomContainer>
        <>
          <Title text="Blogs" />
          <>
            <Swiper
              effect={"coverflow"}
              // grabCursor={true}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // autoplay={{
              //   delay: 2500,
              //   disableOnInteraction: false,
              // }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              modules={[Autoplay, EffectCoverflow]}
              slidesPerView={3.5} //1 is okay for mobile view
            >
              {blogData.map((blog, index) => (
                <SwiperSlide key={index}>
                  {({ isActive }) => (
                    <>
                      {isActive ? (
                        <Link href={`/blog/${blog.id}`}>
                          <div
                            className={`blog-swiper-slide relative rounded-[30px] bg-black ${
                              isActive ? "bg-opacity-0" : " bg-opacity-50"
                            }`}
                          >
                            <Image
                              src={blog.image}
                              alt={blog.title}
                              height={2400}
                              width={2400}
                              className="w-[37rem] h-[35rem] rounded-[30px] object-cover mix-blend-overlay"
                            />
                          </div>
                        </Link>
                      ) : (
                        <div
                          className={`blog-swiper-slide relative rounded-[30px] bg-black ${
                            isActive ? "bg-opacity-0" : " bg-opacity-50"
                          }`}
                        >
                          <Image
                            src={blog.image}
                            alt={blog.title}
                            height={2400}
                            width={2400}
                            className="w-[37rem] h-[35rem] rounded-[30px] object-cover mix-blend-overlay"
                          />
                        </div>
                      )}
                      {isActive && (
                        <div className="absolute bottom-0 text-white/80 hover:text-white bg-black bg-opacity-40 rounded-b-[30px]">
                          <div className="p-4">
                            <p className="text-base font-extrabold pb-4">
                              {blog.title.length > 60
                                ? blog.title.substring(0, 60) + "..."
                                : blog.title}
                            </p>
                            <p className="text-xs">
                              {blog.description.length > 120
                                ? blog.description.substring(0, 110) + "..."
                                : blog.description}
                            </p>
                          </div>
                        </div>
                        // <div className={styles.overlay}>
                        //   <div className={styles.overlayContent}>
                        //     <p className={styles.title}>
                        //       {blog.title.length > 60
                        //         ? blog.title.substring(0, 60) + "..."
                        //         : blog.title}
                        //     </p>
                        //     <p className={styles.description}>
                        //       {blog.description.length > 120
                        //         ? blog.description.substring(0, 110) + "..."
                        //         : blog.description}
                        //     </p>
                        //   </div>
                        // </div>
                      )}
                    </>
                  )}
                </SwiperSlide>
                // </Link>
              ))}
            </Swiper>
          </>
        </>
      </CustomContainer>
    </div>
  );
};

export default Blog;

import CustomContainer from "@/components/shared/Container";
import Title from "@/components/shared/Title";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";
import Link from "next/link";

const blogData = [
  {
    id: 1,
    image: "/blog/blog01.jpg",
    title: "আপনার শিশুর অস্বাভাবিক চঞ্চলতা কি আপনার দুশ্চিন্তার কারণ?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus facilis pariatur et! Quibusdam eligendi in neque dolor. Fugit unde eos ad, corporis iste accusamus. Veritatis inventore porro molestias cupiditate, saepe est incidunt maiores quas dolor neque perspiciatis at, voluptatem numquam quam, cumque accusantium pariatur ullam ducimus omnis magni! Ex aliquid sit modi eligendi! Architecto adipisci accusantium deleniti. Dolore illum consequatur, unde ipsam optio iusto blanditiis corporis ex iure commodi mollitia eligendi sunt alias harum quasi voluptate accusantium. Quasi libero, officiis qui sit consequatur ipsum omnis, atque magni aliquam similique temporibus dolorem culpa nemo ullam vero fugit quia fuga. Eligendi, molestias non? Eos officia, temporibus laboriosam omnis corporis explicabo dignissimos rem earum at odio nisi deleniti laborum optio quia suscipit rerum voluptatum perferendis numquam ratione consequatur corrupti blanditiis. Eum eius non enim facilis, tempora iure cumque. Quis dignissimos consectetur pariatur commodi voluptatibus voluptates amet, qui aliquam sapiente excepturi deserunt laudantium soluta modi iste doloribus odit fugiat nostrum quisquam voluptate molestias illo. Perferendis dolor accusamus in distinctio eligendi incidunt ut, adipisci beatae iure officia, molestiae expedita quas illo fugit iste aut labore voluptates asperiores fugiat laborum! Debitis consectetur illo velit commodi ea nam quaerat, hic consequuntur, placeat inventore voluptatem, possimus blanditiis! Mollitia incidunt, consequuntur provident ab pariatur perferendis enim dolore aperiam. Exercitationem inventore, totam facilis facere nemo officiis ullam in assumenda, sunt dolore cum repudiandae harum, fugit quos tempore doloribus ipsam itaque vitae. Minima vel maxime iure assumenda, quidem dolores voluptate, consequuntur impedit mollitia eius commodi exercitationem quis, nostrum temporibus quam sapiente ipsa aliquam! Nobis nisi rerum natus, doloribus incidunt debitis. Amet ea quos totam libero corporis ab ratione natus, error et nostrum suscipit sint sequi magni quidem quaerat autem nulla nihil debitis ipsa laboriosam beatae doloremque, aliquam illo esse? Quas repellendus expedita dolor unde voluptatem voluptates provident vero accusantium officiis rem?",
  },
  {
    id: 2,
    image: "/blog/blog02.jpg",
    title:
      "How Mental Health Consultants Can Help You To Overcome From Stress?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus facilis pariatur et! Quibusdam eligendi in neque dolor. Fugit unde eos ad, corporis iste accusamus. Veritatis inventore porro molestias cupiditate, saepe est incidunt maiores quas dolor neque perspiciatis at, voluptatem numquam quam, cumque accusantium pariatur ullam ducimus omnis magni! Ex aliquid sit modi eligendi! Architecto adipisci accusantium deleniti. Dolore illum consequatur, unde ipsam optio iusto blanditiis corporis ex iure commodi mollitia eligendi sunt alias harum quasi voluptate accusantium. Quasi libero, officiis qui sit consequatur ipsum omnis, atque magni aliquam similique temporibus dolorem culpa nemo ullam vero fugit quia fuga. Eligendi, molestias non? Eos officia, temporibus laboriosam omnis corporis explicabo dignissimos rem earum at odio nisi deleniti laborum optio quia suscipit rerum voluptatum perferendis numquam ratione consequatur corrupti blanditiis. Eum eius non enim facilis, tempora iure cumque. Quis dignissimos consectetur pariatur commodi voluptatibus voluptates amet, qui aliquam sapiente excepturi deserunt laudantium soluta modi iste doloribus odit fugiat nostrum quisquam voluptate molestias illo. Perferendis dolor accusamus in distinctio eligendi incidunt ut, adipisci beatae iure officia, molestiae expedita quas illo fugit iste aut labore voluptates asperiores fugiat laborum! Debitis consectetur illo velit commodi ea nam quaerat, hic consequuntur, placeat inventore voluptatem, possimus blanditiis! Mollitia incidunt, consequuntur provident ab pariatur perferendis enim dolore aperiam. Exercitationem inventore, totam facilis facere nemo officiis ullam in assumenda, sunt dolore cum repudiandae harum, fugit quos tempore doloribus ipsam itaque vitae. Minima vel maxime iure assumenda, quidem dolores voluptate, consequuntur impedit mollitia eius commodi exercitationem quis, nostrum temporibus quam sapiente ipsa aliquam! Nobis nisi rerum natus, doloribus incidunt debitis. Amet ea quos totam libero corporis ab ratione natus, error et nostrum suscipit sint sequi magni quidem quaerat autem nulla nihil debitis ipsa laboriosam beatae doloremque, aliquam illo esse? Quas repellendus expedita dolor unde voluptatem voluptates provident vero accusantium officiis rem?",
  },
  {
    id: 3,
    image: "/blog/blog03.jpg",
    title:
      "How Mental Health Consultants Can Help You To Overcome From Stress?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus facilis pariatur et! Quibusdam eligendi in neque dolor. Fugit unde eos ad, corporis iste accusamus. Veritatis inventore porro molestias cupiditate, saepe est incidunt maiores quas dolor neque perspiciatis at, voluptatem numquam quam, cumque accusantium pariatur ullam ducimus omnis magni! Ex aliquid sit modi eligendi! Architecto adipisci accusantium deleniti. Dolore illum consequatur, unde ipsam optio iusto blanditiis corporis ex iure commodi mollitia eligendi sunt alias harum quasi voluptate accusantium. Quasi libero, officiis qui sit consequatur ipsum omnis, atque magni aliquam similique temporibus dolorem culpa nemo ullam vero fugit quia fuga. Eligendi, molestias non? Eos officia, temporibus laboriosam omnis corporis explicabo dignissimos rem earum at odio nisi deleniti laborum optio quia suscipit rerum voluptatum perferendis numquam ratione consequatur corrupti blanditiis. Eum eius non enim facilis, tempora iure cumque. Quis dignissimos consectetur pariatur commodi voluptatibus voluptates amet, qui aliquam sapiente excepturi deserunt laudantium soluta modi iste doloribus odit fugiat nostrum quisquam voluptate molestias illo. Perferendis dolor accusamus in distinctio eligendi incidunt ut, adipisci beatae iure officia, molestiae expedita quas illo fugit iste aut labore voluptates asperiores fugiat laborum! Debitis consectetur illo velit commodi ea nam quaerat, hic consequuntur, placeat inventore voluptatem, possimus blanditiis! Mollitia incidunt, consequuntur provident ab pariatur perferendis enim dolore aperiam. Exercitationem inventore, totam facilis facere nemo officiis ullam in assumenda, sunt dolore cum repudiandae harum, fugit quos tempore doloribus ipsam itaque vitae. Minima vel maxime iure assumenda, quidem dolores voluptate, consequuntur impedit mollitia eius commodi exercitationem quis, nostrum temporibus quam sapiente ipsa aliquam! Nobis nisi rerum natus, doloribus incidunt debitis. Amet ea quos totam libero corporis ab ratione natus, error et nostrum suscipit sint sequi magni quidem quaerat autem nulla nihil debitis ipsa laboriosam beatae doloremque, aliquam illo esse? Quas repellendus expedita dolor unde voluptatem voluptates provident vero accusantium officiis rem?",
  },
  {
    id: 4,
    image: "/blog/blog01.jpg",
    title: "আপনার শিশুর অস্বাভাবিক চঞ্চলতা কি আপনার দুশ্চিন্তার কারণ?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus facilis pariatur et! Quibusdam eligendi in neque dolor. Fugit unde eos ad, corporis iste accusamus. Veritatis inventore porro molestias cupiditate, saepe est incidunt maiores quas dolor neque perspiciatis at, voluptatem numquam quam, cumque accusantium pariatur ullam ducimus omnis magni! Ex aliquid sit modi eligendi! Architecto adipisci accusantium deleniti. Dolore illum consequatur, unde ipsam optio iusto blanditiis corporis ex iure commodi mollitia eligendi sunt alias harum quasi voluptate accusantium. Quasi libero, officiis qui sit consequatur ipsum omnis, atque magni aliquam similique temporibus dolorem culpa nemo ullam vero fugit quia fuga. Eligendi, molestias non? Eos officia, temporibus laboriosam omnis corporis explicabo dignissimos rem earum at odio nisi deleniti laborum optio quia suscipit rerum voluptatum perferendis numquam ratione consequatur corrupti blanditiis. Eum eius non enim facilis, tempora iure cumque. Quis dignissimos consectetur pariatur commodi voluptatibus voluptates amet, qui aliquam sapiente excepturi deserunt laudantium soluta modi iste doloribus odit fugiat nostrum quisquam voluptate molestias illo. Perferendis dolor accusamus in distinctio eligendi incidunt ut, adipisci beatae iure officia, molestiae expedita quas illo fugit iste aut labore voluptates asperiores fugiat laborum! Debitis consectetur illo velit commodi ea nam quaerat, hic consequuntur, placeat inventore voluptatem, possimus blanditiis! Mollitia incidunt, consequuntur provident ab pariatur perferendis enim dolore aperiam. Exercitationem inventore, totam facilis facere nemo officiis ullam in assumenda, sunt dolore cum repudiandae harum, fugit quos tempore doloribus ipsam itaque vitae. Minima vel maxime iure assumenda, quidem dolores voluptate, consequuntur impedit mollitia eius commodi exercitationem quis, nostrum temporibus quam sapiente ipsa aliquam! Nobis nisi rerum natus, doloribus incidunt debitis. Amet ea quos totam libero corporis ab ratione natus, error et nostrum suscipit sint sequi magni quidem quaerat autem nulla nihil debitis ipsa laboriosam beatae doloremque, aliquam illo esse? Quas repellendus expedita dolor unde voluptatem voluptates provident vero accusantium officiis rem?",
  },
  {
    id: 5,
    image: "/blog/blog02.jpg",
    title:
      "How Mental Health Consultants Can Help You To Overcome From Stress?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus facilis pariatur et! Quibusdam eligendi in neque dolor. Fugit unde eos ad, corporis iste accusamus. Veritatis inventore porro molestias cupiditate, saepe est incidunt maiores quas dolor neque perspiciatis at, voluptatem numquam quam, cumque accusantium pariatur ullam ducimus omnis magni! Ex aliquid sit modi eligendi! Architecto adipisci accusantium deleniti. Dolore illum consequatur, unde ipsam optio iusto blanditiis corporis ex iure commodi mollitia eligendi sunt alias harum quasi voluptate accusantium. Quasi libero, officiis qui sit consequatur ipsum omnis, atque magni aliquam similique temporibus dolorem culpa nemo ullam vero fugit quia fuga. Eligendi, molestias non? Eos officia, temporibus laboriosam omnis corporis explicabo dignissimos rem earum at odio nisi deleniti laborum optio quia suscipit rerum voluptatum perferendis numquam ratione consequatur corrupti blanditiis. Eum eius non enim facilis, tempora iure cumque. Quis dignissimos consectetur pariatur commodi voluptatibus voluptates amet, qui aliquam sapiente excepturi deserunt laudantium soluta modi iste doloribus odit fugiat nostrum quisquam voluptate molestias illo. Perferendis dolor accusamus in distinctio eligendi incidunt ut, adipisci beatae iure officia, molestiae expedita quas illo fugit iste aut labore voluptates asperiores fugiat laborum! Debitis consectetur illo velit commodi ea nam quaerat, hic consequuntur, placeat inventore voluptatem, possimus blanditiis! Mollitia incidunt, consequuntur provident ab pariatur perferendis enim dolore aperiam. Exercitationem inventore, totam facilis facere nemo officiis ullam in assumenda, sunt dolore cum repudiandae harum, fugit quos tempore doloribus ipsam itaque vitae. Minima vel maxime iure assumenda, quidem dolores voluptate, consequuntur impedit mollitia eius commodi exercitationem quis, nostrum temporibus quam sapiente ipsa aliquam! Nobis nisi rerum natus, doloribus incidunt debitis. Amet ea quos totam libero corporis ab ratione natus, error et nostrum suscipit sint sequi magni quidem quaerat autem nulla nihil debitis ipsa laboriosam beatae doloremque, aliquam illo esse? Quas repellendus expedita dolor unde voluptatem voluptates provident vero accusantium officiis rem?",
  },
  {
    id: 6,
    image: "/blog/blog03.jpg",
    title:
      "How Mental Health Consultants Can Help You To Overcome From Stress?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus facilis pariatur et! Quibusdam eligendi in neque dolor. Fugit unde eos ad, corporis iste accusamus. Veritatis inventore porro molestias cupiditate, saepe est incidunt maiores quas dolor neque perspiciatis at, voluptatem numquam quam, cumque accusantium pariatur ullam ducimus omnis magni! Ex aliquid sit modi eligendi! Architecto adipisci accusantium deleniti. Dolore illum consequatur, unde ipsam optio iusto blanditiis corporis ex iure commodi mollitia eligendi sunt alias harum quasi voluptate accusantium. Quasi libero, officiis qui sit consequatur ipsum omnis, atque magni aliquam similique temporibus dolorem culpa nemo ullam vero fugit quia fuga. Eligendi, molestias non? Eos officia, temporibus laboriosam omnis corporis explicabo dignissimos rem earum at odio nisi deleniti laborum optio quia suscipit rerum voluptatum perferendis numquam ratione consequatur corrupti blanditiis. Eum eius non enim facilis, tempora iure cumque. Quis dignissimos consectetur pariatur commodi voluptatibus voluptates amet, qui aliquam sapiente excepturi deserunt laudantium soluta modi iste doloribus odit fugiat nostrum quisquam voluptate molestias illo. Perferendis dolor accusamus in distinctio eligendi incidunt ut, adipisci beatae iure officia, molestiae expedita quas illo fugit iste aut labore voluptates asperiores fugiat laborum! Debitis consectetur illo velit commodi ea nam quaerat, hic consequuntur, placeat inventore voluptatem, possimus blanditiis! Mollitia incidunt, consequuntur provident ab pariatur perferendis enim dolore aperiam. Exercitationem inventore, totam facilis facere nemo officiis ullam in assumenda, sunt dolore cum repudiandae harum, fugit quos tempore doloribus ipsam itaque vitae. Minima vel maxime iure assumenda, quidem dolores voluptate, consequuntur impedit mollitia eius commodi exercitationem quis, nostrum temporibus quam sapiente ipsa aliquam! Nobis nisi rerum natus, doloribus incidunt debitis. Amet ea quos totam libero corporis ab ratione natus, error et nostrum suscipit sint sequi magni quidem quaerat autem nulla nihil debitis ipsa laboriosam beatae doloremque, aliquam illo esse? Quas repellendus expedita dolor unde voluptatem voluptates provident vero accusantium officiis rem?",
  },
  {
    id: 7,
    image: "/blog/blog01.jpg",
    title: "আপনার শিশুর অস্বাভাবিক চঞ্চলতা কি আপনার দুশ্চিন্তার কারণ?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus facilis pariatur et! Quibusdam eligendi in neque dolor. Fugit unde eos ad, corporis iste accusamus. Veritatis inventore porro molestias cupiditate, saepe est incidunt maiores quas dolor neque perspiciatis at, voluptatem numquam quam, cumque accusantium pariatur ullam ducimus omnis magni! Ex aliquid sit modi eligendi! Architecto adipisci accusantium deleniti. Dolore illum consequatur, unde ipsam optio iusto blanditiis corporis ex iure commodi mollitia eligendi sunt alias harum quasi voluptate accusantium. Quasi libero, officiis qui sit consequatur ipsum omnis, atque magni aliquam similique temporibus dolorem culpa nemo ullam vero fugit quia fuga. Eligendi, molestias non? Eos officia, temporibus laboriosam omnis corporis explicabo dignissimos rem earum at odio nisi deleniti laborum optio quia suscipit rerum voluptatum perferendis numquam ratione consequatur corrupti blanditiis. Eum eius non enim facilis, tempora iure cumque. Quis dignissimos consectetur pariatur commodi voluptatibus voluptates amet, qui aliquam sapiente excepturi deserunt laudantium soluta modi iste doloribus odit fugiat nostrum quisquam voluptate molestias illo. Perferendis dolor accusamus in distinctio eligendi incidunt ut, adipisci beatae iure officia, molestiae expedita quas illo fugit iste aut labore voluptates asperiores fugiat laborum! Debitis consectetur illo velit commodi ea nam quaerat, hic consequuntur, placeat inventore voluptatem, possimus blanditiis! Mollitia incidunt, consequuntur provident ab pariatur perferendis enim dolore aperiam. Exercitationem inventore, totam facilis facere nemo officiis ullam in assumenda, sunt dolore cum repudiandae harum, fugit quos tempore doloribus ipsam itaque vitae. Minima vel maxime iure assumenda, quidem dolores voluptate, consequuntur impedit mollitia eius commodi exercitationem quis, nostrum temporibus quam sapiente ipsa aliquam! Nobis nisi rerum natus, doloribus incidunt debitis. Amet ea quos totam libero corporis ab ratione natus, error et nostrum suscipit sint sequi magni quidem quaerat autem nulla nihil debitis ipsa laboriosam beatae doloremque, aliquam illo esse? Quas repellendus expedita dolor unde voluptatem voluptates provident vero accusantium officiis rem?",
  },
  {
    id: 8,
    image: "/blog/blog02.jpg",
    title:
      "How Mental Health Consultants Can Help You To Overcome From Stress?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus facilis pariatur et! Quibusdam eligendi in neque dolor. Fugit unde eos ad, corporis iste accusamus. Veritatis inventore porro molestias cupiditate, saepe est incidunt maiores quas dolor neque perspiciatis at, voluptatem numquam quam, cumque accusantium pariatur ullam ducimus omnis magni! Ex aliquid sit modi eligendi! Architecto adipisci accusantium deleniti. Dolore illum consequatur, unde ipsam optio iusto blanditiis corporis ex iure commodi mollitia eligendi sunt alias harum quasi voluptate accusantium. Quasi libero, officiis qui sit consequatur ipsum omnis, atque magni aliquam similique temporibus dolorem culpa nemo ullam vero fugit quia fuga. Eligendi, molestias non? Eos officia, temporibus laboriosam omnis corporis explicabo dignissimos rem earum at odio nisi deleniti laborum optio quia suscipit rerum voluptatum perferendis numquam ratione consequatur corrupti blanditiis. Eum eius non enim facilis, tempora iure cumque. Quis dignissimos consectetur pariatur commodi voluptatibus voluptates amet, qui aliquam sapiente excepturi deserunt laudantium soluta modi iste doloribus odit fugiat nostrum quisquam voluptate molestias illo. Perferendis dolor accusamus in distinctio eligendi incidunt ut, adipisci beatae iure officia, molestiae expedita quas illo fugit iste aut labore voluptates asperiores fugiat laborum! Debitis consectetur illo velit commodi ea nam quaerat, hic consequuntur, placeat inventore voluptatem, possimus blanditiis! Mollitia incidunt, consequuntur provident ab pariatur perferendis enim dolore aperiam. Exercitationem inventore, totam facilis facere nemo officiis ullam in assumenda, sunt dolore cum repudiandae harum, fugit quos tempore doloribus ipsam itaque vitae. Minima vel maxime iure assumenda, quidem dolores voluptate, consequuntur impedit mollitia eius commodi exercitationem quis, nostrum temporibus quam sapiente ipsa aliquam! Nobis nisi rerum natus, doloribus incidunt debitis. Amet ea quos totam libero corporis ab ratione natus, error et nostrum suscipit sint sequi magni quidem quaerat autem nulla nihil debitis ipsa laboriosam beatae doloremque, aliquam illo esse? Quas repellendus expedita dolor unde voluptatem voluptates provident vero accusantium officiis rem?",
  },
];

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
                        <Link href={`/blogs/${blog.id}`}>
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

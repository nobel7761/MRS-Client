import { blogData } from "@/assets/information";
import TopCover from "../shared/TopCover.component";
import Image from "next/image";
import Link from "next/link";

const BlogPageComponent = () => {
  return (
    <>
      <TopCover imageUrl="/breadcrumb-background.jpg" title="Blog" />

      <div>
        {blogData.map((blog, index) => (
          <div
            key={index}
            className={
              index % 2 === 0
                ? "flex md:flex-row flex-col"
                : "flex md:flex-row-reverse flex-col"
            }
          >
            <Link href={`blog/${blog.id}`} className="md:w-1/2">
              <Image
                src={blog.image}
                alt={blog.title}
                height={2400}
                width={2400}
                className="w-full md:h-[35rem] h-[25rem] object-cover mix-blend-overlay"
              />
            </Link>
            <div className="md:w-1/2 flex flex-col md:px-10 px-4">
              <Link
                href={`blog/${blog.id}`}
                className="font-extrabold md:text-3xl text-xl md:my-10 my-4 hover:text-primary"
              >
                {blog.title}
              </Link>
              <p className="md:mb-0 mb-8">
                {blog.description.length > 1000 ? (
                  <>
                    {blog.description.substring(0, 1000)}...
                    <Link
                      href={`/blog/${blog.id}`}
                      className="text-primary ml-2 hover:underline hover:font-semibold"
                    >
                      Read More
                    </Link>
                  </>
                ) : (
                  blog.description
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogPageComponent;

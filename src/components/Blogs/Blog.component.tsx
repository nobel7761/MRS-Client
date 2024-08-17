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
            className={index % 2 === 0 ? "flex" : "flex flex-row-reverse"}
          >
            <Link href={`blog/${blog.id}`} className="w-1/2">
              <Image
                src={blog.image}
                alt={blog.title}
                height={2400}
                width={2400}
                className="w-full h-[35rem] object-cover mix-blend-overlay"
              />
            </Link>
            <div className="w-1/2 flex flex-col px-10">
              <Link
                href={`blog/${blog.id}`}
                className="font-extrabold text-3xl my-10 hover:text-primary"
              >
                {blog.title}
              </Link>
              <p>
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

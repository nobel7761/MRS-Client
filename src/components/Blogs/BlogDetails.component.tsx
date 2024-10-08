import { useRouter } from "next/router";
import TopCover from "../shared/TopCover.component";
import { useEffect, useState } from "react";
import { blogData } from "@/assets/information";
import CustomContainer from "../shared/Container";

interface ISingleBlog {
  id: number;
  title: string;
  image: string;
  description: string;
}

const BlogDetailsComponent = () => {
  const router = useRouter();
  const [singleBlog, setSingleBlog] = useState<ISingleBlog | undefined>(
    undefined
  );

  useEffect(() => {
    if (router.query) {
      const foundBlog = blogData.find(
        (blog) => blog.id === Number(router.query.id)
      );
      setSingleBlog(foundBlog);
    }
  }, [router.query]);
  return (
    <>
      <TopCover
        imageUrl={
          singleBlog?.image ? singleBlog.image : "/breadcrumb-background.jpg"
        }
        title="Blog Details"
      />
      <CustomContainer>
        <>
          <div className="flex flex-col md:gap-y-10 gap-y-4 py-10">
            <h1 className="text-center md:font-extrabold font-semibold md:text-5xl text-2xl">
              {singleBlog?.title}
            </h1>
            <p className="md:text-base text-sm">{singleBlog?.description}</p>
          </div>
        </>
      </CustomContainer>
    </>
  );
};

export default BlogDetailsComponent;

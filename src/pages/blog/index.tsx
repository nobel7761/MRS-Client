import BlogPageComponent from "@/components/Blogs/Blog.component";
import { layoutUser } from "@/components/layouts/UserLayout";
import Head from "next/head";

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>MRS | Blogs</title>
      </Head>
      <BlogPageComponent />
    </>
  );
};

BlogPage.getLayout = layoutUser;

export default BlogPage;

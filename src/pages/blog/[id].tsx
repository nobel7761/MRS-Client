import BlogDetailsComponent from "@/components/Blogs/BlogDetails.component";
import { layoutUser } from "@/components/layouts/UserLayout";
import Head from "next/head";

const BlogDetails = () => {
  return (
    <div>
      <Head>
        <title>MRS | Blog Details</title>
      </Head>
      <BlogDetailsComponent />
    </div>
  );
};

BlogDetails.getLayout = layoutUser;

export default BlogDetails;

import BlogDetailsComponent from "@/components/Blogs/BlogDetails.component";
import { layoutUser } from "@/components/layouts/UserLayout";

const BlogDetails = () => {
  return (
    <div>
      <BlogDetailsComponent />
    </div>
  );
};

BlogDetails.getLayout = layoutUser;

export default BlogDetails;

import BlogPageComponent from "@/components/Blogs/Blog.component";
import { layoutUser } from "@/components/layouts/UserLayout";

const BlogPage = () => {
  return <BlogPageComponent />;
};

BlogPage.getLayout = layoutUser;

export default BlogPage;

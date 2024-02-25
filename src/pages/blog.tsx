import BlogPageComponent from "@/components/Blogs/Blog.component";
import { layoutUser } from "@/components/layouts/UserLayout";

const BlogPage = () => {
  return (
    <div>
      <BlogPageComponent />
      <h1>blog</h1>
    </div>
  );
};

BlogPage.getLayout = layoutUser;

export default BlogPage;

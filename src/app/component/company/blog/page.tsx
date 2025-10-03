import Blogs from "@/app/components/company/blog/blogs/page";
import React from "react";

export const metadata = {
  title: "Blog | Camlenio",
  description:
    "Read the latest insights on digital solutions, fintech, and technology trends.",
  keywords: ["Blog", "Digital Marketing", "Fintech", "Technology"],
  openGraph: {
    title: "Camlenio Blog",
    description: "Insights and articles on digital growth strategies.",
    url: "https://www.camlenio.com/blog",
    siteName: "Camlenio",
    type: "article",
  },
};

const BlogPage = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove">
      <Blogs />
    </div>
  );
};

export default BlogPage;

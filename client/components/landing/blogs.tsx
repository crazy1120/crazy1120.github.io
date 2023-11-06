import { useTranslation } from "next-i18next";

import Blog from "./blog";
import { COMMON } from "@/utils/constants";

interface BlogsProps {
  blogs: BlogComponent[];
}

const BlogList: React.FC<BlogsProps> = ({ blogs }) => {
  const { t } = useTranslation(COMMON);

  return (
    <section className="flex flex-col items-center bg-gray-900 py-10 lg:py-20 px-2.5 lg:px-3">
      <p className="text-3xl lg:text-6xl font-bold text-center mb-[30px] lg:mb-[50px]">
        {t("what's_new")}
      </p>
      <div className="flex flex-wrap justify-around">
        {blogs.map((blog, ind) => (
          <Blog key={ind} info={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogList;

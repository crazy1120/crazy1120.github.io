import Markdown from "react-markdown";
import Link from "next/link";

import { timeFormatter } from "@/utils/microFunctions";

const PageBlogComponent: React.FC<BlogElement> = (props) => {
  return (
    <section className="pb-20">
      <div
        className="pt-20 pb-20 mb-12 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${props.image.data.attributes.url}')`,
        }}>
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-base text-gray-800 md:text-lg">
                <Link
                  href={props.category.data.attributes.link}
                  className="hover:underline">
                  {props.category.data.attributes.category}
                </Link>{" "}
                {timeFormatter(props.date)}
              </span>
              <h2 className="text-4xl md:text-5xl mt-4 text-white font-bold font-heading">
                {props.title}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 mx-auto">
        <Markdown className="max-w-2xl leading-loose mx-auto">
          {props.content}
        </Markdown>
      </div>
    </section>
  );
};

export default PageBlogComponent;

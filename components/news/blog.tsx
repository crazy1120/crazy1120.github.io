import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

import { timeFormatter } from "@/utils/microFunctions";

const BlogElement: React.FC<BlogElement> = ({
  title,
  image,
  date,
  category,
  link,
  content,
}) => {
  const { url: imageURL } = image.data.attributes;
  const { link: categoryLink, category: categoryName } =
    category.data.attributes;

  return (
    <>
      <Link href={link}>
        <Image
          width={1920}
          height={1080}
          className="h-80 w-full object-cover rounded"
          src={imageURL}
          alt=""
        />
      </Link>
      <p className="mt-6 text-sm">
        <Link href={categoryLink}>
          <span className="text-purple hover:text-green">{categoryName}</span>
        </Link>{" "}
        <span className="text-gray-600">{timeFormatter(date)}</span>
      </p>
      <Link href={link}>
        <h3 className="my-2 text-2xl font-bold font-heading">{title}</h3>
        <Markdown className={"leading-loose overflow-hidden line-clamp-2"}>
          {content}
        </Markdown>
      </Link>
    </>
  );
};

export default BlogElement;

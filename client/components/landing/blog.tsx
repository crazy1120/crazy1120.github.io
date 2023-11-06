import Image from "next/image";
import Link from "next/link";

interface BlogProps {
  info: BlogComponent;
}

const Blog: React.FC<BlogProps> = ({ info }) => {
  const { title, link, date, image } = info;
  const { url: imageURL } = image.data.attributes;

  return (
    <Link
      href={link}
      className="relative basis-full sm:basis-[47%] lg:basis-[31%] rounded-[10px] m-2.5 lg:m-3 bg-white">
      <Image
        src={imageURL}
        alt={imageURL}
        width={1920}
        height={1080}
        className="w-full rounded-t-[10px]"
      />
      <div className="flex flex-col items-start m-5 lg:m-[30px]">
        <h6 className="text-[17px] lg:text-[21px] font-bold">{title}</h6>
        <p className="text-sm mt-[5px] mb-[3px]">{date}</p>
      </div>
    </Link>
  );
};

export default Blog;

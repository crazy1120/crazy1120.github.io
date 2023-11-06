import Image from "next/image";
import Link from "next/link";

const AboutExploreItem: React.FC<LinkDescComponent> = ({
  title,
  desc,
  link,
  link_text,
  image,
}) => {
  const { url: imageURL } = image.data.attributes;

  return (
    <li className="flex-1 text-black flex flex-col items-center mb-[30px] mx-2.5 lg:mx-3">
      <Image
        src={imageURL}
        alt={imageURL}
        width={1920}
        height={1080}
        className="rounded-[10px]"
      />
      <h6 className="text-[21px] leading-[25px] font-bold my-4">{title}</h6>
      <p className="text-[17px] leading-[25px] text-center">{desc}</p>
      <Link href={link} className="text-[17px] leading-[21px] font-bold mt-4">
        {link_text}
      </Link>
    </li>
  );
};

export default AboutExploreItem;

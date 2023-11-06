import { useTranslation } from "next-i18next";
import { COMMON } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

interface BlockProps {
  left?: boolean;
  info: LinkDescComponent;
}

const Product: React.FC<BlockProps> = ({ left = false, info }) => {
  const { t } = useTranslation(COMMON);
  const { title, desc, link, image } = info;
  const link_text = info.link_text || t("view_products");
  const { url: imageURL } = image.data.attributes;

  const { type }: { type: string } = useSelector(
    (state: { device: { type: string } }) => state.device
  );

  return (
    <div
      className={`flex flex-col items-center text-gray-100 pt-20 px-2.5 pb-2.5 ${
        left && type !== "mobile" && "mr-2.5 lg:mr-3"
      }`}>
      <h3 className="text-3xl lg:text-6xl font-bold">{title}</h3>
      <p className="text-[17px] lg:text-[21px] text-center mt-2.5">{desc}</p>
      <Link
        href={link}
        className="text-[17px] lg:text-[21px] text-white bg-purple hover:bg-green font-bold py-2.5 px-[30px] rounded-[30px] my-[30px]">
        {link_text}
      </Link>
      <Image
        src={imageURL}
        alt={imageURL}
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Product;

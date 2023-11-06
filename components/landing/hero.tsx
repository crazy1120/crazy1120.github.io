import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";
import { COMMON } from "@/utils/constants";

interface HeroProps {
  info: LinkDescComponent;
  flexLastHero?: boolean;
}

const Hero: React.FC<HeroProps> = ({ info, flexLastHero }) => {
  const { type }: { type: string } = useSelector(
    (state: { device: { type: string } }) => state.device
  );
  const { t } = useTranslation(COMMON);

  const { title, desc, link, image, mobile_image } = info;

  const link_text = info.link_text || t("view_products");

  const { url: imageURL } = image.data.attributes;
  const { url: mobileImageURL } = mobile_image?.data?.attributes || { url: "" };

  return (
    <div
      className={`relative w-full h-[600px] lg:h-[700px] mb-2.5 lg:mb-3 flex justify-center items-end ${
        flexLastHero && "ml-2.5 lg:ml-3"
      }`}>
      <Image
        src={type === "mobile" && mobileImageURL ? mobileImageURL : imageURL}
        alt={imageURL}
        width={1920}
        height={1080}
        className={`absolute w-full h-full top-0 object-cover rounded-[10px] z-0`}
      />
      <div
        className={`relative flex flex-wrap flex-col items-center max-w-[670px] mb-[30px] lg:mb-[50px] text-white z-10`}>
        <h2 className={`text-3xl lg:text-6xl font-bold mb-2.5`}>{title}</h2>
        <p
          className={`text-[17px] lg:text-[21px] self-stretch text-center mb-[30px]`}>
          {desc}
        </p>
        <Link
          href={`${link}`}
          className={`text-[17px] lg:text-[21px] font-bold bg-purple hover:bg-green py-2.5 px-[30px] rounded-[30px]`}>
          {link_text}
        </Link>
      </div>
    </div>
  );
};

export default Hero;

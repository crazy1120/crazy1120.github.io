import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

import { VideoPlayer } from "../icons";
import path from "path";

type CompProps = DescComponent & {
  onLeft: boolean;
  isBlock: boolean;
  link?: string;
  link_text?: string;
};

const Video: React.FC<{ url: string }> = ({ url }) => (
  <video
    className="w-[80%] sm:w-[30%] lg:w-[410px] top-0 object-cover"
    src={url}
    autoPlay
    loop
    playsInline
    controlsList="nodownload"
  />
);

const LeftMedia: React.FC<{ isBlock: boolean; url: string }> = ({
  isBlock,
  url,
}) => {
  const ext = path.extname(url);

  return ext !== ".mov" ? (
    <Image
      src={url}
      alt={url}
      width={1920}
      height={1080}
      className={`${
        !isBlock ? "h-full" : "w-[80%] sm:w-[30%] lg:w-[410px]"
      } top-0 object-cover`}
    />
  ) : (
    <Video url={url} />
  );
};

const RightMedia: React.FC<{ url: string }> = ({ url }) => {
  const ext = path.extname(url);

  return ext !== ".mov" ? (
    <Image
      src={url}
      alt={url}
      width={1920}
      height={1080}
      className={`w-[80%] sm:w-[30%] lg:w-[410px] top-0 object-cover`}
    />
  ) : (
    <Video url={url} />
  );
};

const Block: React.FC<CompProps> = ({
  title,
  desc,
  image,
  link,
  link_text,
  isBlock,
  onLeft,
}) => {
  const { type }: { type: string } = useSelector(
    (state: { device: { type: string } }) => state.device
  );
  const isMobile: boolean = type === "mobile";
  const { url: imageURL } = image.data.attributes;

  return (
    <section
      className={`w-full max-w-[1440px] flex items-center shrink-0 min-h-[290px] ${
        isMobile || !isBlock
          ? "flex-col py-8 px-2 gap-8 lg:pt-3 lg:pb-[87px] lg:px-[175px] lg:mx-auto lg:gap-[43px]"
          : "lg:h-[580px] justify-center items-center gap-[100px]"
      }`}>
      {isMobile || !isBlock || onLeft ? (
        <LeftMedia isBlock={isBlock} url={imageURL} />
      ) : (
        <></>
      )}

      <div
        className={`flex flex-col items-center text-center text-gray-150 px-[30px] py-2 gap-4 lg:p-0 lg:gap-5 leading-normal ${
          !isMobile && isBlock && "text-start w-[410px] lg:w-[540px]"
        }`}>
        {!isBlock ? (
          <>
            <h1 className="lg:text-purple text-[30px] lg:text-7xl font-bold lg:tracking-[-1.44px]">
              {title}
            </h1>
            <p className="leading-[30px] lg:text-2xl">{desc}</p>
            {!!link && (
              <Link
                href={link}
                className="flex justify-center items-center text-white text-[21px] font-bold leading-normal gap-2.5 bg-purple hover:bg-green py-2.5 px-[30px] rounded-[30px]">
                {link_text}
                <Image
                  src={VideoPlayer}
                  alt="playbutton"
                  width={24}
                  height={24}
                />
              </Link>
            )}
          </>
        ) : (
          <>
            <h6 className={`text-[30px] lg:text-[40px] font-bold`}>{title}</h6>
            <p className={`font-light leading-6 lg:text-xl lg:leading-[30px]`}>
              {desc}
            </p>
          </>
        )}
      </div>

      {!isMobile && isBlock && !onLeft ? <RightMedia url={imageURL} /> : <></>}
    </section>
  );
};

export default Block;

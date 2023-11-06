import Image from "next/image";
import { useTranslation } from "next-i18next";

import { COMMON } from "@/utils/constants";

const Freesim: React.FC<DescComponent & { column?: boolean }> = ({
  title,
  desc,
  image,
  column,
}) => {
  const { t } = useTranslation(COMMON);
  const { url: imageURL } = image.data.attributes;

  return (
    <section className="flex flex-col items-center max-w-[1440px] gap-8 pt-8 px-2 mx-auto">
      <h4 className="text-[30px] lg:text-[40px] font-bold">
        <span className="text-purple">myFirst</span>
        <span className="text-green"> {t("freesim")}</span>
      </h4>
      {column ? (
        <Image
          className="sm:w-[36%]"
          src={imageURL}
          alt={imageURL}
          width={500}
          height={500}
        />
      ) : (
        <></>
      )}
      <div className="flex flex-col max-w-[1100px] sm:flex-row-reverse items-center justify-center">
        {!column && (
          <Image
            className="sm:w-[36%]"
            src={imageURL}
            alt={imageURL}
            width={500}
            height={500}
          />
        )}
        <div
          className={`underline-parent flex flex-col text-center gap-4 py-2 px-[22px] ${
            !column && "sm:w-[64%] sm:text-start"
          }`}>
          <h6 className="text-[30px] lg:text-[40px] font-bold">{title}</h6>
          <p
            className="lg:text-xl leading-6 lg:leading-[30px] font-light"
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        </div>
      </div>
    </section>
  );
};

export default Freesim;

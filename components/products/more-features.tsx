import { useTranslation } from "next-i18next";
import Image from "next/image";

import { COMMON } from "@/utils/constants";

interface Props {
  features: DescComponent[];
}

const Feature: React.FC<DescComponent> = ({ title, desc, image }) => {
  const { url: imageURL } = image.data.attributes;

  return (
    <div className="w-[345px] lg:w-[464px] flex flex-col items-center gap-8">
      <div className="flex justify-center items-center">
        <Image src={imageURL} alt={imageURL} width={128} height={128} />
      </div>
      <div className="flex flex-col items-center gap-5 text-center">
        <h6 className="text-[28px] lg:text-4xl font-bold">{title}</h6>
        <p className="text-base lg:text-xl font-light leading-6 lg:leading-[30px]">{desc}</p>
      </div>
    </div>
  );
};

const MoreFeatures: React.FC<Props> = ({ features }) => {
  const { t } = useTranslation(COMMON);

  return (
    <section className="flex flex-col items-center mx-auto max-w-[1098px]">
      <h4 className="text-[30px] lg:text-[40px] font-bold my-8 lg:my-16">
        <span className="text-purple">{t("discover")}</span>
        <span className="text-green"> {t("more_features")}</span>
      </h4>
      <div className="flex justify-center items-center px-2 py-8">
        <div className="flex flex-1 flex-wrap justify-center items-start contents-start  gap-x-[97px] gap-y-[154px]">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreFeatures;

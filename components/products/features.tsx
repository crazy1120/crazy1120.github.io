import { useTranslation } from "next-i18next";

import { Block as FeatureBlock } from ".";
import { COMMON } from "@/utils/constants";

interface Props {
  first: string;
  features: DescComponent[];
}

const Features: React.FC<Props> = ({ first, features }) => {
  const { t } = useTranslation(COMMON);

  return (
    <section className="flex flex-col items-center gap-8">
      <h4 className="text-[30px] lg:text-[40px] font-bold mt-8 lg:mt-16">
        <span className="text-purple">{first}</span>
        <span className="text-green"> {t("features")}</span>
      </h4>
      {features.map((feature, index) => (
        <FeatureBlock
          key={index}
          {...feature}
          isBlock={true}
          onLeft={!!(index % 2)}
        />
      ))}
    </section>
  );
};

export default Features;

import { useTranslation } from "react-i18next";

import ExploreItem from "./exploreItem";
import { COMMON } from "@/utils/constants";

const AboutExplore: React.FC<{ explore: LinkDescComponent[] }> = ({
  explore,
}) => {
  const { t } = useTranslation(COMMON);

  return (
    <section className="max-w-[1440px] px-2.5 lg:px-3 lg:mx-auto mb-5 lg:mb-[70px]">
      <h5 className="text-center text-[40px] lg:text-6xl leading-[48px] lg:leading-[73px] text-purple font-bold mb-[50px]">
        {t("explore")}
      </h5>
      <ul className="flex flex-col sm:flex-row">
        {explore.map((item, ind) => (
          <ExploreItem key={ind} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default AboutExplore;

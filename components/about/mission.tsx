import { COMMON } from "@/utils/constants";
import { useTranslation } from "react-i18next";
import Markdown from "react-markdown";
const AboutMission: React.FC<{ mission: string }> = ({ mission }) => {
  const { t } = useTranslation(COMMON);

  return (
    <section className="flex flex-col items-center mt-[70px] mb-[100px] mx-5 lg:mx-auto">
      <h5 className="text-center text-[40px] lg:text-6xl leading-[48px] lg:leading-[73px] text-purple font-bold">
        {t("misson_vision")}
      </h5>
      <div className="text-start text-[21px] max-w-[800px] leading-7 mt-[50px]">
        <Markdown className="rich-text_mb-20">{mission}</Markdown>
      </div>
    </section>
  );
};

export default AboutMission;

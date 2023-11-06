import { useTranslation } from "next-i18next";
import Markdown from "react-markdown";

import { COMMON } from "@/utils/constants";

interface Props {
  specs: string;
  heading: string;
}

const TechSpecs: React.FC<Props> = ({ specs, heading }) => {
  const { t } = useTranslation(COMMON);

  return (
    <section className="max-w-[1140px] flex flex-col sm:flex-row items-start sm:justify-start text-black my-12 mx-[30px] lg:mx-auto sm:gap-[166px]">
      <h6 className="text-xl sm:text-2xl sm:w-[20%] text-end font-bold mb-5">
        {t(heading)}
      </h6>
      <Markdown className="items-start text-sm leading-6">{specs}</Markdown>
    </section>
  );
};

export default TechSpecs;

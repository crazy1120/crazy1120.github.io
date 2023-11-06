import { COMMON } from "@/utils/constants";
import { useTranslation } from "react-i18next";
import Markdown from "react-markdown";

const LocateColumnBlock: React.FC<{ title: string; data: string }> = ({
  title,
  data,
}) => {
  const { t } = useTranslation(COMMON);

  return (
    <div className="w-full flex flex-wrap justify-between sm:w-1/2 mb-10">
      <h4 className="text-[30px] w-full leading-9 font-bold mb-[30px]">
        {t(title)}
      </h4>
      <Markdown className="text-[17px]">{data}</Markdown>
    </div>
  );
};

export default LocateColumnBlock;

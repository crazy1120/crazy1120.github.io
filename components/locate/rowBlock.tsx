import { useTranslation } from "next-i18next";

import RowBlockItem from "./rowBlockItem";
import { COMMON } from "@/utils/constants";

const LocateRowBlock: React.FC<{
  title: string;
  data: { title: string; contents: string }[];
}> = ({ title, data }) => {
  const { t } = useTranslation(COMMON);

  return (
    <div className="w-full flex flex-wrap justify-between sm:w-full">
      <h4 className="text-[30px] w-full leading-9 font-bold mb-[30px]">
        {t(title)}
      </h4>
      {data.map((rec, ind) => (
        <RowBlockItem key={ind} {...rec} />
      ))}
    </div>
  );
};

export default LocateRowBlock;

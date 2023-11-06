import { useTranslation } from "react-i18next";
import Enquiry from "./enquiry";
import { COMMON } from "@/utils/constants";

const Enquiries: React.FC<{ tech: string; general: string }> = ({
  tech,
  general,
}) => {
  const { t } = useTranslation(COMMON);

  return (
    <section className="flex flex-col text-gray-150 max-w-[1140px] mt-[50px] mb-20 lg:mt-[105px] lg:mb-[100px] mx-5 lg:mx-auto">
      <Enquiry title={t("tech_enquiry")} data={tech} />
      <Enquiry title={t("general_enquiry")} data={general} />
    </section>
  );
};

export default Enquiries;

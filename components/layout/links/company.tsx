import { useTranslation } from "next-i18next";
import Link from "next/link";
import { LinksProps } from ".";
import { NAVBAR } from "@/utils/constants";

const CompanyLinks: React.FC<LinksProps> = ({ prefix }) => {
  const { t } = useTranslation(NAVBAR);

  return (
    <ul className={`${prefix}-submenu`}>
      <li>
        <Link href={"/about"}>{t("about")}</Link>
      </li>
      <li>
        <Link href={"/contact"}>{t("contact")}</Link>
      </li>
      <li>
        <Link href={"/locate-us"}>{t("locate")}</Link>
      </li>
      <li>
        <Link href={"/news"}>{t("news")}</Link>
      </li>
      <li>
        <Link href={"/privacy-policy"}>{t("privacy_policy")}</Link>
      </li>
      <li>
        <Link href={"/archive"}>{t("archive")}</Link>
      </li>
    </ul>
  );
};

export default CompanyLinks;

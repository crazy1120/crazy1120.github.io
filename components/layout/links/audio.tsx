import Link from "next/link";
import { LinksProps } from ".";
import { useTranslation } from "next-i18next";
import { NAVBAR } from "@/utils/constants";

const Lite = () => {
  const { t } = useTranslation(NAVBAR);

  return (
    <li>
      <Link href={"/myfirst-headphones-bc-wireless-lite"}>
        {t("myfirst_wireless_lite")}
      </Link>
    </li>
  );
};

const AudioLinks: React.FC<LinksProps> = ({ prefix }) => {
  const { t } = useTranslation(NAVBAR);

  return (
    <ul className={`${prefix}-submenu`}>
      <li>
        <Link href={"/myfirst-carebuds"}>{t("myfirst_carebuds")}</Link>
      </li>
      {prefix === "navbar" && <Lite />}
      <li>
        <Link href={"/myfirst-headphones-bc-wireless"}>
          {t("myfirst_wireless")}
        </Link>
      </li>
      {prefix === "footer" && <Lite />}
    </ul>
  );
};

export default AudioLinks;

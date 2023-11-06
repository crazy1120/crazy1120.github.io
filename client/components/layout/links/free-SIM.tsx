import { useTranslation } from "next-i18next";
import Link from "next/link";
import { FreeSIMLink } from "./subscription";
import { LinksProps } from ".";
import { NAVBAR } from "@/utils/constants";

const FreeSIMLinks: React.FC<LinksProps> = ({ prefix }) => {
  const { t } = useTranslation(NAVBAR);

  return (
    <ul className={`${prefix}-submenu`}>
      <FreeSIMLink />
      <li>
        <Link href={"/freesim-tw"}>{t("freesim_tw")}</Link>
      </li>
      <li>
        <Link href={"https://freesim.myfirst.tech"}>
          {t("activate_new_card")}
        </Link>
      </li>
      <li>
        <Link href={"https://billing.stripe.com/p/login/6oE8ztgW65j73aEeUU"}>
          {t("freesim_customer_portal")}
        </Link>
      </li>
    </ul>
  );
};

export default FreeSIMLinks;

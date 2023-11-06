import { useTranslation } from "next-i18next";
import Link from "next/link";

import { LinksProps } from ".";
import { NAVBAR } from "@/utils/constants";

const SupportLinks: React.FC<LinksProps> = ({ prefix }) => {
  const { t } = useTranslation(NAVBAR);

  return (
    <ul className={`${prefix}-submenu`}>
      <li>
        <Link href={"https://myfirsttech.zendesk.com/"}>{t("help_desk")}</Link>
      </li>
      <li>
        <Link
          href={
            "https://store.myfirst.tech/pages/exchange-return-refund-policy"
          }>
          {t("return_refund_policy")}
        </Link>
      </li>
      <li>
        <Link href={"https://store.myfirst.tech/pages/shipping-tax"}>
          {t("shipping_tax")}
        </Link>
      </li>
      <li>
        <Link href={"https://store.myfirst.tech/pages/warranty"}>
          {t("warranty")}
        </Link>
      </li>
      <li>
        <Link href={"/certificate"}>{t("certificate")}</Link>
      </li>
      <li>
        <Link href={"/user-manual"}>{t("user_manual")}</Link>
      </li>
    </ul>
  );
};

export default SupportLinks;

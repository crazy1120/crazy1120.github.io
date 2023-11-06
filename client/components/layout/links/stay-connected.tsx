import Link from "next/link";
import { BringYourOwnFoneLink, StayConnectedLink } from "./subscription";
import { LinksProps } from ".";
import { useTranslation } from "react-i18next";
import { NAVBAR } from "@/utils/constants";

const StayConnectedLinks: React.FC<LinksProps> = ({ prefix }) => {
  const { t } = useTranslation(NAVBAR);

  return (
    <ul className={`${prefix}-submenu`}>
      <StayConnectedLink />
      <BringYourOwnFoneLink />
      <li>
        <Link href={"/stay-connected/renew-and-upgrade"}>
          {t("renew_and_upgrade")}
        </Link>
      </li>
      <li>
        <Link href={"/customer-portal"}>{t("customer_portal")}</Link>
      </li>
    </ul>
  );
};

export default StayConnectedLinks;

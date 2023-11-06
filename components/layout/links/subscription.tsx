import { useTranslation } from "next-i18next";
import Link from "next/link";

import { LinksProps } from ".";
import { NAVBAR } from "@/utils/constants";

export const StayConnectedLink = () => {
  const { t } = useTranslation(NAVBAR);

  return (
    <li>
      <Link href={"/stay-connected"}>{t("stay_connected")}</Link>
    </li>
  );
};

export const FreeSIMLink = () => {
  const { t } = useTranslation(NAVBAR);

  return (
    <li>
      <Link href={"/freesim"}>{t("freesim")}</Link>
    </li>
  );
};

export const BringYourOwnFoneLink = () => {
  const { t } = useTranslation(NAVBAR);

  return (
    <li>
      <Link href={"/stay-connected/byof"}>{t("stay_connected_byof")}</Link>
    </li>
  );
};

const SubscriptionLinks: React.FC<LinksProps> = ({ prefix }) => {
  return (
    <ul className={`${prefix}-submenu`}>
      <StayConnectedLink />
      <FreeSIMLink />
      <BringYourOwnFoneLink />
    </ul>
  );
};

export default SubscriptionLinks;

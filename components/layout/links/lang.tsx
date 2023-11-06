import Link from "next/link";
import { LinksProps } from ".";
import { useTranslation } from "next-i18next";
import { NAVBAR } from "@/utils/constants";

const SubscriptionLinks: React.FC<LinksProps> = ({ prefix }) => {
  const { t } = useTranslation(NAVBAR);

  return (
    <ul className={`${prefix}-submenu`}>
      <li>
        <Link href={"/"} locale={"en"}>
          English
        </Link>
      </li>
      <li>
        <Link href={"/"} locale={"tw"}>
          汉语(台湾)
        </Link>
      </li>
      <li>
        <Link href={"/"} locale={"es"}>
          Espanol
        </Link>
      </li>
    </ul>
  );
};

export default SubscriptionLinks;

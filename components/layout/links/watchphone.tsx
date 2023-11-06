import { useTranslation } from "next-i18next";
import Link from "next/link";
import { LinksProps } from ".";
import { NAVBAR } from "@/utils/constants";

const S3 = () => {
  const { t } = useTranslation(NAVBAR);

  return (
    <li>
      <Link href={"/myfirst-fone-s3"}>{t("myfirst_fone_s3")}</Link>
    </li>
  );
};

const WatchPhoneLinks: React.FC<LinksProps> = ({ prefix }) => {
  const { t } = useTranslation(NAVBAR);

  return (
    <ul className={`${prefix}-submenu`}>
      {prefix === "navbar" && <S3 />}
      <li>
        <Link href={"/myfirst-fone-r1s"}>{t("myfirst_fone_r1s")}</Link>
      </li>
      <li>
        <Link href={"/myfirst-fone-r1"}>{t("myfirst_fone_r1")}</Link>
      </li>
      {prefix === "footer" && <S3 />}
      {prefix === "navbar" && (
        <li>
          <Link href={"/myfirst-fone-s2"}>{t("myfirst_fone_s2")}</Link>
        </li>
      )}
      <li>
        <Link href={"/myfirst-fone-d3s"}>{t("myfirst_fone_d3s")}</Link>
      </li>
    </ul>
  );
};

export default WatchPhoneLinks;

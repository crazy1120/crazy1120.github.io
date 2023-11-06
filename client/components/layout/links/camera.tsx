import Link from "next/link";
import { LinksProps } from ".";
import { useTranslation } from "next-i18next";
import { NAVBAR } from "@/utils/constants";

const CameraLinks: React.FC<LinksProps> = ({ prefix }) => {
  const { t } = useTranslation(NAVBAR);

  return (
    <ul className={`${prefix}-submenu`}>
      <li>
        <Link href={"/myfirst-camera-insta-wi"}>
          {t("myfirst_camera_insta_wi")}
        </Link>
      </li>
      <li>
        <Link href={"/myfirst-camera-insta-2"}>
          {t("myfirst_camera_insta_2")}
        </Link>
      </li>
      <li>
        <Link href={"/myfirst-camera-10"}>{t("myfirst_camera_10")}</Link>
      </li>
      <li>
        <Link href={"/myfirst-camera-3"}>{t("myfirst_camera_3")}</Link>
      </li>
      <li>
        <Link href={"/myfirst-camera-2"}>
          {prefix === "navbar"
            ? t("myfirst_camera_2_navbar")
            : t("myfirst_camera_2")}
        </Link>
      </li>
    </ul>
  );
};

export default CameraLinks;

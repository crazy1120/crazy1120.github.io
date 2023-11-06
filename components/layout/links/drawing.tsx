import { useTranslation } from "next-i18next";
import Link from "next/link";

import { LinksProps } from ".";
import { NAVBAR } from "@/utils/constants";

const BookBoard = () => {
  const { t } = useTranslation(NAVBAR);

  return (
    <>
      <li>
        <Link href={"/myfirst-sketch-book"}>{t("myfirst_sketch_book")}</Link>
      </li>
      <li>
        <Link href={"/myfirst-sketch-board"}>{t("myfirst_sketch_board")}</Link>
      </li>
    </>
  );
};

const DrawingLinks: React.FC<LinksProps> = ({ prefix }) => {
  const { t } = useTranslation(NAVBAR);

  return (
    <ul className={`${prefix}-submenu`}>
      <li>
        <Link href={"/myfirst-3dpen-make"}>{t("myfirst_3dpen_make")}</Link>
      </li>
      {prefix === "footer" && <BookBoard />}
      <li>
        <Link href={"/myfirst-sketch-pro-neo"}>
          {t("myfirst_sketch_pro_neo")}
        </Link>
      </li>
      <li>
        <Link href={"/myfirst-sketch-pro"}>{t("myfirst_sketch_pro")}</Link>
      </li>
      {prefix === "navbar" && (
        <li>
          <Link href={"/myfirst-sketch-3"}>{t("myfirst_sketch_3")}</Link>
        </li>
      )}
      <li>
        <Link href={"/myfirst-sketch-ii"}>{t("myfirst_sketch_ii")}</Link>
      </li>
      {prefix === "navbar" && <BookBoard />}
    </ul>
  );
};

export default DrawingLinks;

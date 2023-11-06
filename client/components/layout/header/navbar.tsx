import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";

import NavbarSubmenu from "./navbar-submenu";
import * as Links from "../links";
import { NAVBAR } from "@/utils/constants";

const Navbar: React.FC<{
  open: boolean;
  isActive: boolean[];
  updateIsActive: (index: number) => void;
}> = ({ open, isActive, updateIsActive }) => {
  const { type }: { type: string } = useSelector(
    (state: { device: { type: string } }) => state.device
  );
  const { t } = useTranslation(NAVBAR);

  return (
    <ul
      id="commonNavbar"
      className={`flex items-stretch text-base text-gray-100 leading-5 left-0 z-50 gap-x-10 ${
        type !== "laptop"
          ? `${
              open ? "active" : "hidden"
            } absolute flex-col top-[80px] pt-5 w-full bg-white mobile-navbar`
          : "relative flex-row laptop-navbar"
      }`}>
      <NavbarSubmenu
        title={t("audio")}
        comp={<Links.Audio prefix={"navbar"} />}
        isActive={isActive[0]}
        onClick={() => updateIsActive(0)}
      />
      <NavbarSubmenu
        title={t("camera")}
        comp={<Links.Camera prefix={"navbar"} />}
        isActive={isActive[1]}
        onClick={() => updateIsActive(1)}
      />
      <NavbarSubmenu
        title={t("drawing")}
        comp={<Links.Drawing prefix={"navbar"} />}
        isActive={isActive[2]}
        onClick={() => updateIsActive(2)}
      />
      <NavbarSubmenu
        title={t("watchphone")}
        comp={<Links.WatchPhone prefix={"navbar"} />}
        isActive={isActive[3]}
        onClick={() => updateIsActive(3)}
      />
      <NavbarSubmenu
        title={t("subscription")}
        comp={<Links.Subscription prefix={"navbar"} />}
        isActive={isActive[4]}
        onClick={() => updateIsActive(4)}
      />
      <li>
        <Link href={"/circle"}>{t("circle")}</Link>
      </li>

      <li className={`${type !== "laptop" && "p-5"}`}>
        <Link
          href={"https://store.myfirst.tech"}
          target="_blank"
          className={`bg-purple text-white flex justify-center hover:bg-green px-5 rounded-[20px] ${
            type !== "laptop" ? "py-2.5 w-full" : "py-1.5"
          }`}>
          {t("store")}
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;

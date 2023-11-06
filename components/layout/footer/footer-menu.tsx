import { useTranslation } from "next-i18next";

import * as Links from "../links";
import { NAVBAR } from "@/utils/constants";

interface FooterSubmenuProps {
  title: string;
  comp: React.ReactNode;
}

const FooterSubmenu: React.FC<FooterSubmenuProps> = ({ title, comp }) => {
  return (
    <li className="basis-1/2 sm:basis-1/4 mt-10">
      <h6 className={"font-bold leading-[19px] mb-4"}>{title}</h6>
      {comp}
    </li>
  );
};

const FooterMenu: React.FC = () => {
  const { t } = useTranslation(NAVBAR);

  return (
    <ul className="flex flex-wrap pt-[10px] pb-20 px-[30px] lg:px-0 lg:pt-10 border-b-[1px] border-white border-opacity-50">
      <FooterSubmenu
        title={t("audio")}
        comp={<Links.Audio prefix={"footer"} />}
      />
      <FooterSubmenu
        title={t("camera")}
        comp={<Links.Camera prefix={"footer"} />}
      />
      <FooterSubmenu
        title={t("drawing")}
        comp={<Links.Drawing prefix={"footer"} />}
      />
      <FooterSubmenu
        title={t("watchphone")}
        comp={<Links.WatchPhone prefix={"footer"} />}
      />
      <FooterSubmenu
        title={t("stay_connected")}
        comp={<Links.StayConnected prefix={"footer"} />}
      />
      <FooterSubmenu
        title={`myFirst ${t("freesim")}`}
        comp={<Links.MyFirstFreeSIM prefix={"footer"} />}
      />
      <FooterSubmenu
        title={t("support")}
        comp={<Links.Support prefix={"footer"} />}
      />
      <FooterSubmenu
        title={t("company")}
        comp={<Links.Company prefix={"footer"} />}
      />
    </ul>
  );
};

export default FooterMenu;

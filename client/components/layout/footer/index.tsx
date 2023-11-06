import { useTranslation } from "next-i18next";

import FooterMenu from "./footer-menu";
import SocialLinksBar from "./social-links-bar";
import { NAVBAR } from "@/utils/constants";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const { t } = useTranslation(NAVBAR);

  return (
    <footer className="bg-purple text-white">
      <section className="max-w-[1140px] mx-auto">
        <FooterMenu />
        <ul className="flex flex-col items-start sm:flex-row sm:justify-between px-[30px] lg:px-0 py-2.5">
          <li className="my-2.5">
            <SocialLinksBar />
          </li>
          <li className="my-2.5">
            <p className="text-xs leading-5">
              &copy; myFirst 2018-{year} | {t("all_rights_reserved")}
            </p>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;

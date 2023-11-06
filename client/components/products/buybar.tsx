import classNames from "classnames";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { COMMON } from "@/utils/constants";
import { useSticky } from "@/utils/hooks";

const BuyBar: React.FC<ProductInfo> = ({ name, buy_link }) => {
  const { sticky, stickyRef } = useSticky();
  const { t } = useTranslation(COMMON);
  return (
    <>
      <div
        ref={stickyRef}
        className={classNames(
          "justify-around items-center text-white font-bold shrink-0 bg-purple w-full h-[60px]",
          {
            "fixed flex top-0 z-10": sticky,
            hidden: !sticky,
          }
        )}>
        <p className="text-[17px]">myFirst {name}</p>
        <Link
          href={buy_link}
          className="text-sm py-1.5 px-5 gap-2.5 shrink-0 bg-green rounded-[50px]">
          {t("buy")}
        </Link>
      </div>
      {sticky && <div className={`h-${stickyRef.current?.clientHeight}px`} />}
    </>
  );
};

export default BuyBar;

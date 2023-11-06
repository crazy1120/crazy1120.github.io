import Image from "next/image";
import { useTranslation } from "next-i18next";

import { COMMON } from "@/utils/constants";
import Link from "next/link";

const Products: React.FC<{ products: DescComponent[] }> = ({ products }) => {
  const { t } = useTranslation(COMMON);

  return (
    <section className="max-w-[1160px] mx-5 lg:mx-auto mt-5 lg:mt-[50px] mb-[100px]">
      <h1 className="lg:mb-[50px] text-start text-gray-150 text-[30px] font-bold leading-9">
        {t("discontinued_products")}
      </h1>
      <ul className="flex flex-wrap justify-start">
        {products.map((product, ind) => {
          const { url: imageURL } = product.image.data.attributes;

          return (
            <li
              key={ind}
              className="flex flex-col items-center w-1/2 sm:w-1/3 lg:w-1/4 mt-[50px] px-2.5">
              <Link href={product.desc}>
                <Image
                  src={imageURL}
                  alt={product.title}
                  width={1920}
                  height={1080}
                />
                <h3 className="text-purple text-center text-[17px] leading-[21px] lg:text-xl lg:leading-6 font-bold mt-2.5">
                  {product.title}
                </h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Products;

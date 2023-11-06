import { useSelector } from "react-redux";

import Product from "./product";

interface ProductsProps {
  products: LinkDescComponent[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  const { type }: { type: string } = useSelector(
    (state: { device: { type: string } }) => state.device
  );

  return (
    <section className="px-2.5 lg:px-3 m-2.5 lg:m-3">
      <div className={`flex justify-center ${type === "mobile" && "flex-col"}`}>
        <Product info={products[0]} left={true} />
        <Product info={products[1]} />
      </div>
      <div className={`flex justify-center ${type === "mobile" && "flex-col"}`}>
        <Product info={products[2]} left={true} />
        <Product info={products[3]} />
      </div>
    </section>
  );
};

export default Products;

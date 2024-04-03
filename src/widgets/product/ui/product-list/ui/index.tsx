import { Product } from "shared/model";
import { ProductCard } from "../../product-card";

interface Props {
  products: Array<Product>;
}

export const ProductsList = ({ products }: Props) => {
  return (
    <div>
      <div className="grid grid-cols-[repeat(auto-fit,_40%)] m-auto p-3 justify-center gap-5">
        {products.map((el) => (
          <ProductCard key={el.id} product={el} />
        ))}
        {products.length === 1 && <div className="grow" />}
      </div>
    </div>
  );
};

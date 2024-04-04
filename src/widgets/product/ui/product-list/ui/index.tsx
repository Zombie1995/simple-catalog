import { Product } from "shared/model";
import { ProductCard } from "../../product-card";

interface Props {
  products: Array<Product>;
}

export const ProductsList = ({ products }: Props) => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-5 mx-auto p-4">
      {products.map((el) => (
        <ProductCard key={el.id} product={el} />
      ))}
    </div>
  );
};

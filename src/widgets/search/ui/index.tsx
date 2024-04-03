import { Product } from "shared/model";

interface Props {
  products: Array<Product>;
  setProducts: any;
}

export const Search = ({ products, setProducts }: Props) => {
  return (
    <input
      name="search"
      className="w-11/12 p-2 rounded-md shadow-[inset_0_0_4px_0_rgb(0_0_0_/_0.12)]"
      onChange={(e) => {
        setProducts(
          products.filter((p) =>
            p.title.toLowerCase().includes(e.target.value.toLowerCase())
          )
        );
      }}
    />
  );
};

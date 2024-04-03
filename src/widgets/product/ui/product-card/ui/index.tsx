import { AddToCartButton } from "features/cart";
import { Product } from "shared/model";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <div className="flex flex-col w-full min-h-[20svh] rounded-md p-2 shadow-md bg-white">
      <p className="text-sm">{product.title}</p>
      <div className="grow" />
      <div className="h-[4px]" />
      <p className="text-[14px] text-right">{product.price}$</p>
      <div className="h-[4px]" />
      <AddToCartButton product={product} />
    </div>
  );
};

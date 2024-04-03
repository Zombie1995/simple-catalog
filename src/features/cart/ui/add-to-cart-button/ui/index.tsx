import { cartStore } from "entities/cart/model";
import { Product } from "shared/model";

interface Props {
  product: Product;
}

export const AddToCartButton = ({ product }: Props) => {
  return (
    <button
      className="bg-[#38bbf6] min-h-[30px] rounded-sm text-[#ffffff] transition-colors active:bg-[#7bd1f9]"
      onClick={() => {
        cartStore.addProduct(product);
      }}
    >
      Добавить
    </button>
  );
};

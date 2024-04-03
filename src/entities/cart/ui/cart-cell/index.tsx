import { CartCell } from "entities/cart/model";
import { DecrementAmount, IncrementAmount } from "features/cart";

interface Props extends CartCell {}

export const CartCard = ({ product, amount }: Props) => {
  return (
    <div>
      <div className="flex items-center bg-white p-3 rounded-md shadow-md">
        <p>{product.title}</p>
        <div className="grow min-w-4" />
        <p>{product.price}</p>
      </div>
      <div className="min-h-2" />
      <div className="flex">
        <div className="grow" />
        <div className="flex items-center gap-2">
          <DecrementAmount id={product.id} />
          <p className="text-[16px] text-center font-medium min-w-5">
            {amount}
          </p>
          <IncrementAmount id={product.id} />
        </div>
      </div>
    </div>
  );
};

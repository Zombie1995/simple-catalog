import { CartCard } from "entities/cart";
import { cartStore } from "entities/cart/model";
import { observer } from "mobx-react";
import { useEffect } from "react";

const Cart = observer(() => {
  useEffect(() => {
    cartStore.fetchCart();
  }, []);

  return (
    <div>
      <p className="min-h-[60px] h-[60px] flex justify-center items-center text-[24px]">
        Корзина
      </p>
      <div className="flex flex-col m-4 gap-4">
        {cartStore.cart.map((cartCell) => (
          <CartCard
            key={cartCell.product.id}
            product={cartCell.product}
            amount={cartCell.amount}
          />
        ))}
      </div>
    </div>
  );
});

export default Cart;

import { cartStore } from "entities/cart/model";
import add from "shared/assets/add.svg";

interface Props {
  id: number;
}

export const IncrementAmount = ({ id }: Props) => {
  return (
    <button
      className="size-8 flex items-center justify-center bg-white shadow-md rounded-full font-bold active:bg-[#eaeaea]"
      onClick={() => {
        cartStore.incrementAmount(id);
      }}
    >
      <img className="size-1/2" src={add} />
    </button>
  );
};

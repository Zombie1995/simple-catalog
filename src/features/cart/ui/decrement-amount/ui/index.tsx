import { cartStore } from "entities/cart/model";
import remove from "shared/assets/remove.svg";

interface Props {
  id: number;
}

export const DecrementAmount = ({ id }: Props) => {
  return (
    <button
      className="size-8 flex items-center justify-center bg-white shadow-md rounded-full font-bold active:bg-[#eaeaea]"
      onClick={() => {
        cartStore.decrementAmount(id);
      }}
    >
      <img className="size-1/2" src={remove} />
    </button>
  );
};

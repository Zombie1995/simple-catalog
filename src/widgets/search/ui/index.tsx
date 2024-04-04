import { useEffect, useRef, useState } from "react";
import { Product } from "shared/model";

interface Props {
  products: Array<Product>;
  setProducts: any;
}

export const Search = ({ products, setProducts }: Props) => {
  const [bgWhite, setBgWhite] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (searchRef.current) {
        const { top } = searchRef.current.getBoundingClientRect();
        if (top <= 1) {
          setBgWhite(true);
        } else {
          setBgWhite(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={searchRef}
      className={`${
        bgWhite ? "bg-white shadow-sm" : ""
      } sticky top-0 flex items-center justify-center min-h-[72px]`}
    >
      <input
        name="search"
        className="h-min w-7/12 p-2 rounded-md shadow-[inset_0_0_4px_0_rgb(0_0_0_/_0.12)]"
        onChange={(e) => {
          setProducts(
            products.filter((p) =>
              p.title
                .toLowerCase()
                .includes(e.target.value.toLowerCase().trim())
            )
          );
        }}
      />
    </div>
  );
};

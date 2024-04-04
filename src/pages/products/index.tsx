import { cartStore } from "entities/cart/model";
import { productStore } from "entities/product/model";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Product } from "shared/model";
import { ProductsList } from "widgets/product";
import { Search } from "widgets/search";

const Products = observer(() => {
  const [products, setProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    cartStore.fetchCart();
    productStore.fetchProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <div>
      <p className="min-h-[60px] h-[60px] flex justify-center items-center text-[24px]">
        Товары
      </p>
      <div className="h-[8px]" />
      <Search products={productStore.products} setProducts={setProducts} />
      <div>
        {productStore.loading ? (
          <p className="text-center">Товары загружаются</p>
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </div>
  );
});

export default Products;

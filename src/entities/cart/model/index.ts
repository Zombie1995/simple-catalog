import { makeAutoObservable } from "mobx";
import { Product } from "shared/model";

export type CartCell = {
  product: Product;
  amount: number;
};

class CartStore {
  cart: Array<CartCell> = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchCart() {
    try {
      const localStorageData = localStorage.getItem("cart");
      if (localStorageData) {
        this.cart = JSON.parse(localStorageData);
      }
    } catch (error) {
      console.error("Error fetching cart from local storage:", error);
    }
  }

  addProduct(product: Product) {
    const existingProductIndex = this.cart.findIndex(
      (p) => p.product.id === product.id
    );
    if (existingProductIndex !== -1) {
      this.cart[existingProductIndex].amount++;
    } else {
      this.cart.push({ product, amount: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  incrementAmount(id: number) {
    const product = this.cart.find((p) => p.product.id === id);
    if (product) {
      product.amount++;
      localStorage.setItem("cart", JSON.stringify(this.cart));
    }
  }

  decrementAmount(id: number) {
    const index = this.cart.findIndex((p) => p.product.id === id);
    if (index !== -1) {
      if (this.cart[index].amount > 1) {
        this.cart[index].amount--;
      } else {
        this.cart.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(this.cart));
    }
  }
}

export const cartStore = new CartStore();

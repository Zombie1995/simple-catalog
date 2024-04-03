import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import { Product } from "shared/model";

export class ProductStore {
  loading = false;
  products: Array<Product> = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchProducts() {
    try {
      runInAction(() => {
        this.loading = true;
      });
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = response.data;
      runInAction(() => {
        this.products = data;
      });
      return this.products;
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
    return this.products;
  }
}

export const productStore = new ProductStore();

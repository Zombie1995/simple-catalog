import { createBrowserRouter } from "react-router-dom";
import Cart from "./cart";
import Products from "./products";

export const router = createBrowserRouter([
  { path: "/", element: <Products /> },
  { path: "/cart", element: <Cart /> },
]);

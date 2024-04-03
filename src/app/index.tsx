import { router } from "pages";
import { RouterProvider } from "react-router-dom";
import { Menu } from "widgets/menu";
import "./index.css";

const App = () => {
  return (
    <div>
      <div className="fixed right-3 top-3">
        <Menu />
      </div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

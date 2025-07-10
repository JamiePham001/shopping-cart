import App from "./App";
import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";
import { ShoppingCart } from "./pages/ShoppingCart";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "products/:name",
        element: <ProductPage />,
      },
      {
        path: "cart",
        element: <ShoppingCart />,
        children: [
          {
            path: "products/:name",
            element: <ProductPage />,
          },
        ],
      },
    ],
  },
  {},
];

export default routes;

import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import { Error404 } from "../components/pages/Error404";
import App from "../App";
import { Adidas } from "../components/pages/Adidas";
import { Puma } from "../components/pages/Puma";
import { Abibas } from "../components/pages/Abibas";
import { Prices } from "../components/pages/Prices";
import { Model } from "../components/Model";
import { ProtectedPage } from "../components/pages/ProtectedPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { Login } from "../components/pages/Login";

export const PATH = {
  ADIDAS: "/adidas",
  PUMA: "/puma",
  ABIBAS: "/abibas",
  BOOTS_PARAMS: "/:model/:id",
  ERROR404: "/error404",
  PRICES: "/prices",
  PROTECTED_PAGE: "/protectedPage",
  LOGIN: "/login",
} as const;

const publicRoutes: RouteObject[] = [
  {
    path: "",
    element: <Navigate to={PATH.ADIDAS} />,
  },
  {
    path: PATH.ADIDAS,
    element: <Adidas />,
  },
  {
    path: PATH.PUMA,
    element: <Puma />,
  },
  {
    path: PATH.ABIBAS,
    element: <Abibas />,
  },
  {
    path: PATH.PRICES,
    element: <Prices />,
  },
  {
    path: PATH.BOOTS_PARAMS,
    element: <Model />,
  },
  {
    path: PATH.ERROR404,
    element: <Error404 />,
  },
  {
    path: PATH.LOGIN,
    element: <Login />,
  },
];

const privateRoutes: RouteObject[] = [
  {
    path: PATH.PROTECTED_PAGE,
    element: <ProtectedPage />,
  },
];

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <Navigate to={PATH.ERROR404} />,
    children: [
      ...publicRoutes,
      {
        element: <ProtectedRoute />,
        children: privateRoutes,
      },
    ],
  },
]);

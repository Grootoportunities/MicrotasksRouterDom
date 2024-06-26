import { FC, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PATH } from "./router";

export const ProtectedRoute: FC = () => {
  const [pass, setPass] = useState(false);

  return pass ? <Outlet /> : <Navigate to={PATH.LOGIN} />;
};

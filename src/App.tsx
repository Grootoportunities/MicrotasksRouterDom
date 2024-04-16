import React from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { Adidas } from "./components/pages/Adidas";
import { Puma } from "./components/pages/Puma";
import { Abibas } from "./components/pages/Abibas";
import { Error404 } from "./components/pages/Error404";
import { S } from "./components/pages/_styles";
import { Model } from "./components/Model";
import { Prices } from "./components/pages/Prices";

const PATH = {
  ADIDAS: "/adidas",
  PUMA: "/puma",
  ABIBAS: "/abibas",
  BOOTS_PARAMS: "/:model/:id",
  ERROR404: "/error404",
  PRICES: "/prices",
} as const;

function App() {
  return (
    <div>
      <S.Header>
        <h1>HEADER</h1>
      </S.Header>
      <S.Body>
        <S.Nav>
          <S.NavWrapper>
            <NavLink to={PATH.ADIDAS}>ADIDAS</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATH.PUMA}>PUMA</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATH.ABIBAS}>ABIBAS</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATH.PRICES}>PRICES</NavLink>
          </S.NavWrapper>
        </S.Nav>
        <S.Content>
          <Routes>
            <Route path={""} element={<Navigate to={PATH.ADIDAS} />} />
            <Route path={PATH.ADIDAS} element={<Adidas />} />
            <Route path={PATH.PUMA} element={<Puma />} />
            <Route path={PATH.ABIBAS} element={<Abibas />} />
            <Route path={PATH.BOOTS_PARAMS} element={<Model />} />
            <Route path={PATH.PRICES} element={<Prices />} />
            <Route path={"/*"} element={<Error404 />} />
          </Routes>
        </S.Content>
      </S.Body>
      <S.Footer>abibas 2023</S.Footer>
    </div>
  );
}

export default App;

import React from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { Adidas, adidasArr } from "./components/pages/Adidas";
import { Puma, pumaArr } from "./components/pages/Puma";
import { Abibas, abibasArr } from "./components/pages/Abibas";
import { Error404 } from "./components/pages/Error404";
import { S } from "./components/pages/_styles";
import { Model } from "./components/Model";

const PATH = {
  ADIDAS: "/adidas",
  ADIDAS_PARAMS: "/adidas/:id",
  PUMA: "/puma",
  PUMA_PARAMS: "/puma/:id",
  ABIBAS: "/abibas",
  ABIBAS_PARAMS: "/abibas/:id",
  ERROR404: "/error404",
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
        </S.Nav>
        <S.Content>
          <Routes>
            <Route path={""} element={<Navigate to={PATH.ADIDAS} />} />
            <Route path={PATH.ADIDAS} element={<Adidas />} />
            <Route path={PATH.PUMA} element={<Puma />} />
            <Route path={PATH.ABIBAS} element={<Abibas />} />
            <Route
              path={PATH.ADIDAS_PARAMS}
              element={<Model boots={adidasArr} />}
            />
            <Route
              path={PATH.PUMA_PARAMS}
              element={<Model boots={pumaArr} />}
            />
            <Route
              path={PATH.ABIBAS_PARAMS}
              element={<Model boots={abibasArr} />}
            />
            <Route path={"/*"} element={<Error404 />} />
          </Routes>
        </S.Content>
      </S.Body>
      <S.Footer>abibas 2023</S.Footer>
    </div>
  );
}

export default App;

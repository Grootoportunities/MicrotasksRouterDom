import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { S } from "./components/pages/_styles";
import { PATH } from "./routes/router";
import styled from "styled-components";

function App() {
  const navigate = useNavigate();

  const navigateHandler = () => navigate(-1);

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
          <S.NavWrapper>
            <NavLink to={PATH.PROTECTED_PAGE}>PROTECTED PAGE</NavLink>
          </S.NavWrapper>
        </S.Nav>
        <S.Content>
          <HorizontalNavigation>
            <LinkLikeButton to={PATH.ADIDAS}>ГЛАВНАЯ СТРАНИЦА</LinkLikeButton>
            <ButtonLikeLink onClick={navigateHandler}>НАЗАД</ButtonLikeLink>
          </HorizontalNavigation>
          <Outlet />
        </S.Content>
      </S.Body>
      <S.Footer>abibas 2023</S.Footer>
    </div>
  );
}

export default App;

const HorizontalNavigation = styled.div`
  display: flex;
  justify-content: center;
`;

const LinkLikeButton = styled(NavLink)`
  height: 54px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonLikeLink = styled.button`
  margin-left: 5px;
  height: 55px;
  background-color: #ff00b7;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-size: 30px;
`;

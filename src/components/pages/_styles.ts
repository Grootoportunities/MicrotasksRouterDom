import styled from "styled-components";

const Header = styled.header`
  background-color: #000000;
  width: 100%;
  height: 100px;
  text-align: center;
  color: white;
`;

const Body = styled.body`
  display: flex;
`;

const Nav = styled.nav`
  background-color: white;
  min-height: 400px;
  width: 30%;
  color: #282c34;
  font-size: 30px;
`;

const Content = styled.div`
  background-color: #282c34;
  min-height: 400px;
  width: 70%;
  color: white;
  font-size: 30px;
`;

const Footer = styled.footer`
  background-color: #000000;
  width: 100%;
  height: 120px;
  text-align: center;
  color: white;
`;

const NavWrapper = styled.div`
  margin-left: 10px;
  font-size: 20px;

  & > a {
    text-decoration: none;
    color: #1e3786;
  }

  & > a.active {
    text-decoration: none;
    color: #03eaff;
  }

  & > a:hover {
    color: steelblue; /* Цвет ссылки */
  }
`;

const BootsImg = styled.img`
  width: 300px;
`;

const BootsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const BootHeader = styled.h2`
  display: flex;
  justify-content: center;
`;

const ModelWrapper = styled.div`
  margin: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

export const S = {
  NavWrapper,
  Header,
  Body,
  Nav,
  Content,
  Footer,
  BootsImg,
  BootsWrapper,
  BootHeader,
  ModelWrapper,
};

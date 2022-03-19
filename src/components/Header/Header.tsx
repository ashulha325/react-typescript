import React from "react";
import { StoreContext } from "../../utils/context";
import { ACTION_LOGIN } from "../../store/reducer";
import {
  HeaderInner,
  HeaderLink,
  HeaderLogo,
  HeaderNav,
  HeaderWrapper,
} from "./styles";
import Container from "../Container/Container";

const Header = () => {
  const { state, dispatch } = React.useContext(StoreContext);
  return (
    <HeaderWrapper>
      <Container>
        <HeaderInner>
          <HeaderLogo to={"/"}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.25596 15.7628L26.78 4.768C30.0968 2.6872 34.4 5.0796 34.4 9.0052V30.9948C34.4 34.92 30.0968 37.3128 26.78 35.232L9.25596 24.2372C6.13636 22.2796 6.13636 17.7204 9.25596 15.7628Z"
                fill="#4BB7FD"
              />
              <path
                d="M30.7438 15.7628L13.2199 4.768C9.90305 2.6872 5.59985 5.0796 5.59985 9.0052V30.9948C5.59985 34.92 9.90305 37.3128 13.2199 35.232L30.7438 24.2372C33.8634 22.2796 33.8634 17.7204 30.7438 15.7628Z"
                fill="#7B6EF6"
              />
            </svg>
          </HeaderLogo>
          <HeaderNav>
            <HeaderLink to="/dashboard">Dashboard</HeaderLink>
            <HeaderLink to="/suggest-me">Suggest Me</HeaderLink>
            <HeaderLink to="/login">Login</HeaderLink>
          </HeaderNav>
        </HeaderInner>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;

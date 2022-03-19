import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const HeaderWrapper = styled.header`
  padding: 16px 0;
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const HeaderLogo = styled(NavLink)`
  max-width: 150px;
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
`;

export const HeaderLink = styled(NavLink)`
  padding: 12px 16px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #a8aebf;
  &:not(:last-child) {
    margin-right: 16px;
  }
  &.active {
    color: #beb7fb;
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

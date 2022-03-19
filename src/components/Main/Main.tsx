import React from "react";
import { Tchildren } from "../../models/interfaces";
import { MainWrapper } from "./styles";
import Container from "../Container/Container";

const Main = ({ children }: Tchildren) => {
  return (
    <MainWrapper>
      <Container>{children}</Container>
    </MainWrapper>
  );
};

export default Main;

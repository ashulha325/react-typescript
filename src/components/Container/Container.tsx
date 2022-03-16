import React from "react";
import { ContainerWrapper } from "./styles";
import { Tchildren } from "../../models/interfaces";

const Container = ({ children }: Tchildren) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;

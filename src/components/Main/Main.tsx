import React from "react";
import { Tchildren } from "../../models/interfaces";
import { MainWrapper } from "./styles";

const Main = ({ children }: Tchildren) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default Main;

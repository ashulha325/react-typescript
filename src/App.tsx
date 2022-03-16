import React from "react";
import styled from "styled-components";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
const App: React.FC = () => {
  return (
    <AppWrapper>
      <Main>
        <Header></Header>
        {/*<p>2222</p>*/}
      </Main>
    </AppWrapper>
  );
};

export default App;

export const AppWrapper = styled.div``;

document.getElementsByTagName("body")[0].setAttribute("data-theme", "dark");

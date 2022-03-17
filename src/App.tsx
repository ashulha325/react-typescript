import React from "react";
import styled from "styled-components";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import { StoreContext } from "./utils/context";
import { reducer } from "./store/reducer";
import { initialState } from "./store/state";
const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <AppWrapper>
        <Main>
          <Header></Header>
        </Main>
      </AppWrapper>
    </StoreContext.Provider>
  );
};

export default App;

export const AppWrapper = styled.div``;

document.getElementsByTagName("body")[0].setAttribute("data-theme", "dark");

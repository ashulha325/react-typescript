import React from "react";
import styled from "styled-components";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import { StoreContext } from "./utils/context";
import { reducer } from "./store/reducer";
import { initialState } from "./store/state";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </StoreContext.Provider>
  );
};

export default App;

document.getElementsByTagName("body")[0].setAttribute("data-theme", "dark");

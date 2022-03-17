import React from "react";
import { StoreContext } from "../../utils/context";
import { ACTION_LOGIN } from "../../store/reducer";

const Header = () => {
  const { state, dispatch } = React.useContext(StoreContext);

  function login() {
    dispatch(
      ACTION_LOGIN({
        user: { name: "Kevin Odongo", age: 14, isAdmin: true },
        isLogged: true,
      })
    );
    console.log(state.isLogged);
  }

  return (
    <div>
      <button onClick={login}>1</button>
      {state.isLogged ? 1 : 2}
    </div>
  );
};

export default Header;

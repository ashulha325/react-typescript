import { State } from "./state";
import { Actions, ActionType } from "./actions";

export function reducer(state: State, action: Actions) {
  switch (action.type) {
    case ActionType.ACTION_LOGIN:
      console.log("called");
      return {
        ...state,
        user: action.payload.user,
        isLogged: action.payload.isLogged,
      };
    case ActionType.ACTION_LOGOUT:
      return {
        ...state,
        user: action.payload.user,
        isLogged: action.payload.isLogged,
      };
    default:
      return state;
  }
}

export const ACTION_LOGIN = (value: any) => ({
  type: ActionType.ACTION_LOGIN,
  payload: value,
});

export const ACTION_LOGOUT = (value: any) => ({
  type: ActionType.ACTION_LOGOUT,
  payload: value,
});

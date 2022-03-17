import { User } from "./state";

export enum ActionType {
  ACTION_LOGIN,
  ACTION_LOGOUT,
}

export interface Ilogin {
  type: ActionType.ACTION_LOGIN;
  payload: { user: User; isLogged: boolean };
}

export interface ILogout {
  type: ActionType.ACTION_LOGOUT;
  payload: { user: null; isLogged: boolean };
}

export type Actions = ILogout | Ilogin;

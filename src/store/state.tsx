// declare state of the store
export interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

export interface State {
  user: User | null;
  isLogged: boolean;
}

export const initialState: State = {
  user: null,
  isLogged: false,
};

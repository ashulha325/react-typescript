import React from "react";
import { store } from "../store/store";

export const StoreContext: any = React.createContext<any>(store);

import React, { createContext, useContext, useReducer, type Dispatch } from "react";
import type { Action, State } from "../types/Theme";
import themeReducer from "../reducers/ThemeReducer";

interface ThemeContextInterface {
  state: State;
  dispatch: Dispatch<Action>;
}

const ThemeContext = createContext<ThemeContextInterface | null>(null);

const initialState: State = { theme: "light" };

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeProvide範囲外です");
  }

  return context;
};

export { ThemeContext, ThemeProvider, useTheme };

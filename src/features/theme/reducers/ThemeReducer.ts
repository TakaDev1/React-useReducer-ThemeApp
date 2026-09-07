import type { Action, State } from "../types/Theme";

const themeReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "toggle":
      return {
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

export default { themeReducer };

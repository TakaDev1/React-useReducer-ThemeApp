type Theme = "light" | "dark";

interface State {
  state: Theme;
}

interface Action {
  type: "toggle";
}

export type { Theme, State, Action };

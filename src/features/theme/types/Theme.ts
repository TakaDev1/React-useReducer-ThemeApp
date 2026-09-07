type Theme = "light" | "dark";

interface State {
  theme: Theme;
}

interface Action {
  type: "toggle";
}

export type { Theme, State, Action };

import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeDisplay = () => {
  const { state } = useTheme();
  return (
    <div>
      <p>現在のテーマ: {state.theme}</p>
    </div>
  );
};

export default ThemeDisplay;

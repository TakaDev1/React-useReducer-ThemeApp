import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { dispatch } = useTheme();

  const handleToggle = () => {
    dispatch({ type: "toggle" });
  };
  return (
    <div>
      <button onClick={handleToggle}>テーマ切り替え</button>
    </div>
  );
};

export default ThemeToggle;

import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { dispatch } = useTheme();

  const handleToggle = () => {
    dispatch({ type: "toggle" });
  };
  return (
    <div>
      <button
        onClick={handleToggle}
        className="w-1/5 bg-blue-300 text-black font-bold py-5 rounded-full text-black hover:opacity-80 cursor-pointer"
      >
        テーマ切り替え
      </button>
    </div>
  );
};

export default ThemeToggle;

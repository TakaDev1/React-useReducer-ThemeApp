import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeDisplay = () => {
  const { state } = useTheme();
  return (
    <div className="bg-gray-400 w-1/3 mx-auto py-10 rounded-xl my-10">
      <p className="text-2xl font-bold text-white">現在のテーマ: {state.theme}</p>
    </div>
  );
};

export default ThemeDisplay;

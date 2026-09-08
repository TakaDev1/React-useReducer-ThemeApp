import "./App.css";
import ThemeDisplay from "./features/theme/components/ThemeDisplay";
import ThemeToggle from "./features/theme/components/ThemeToggle";
import { ThemeProvider } from "./features/theme/contexts/ThemeContext";

function App() {
  return (
    <>
      <div className="bg-gray-800 min-h-screen flex flex-col justify-center">
        <h1>React-useReducer-ThemeApp</h1>
        <ThemeProvider>
          <div>
            <ThemeDisplay />
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import ThemeDisplay from "./features/theme/components/ThemeDisplay";
import ThemeToggle from "./features/theme/components/ThemeToggle";
import { ThemeProvider } from "./features/theme/contexts/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <div>
          <ThemeDisplay />
          <ThemeToggle />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;

// src/App.jsx
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/Home";
import getTheme from "./styles/theme";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />
      <Home toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;

// src/components/ThemeToggle.jsx
import { IconButton } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";

function ThemeToggle({ mode, toggleTheme }) {
  return (
    <IconButton
      onClick={toggleTheme}
      color="inherit"
      sx={{
        borderRadius: 8,
        "&:hover": {
          backgroundColor: "action.hover",
        },
      }}
    >
      {mode === "light" ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
}

export default ThemeToggle;

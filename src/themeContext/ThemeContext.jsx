import { createContext, useContext } from "react";

// Define theme colors
const theme = {
  primary: "#013550",  // Dark Blue
  accent: "#00b6c6",   // Cyan
  darkGray: "#3c3c3c",
  lightGray: "#d6d6d6",
  offWhite: "#efefef",
  black: "#111111",
  sidebarBg: "#000000", // Sidebar background color
  sidebarHover: "#00b6c6", // Sidebar hover color
  textPrimary: "#000000",  // Default text color
  textSecondary: "#2f2f2f", // Secondary text color
};

// Create context
const ThemeContext = createContext(theme);

// Custom hook to use theme
export const useTheme = () => useContext(ThemeContext);

// Theme Provider component
export const ThemeProvider = ({ children }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

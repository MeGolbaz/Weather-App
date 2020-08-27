import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

import NavBar from "./NavBar";
import Home from "../pages/Home"

export default function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(","),
      fontSize: 16,
      h5: {
        fontWeight: 500
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <NavBar />
        <Home />
      </Router>
    </ThemeProvider>
  );
}

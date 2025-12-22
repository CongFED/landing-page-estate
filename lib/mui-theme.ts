"use client"

import { createTheme } from "@mui/material/styles"

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#B85C3A", // Terracotta primary color
      light: "#C97A5C",
      dark: "#9A4C2E",
      contrastText: "#FAFAF9",
    },
    secondary: {
      main: "#E5DDD8",
      light: "#F0EAE7",
      dark: "#D4C9C2",
      contrastText: "#292524",
    },
    background: {
      default: "#FAFAF9",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#292524",
      secondary: "#78716C",
    },
  },
  typography: {
    fontFamily: "Geist, system-ui, sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.75rem",
      lineHeight: 1.4,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 8,
          padding: "10px 24px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
          },
        },
      },
    },
  },
})

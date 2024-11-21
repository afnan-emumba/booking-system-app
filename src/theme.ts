import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#F16B51",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#c74f38",
          },
          padding: "8px 16px",
          fontWeight: 600,
          textTransform: "none",
          fontSize: 14,
        },
      },
    },
  },

  palette: {
    primary: {
      main: "#F16B51",
    },
    secondary: {
      main: "#202445",
    },
    error: {
      main: "#F83030",
    },
  },

  typography: {
    fontFamily: "Poppins",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },

  shape: {
    borderRadius: 10,
  },

  spacing: 8,

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;

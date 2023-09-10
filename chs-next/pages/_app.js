import { createTheme, ThemeProvider } from "@mui/material";
import { UIContextProvider } from "../context/uiContext";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    typography: {
      fontFamily: "Palatino",
    },
    palette: {
      secondary: {
        main: "#fef7de",
      },
      primary: {
        main: "#91a68d",
      },
    },
  });

  return (
    <>
      <UIContextProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </UIContextProvider>
    </>
  );
}

export default MyApp;

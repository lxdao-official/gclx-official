import "../styles/globals.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { padWidth } from "../utils";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Helvetica Neue",
      "PingFang SC",
      "Microsoft YaHei",
      "Source Han Sans SC",
      "Noto Sans CJK SC",
      "WenQuanYi Micro Hei",
      "Roboto",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      main: "#000",
    },
  },
});

theme.typography.h3 = {
  fontSize: "3rem",
  fontWeight: "normal",
  [`@media (max-width: ${padWidth})`]: {
    fontSize: "2rem",
  },
};
theme.typography.h4 = {
  fontSize: "2.4rem",
  fontWeight: "normal",
  [`@media (max-width: ${padWidth})`]: {
    fontSize: "1.8rem",
  },
};

theme.typography.body1 = {
  fontSize: "1.4rem",
  [`@media (max-width: ${padWidth})`]: {
    fontSize: "1.2rem",
  },
};

theme.typography.body2 = {
  fontSize: "1.2rem",
  [`@media (max-width: ${padWidth})`]: {
    fontSize: "1rem",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

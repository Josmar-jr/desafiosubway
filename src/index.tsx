import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyle from "./styles/Global-styles";
import themeDefault from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themeDefault}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

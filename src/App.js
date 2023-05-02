import "./App.css";
import MainRouter from "./Routes/MainRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1d1d1d",
    },
    secondary: {
      main: "#d8cbc3",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
});

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;

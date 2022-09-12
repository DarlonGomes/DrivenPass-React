import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import HandlerProvider from "./contexts/handlerContext";
import DeleteDialog from "./components/Dialog";
import RouterNavigator from "./components/RouterNavigator";

export default function App() {
  return (
    <HandlerProvider>
      <CssBaseline />
      <BrowserRouter>
        <DeleteDialog />
        <RouterNavigator />
      </BrowserRouter>
    </HandlerProvider>
  );
}

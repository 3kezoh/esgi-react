import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./sources/components/app";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const Main = () => (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

root.render(<Main />);

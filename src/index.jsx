import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";

createRoot(document.getElementById("app")).render(
  
  <StrictMode>
    <App />
  </StrictMode>,
);

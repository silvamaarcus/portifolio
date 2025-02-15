import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import "./assets/styles/fonts.css";
import "animate.css"; // Texts animations for Hero
import App from "./App";
import "./i18n"; // Lib to translate the app

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

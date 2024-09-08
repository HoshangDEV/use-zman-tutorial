import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ZmanProvider } from "use-zman";

const translations = {
  en: {
    hello: "Hello World",
    content: "This is english content",
  },
  ku: {
    hello: "سڵاو جیهان",
    content: "ئەمە بابەتی کوردیە",
  },
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ZmanProvider translations={translations} defaultZman="ku">
      <App />
    </ZmanProvider>
  </StrictMode>
);

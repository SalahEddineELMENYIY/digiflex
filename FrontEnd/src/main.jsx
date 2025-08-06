import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import logo from "./assets/Logo.svg";

const link = document.createElement("link");
link.rel = "icon";
link.type = "image/svg+xml";
link.href = logo;
document.head.appendChild(link);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);

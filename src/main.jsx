import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Login />
  </StrictMode>,
);

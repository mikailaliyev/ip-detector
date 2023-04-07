import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error } from "./components/Error";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
      {!sessionStorage.getItem("true") && <Route path="/error" element={<Error />} />}
    </Routes>
  </BrowserRouter>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Settings from "./pages/settings.tsx";
const routes = createHashRouter([
  { path: "", element: <App /> },
  { path: "/settings", element: <Settings /> },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);

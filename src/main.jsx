import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Preview from "./pages/Preview.jsx";
import Layout from "./Layout.jsx";
import Code from "./pages/Code.jsx";
import TestCode from "./pages/TestCode.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "code",
        element: <Code />,
      },
      {
        path: "preview",
        element: <Preview />,
      },
      {
        path: "test",
        element: <TestCode />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

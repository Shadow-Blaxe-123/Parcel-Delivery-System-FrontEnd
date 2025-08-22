import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./providers/theme.provider.tsx";
import { router } from "./routes/index.tsx";
import { RouterProvider } from "react-router";
import { Toaster } from "./components/ui/sonner.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Toaster richColors={true} position="top-center" />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);

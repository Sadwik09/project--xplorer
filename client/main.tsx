import { createRoot } from "react-dom/client";
import App from "./App";

// Store root reference at module level to prevent HMR double-mount warnings
declare global {
  interface Window {
    __appRoot?: ReturnType<typeof createRoot>;
  }
}

const rootElement = document.getElementById("root");

if (rootElement) {
  // Create root only once during initial load
  if (!window.__appRoot) {
    window.__appRoot = createRoot(rootElement);
  }

  // Always render the app (this gets called on HMR updates)
  window.__appRoot.render(<App />);
}

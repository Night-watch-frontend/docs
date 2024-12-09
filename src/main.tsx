import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { InfoBlock } from "./components/info-block/info.tsx";
import { FileDoc } from "./components/file/file.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/docs/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<InfoBlock />} />
          <Route path="/:category" element={<InfoBlock />} />
          <Route path="/:category/:title" element={<FileDoc />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

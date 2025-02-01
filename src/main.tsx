import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Modal from "react-modal";
import "./index.css";
import App from "./App.tsx";
import { SnackbarProvider } from "./provider/snakbar.tsx";
import { ListsProvider } from "./provider/list.tsx";
import { TasksProvider } from "./provider/task.tsx";

Modal.setAppElement("#root");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SnackbarProvider>
      <ListsProvider>
        <TasksProvider>
          <App />
        </TasksProvider>
      </ListsProvider>
    </SnackbarProvider>
  </StrictMode>
);

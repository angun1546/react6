import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Counter } from "./Counter";
import { Todos } from "./Todos.jsx";
import { Todo } from "./Todo.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Counter />
    <App />
    <Todos />
    <Todo />
  </>,
);

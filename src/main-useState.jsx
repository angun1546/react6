import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Counter } from "./Counter.jsx";
import { Todos } from "./Todos.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Todos />
    <Counter />
    <App />
  </>,
);
/* npm run dev */

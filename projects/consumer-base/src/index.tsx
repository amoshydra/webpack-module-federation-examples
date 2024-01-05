import { Application } from "./App";
import { createRoot } from "react-dom/client";

const rootEl = document.createElement('div');
document.body.appendChild(rootEl);
const root = createRoot(rootEl);
root.render(<Application />);

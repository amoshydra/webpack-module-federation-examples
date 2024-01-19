import { createRoot } from "react-dom/client";

const rootEl = document.createElement('div');
document.body.appendChild(rootEl);
const root = createRoot(rootEl);

document.title = "Consumer Base";

(async () => {
  const { Application } = await import("./App");
  root.render(<Application />);
})();

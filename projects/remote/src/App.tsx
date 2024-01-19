import { createRoot } from "react-dom/client";
import { Main } from "./shared/WidgetPrimary";

const rootEl = document.createElement('div');
document.body.appendChild(rootEl);
const root = createRoot(rootEl);

// @ts-ignore
document.title = ____PROJECT_FLAVOR____ + " - Remote Widget Primary";

root.render(<Main />);

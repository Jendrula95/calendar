import React from "react";
import { createRoot } from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ContextWraper from "./context/ContextWraper";

createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ContextWraper>
			<App />
		</ContextWraper>
	</React.StrictMode>
);
reportWebVitals();

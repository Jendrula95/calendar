import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import ContextWrapper from "./context/ContextWraper"; // Upewnij się, że nazwa jest poprawna

const rootElement = document.getElementById("root");

if (rootElement) {
	createRoot(rootElement).render(
		<React.StrictMode>
			<ContextWrapper>
				<App />
			</ContextWrapper>
		</React.StrictMode>
	);
}

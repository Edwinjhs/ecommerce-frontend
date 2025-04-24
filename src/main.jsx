import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import { HashRouter } from 'react-router-dom'; // <-- Añade esto
import { AuthProvider } from "./context/AuthContext";
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
	<StrictMode>
		<HashRouter>
      <AuthProvider>
				<App />
			</AuthProvider>
		</HashRouter>
	</StrictMode>
);

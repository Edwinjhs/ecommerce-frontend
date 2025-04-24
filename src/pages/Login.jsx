import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Login.css"; // Crea este archivo para estilos

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login } = useAuth(); // Usa la función login del contexto
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Simulación de login (reemplazar con llamada a tu API)
		const mockUser = {
			email: email,
			role: "admin",
			country: "CO",
		};

		login(mockUser); // Usa la función del contexto
		navigate("/admin");
	};

	return (
		<div className="login-container">
			<h2>Iniciar Sesión</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					placeholder="Correo electrónico"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<input
					type="password"
					placeholder="Contraseña"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<button type="submit">Acceder</button>
			</form>
		</div>
	);
};

export default Login;

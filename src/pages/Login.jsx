import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Login.css"; // Mantén tus estilos aquí o agrégale al final

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [showRegister, setShowRegister] = useState(false);
	const { login } = useAuth();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");

		try {
			const response = await fetch(
				"https://inventory-backend-hvte.onrender.com/api/auth/login",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ email, password }),
				}
			);

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || "Error en el login");
			}

			localStorage.setItem("token", data.token);
			login({
				email: data.email,
				role: data.role,
				country: data.country,
			});

			navigate("/admin");
		} catch (err) {
			setError(err.message || "Error al iniciar sesión");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="login-container">
			<h2>Iniciar Sesión</h2>
			{error && <div className="error-message">{error}</div>}
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					placeholder="Correo electrónico"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					disabled={loading}
				/>
				<input
					type="password"
					placeholder="Contraseña"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
					disabled={loading}
				/>
				<button type="submit" disabled={loading}>
					{loading ? "Cargando..." : "Acceder"}
				</button>
			</form>
			<button onClick={() => setShowRegister(true)} className="register-link">
				¿No tienes cuenta? Regístrate
			</button>

			{showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
		</div>
	);
};

const RegisterModal = ({ onClose }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [country, setCountry] = useState("");
	const [message, setMessage] = useState("");

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch(
				"https://inventory-backend-hvte.onrender.com/api/auth/register",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email, password, country }),
				}
			);
			const data = await res.json();
			if (!res.ok) throw new Error(data.error || "Error al registrar");
			setMessage("Registro exitoso. Ya puedes iniciar sesión.");
		} catch (err) {
			setMessage(err.message);
		}
	};

	return (
		<div className="modal-overlay">
			<div className="modal">
				<button className="close-btn" onClick={onClose}>
					×
				</button>
				<h2>Registro</h2>
				<form onSubmit={handleRegister}>
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
					<input
						type="text"
						placeholder="País"
						value={country}
						onChange={(e) => setCountry(e.target.value)}
						required
					/>
					<button type="submit">Registrarse</button>
				</form>
				{message && <p className="message">{message}</p>}
			</div>
		</div>
	);
};

export default Login;

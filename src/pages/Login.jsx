	import { useState } from "react";
	import { useNavigate } from "react-router-dom";
	import { useAuth } from "../context/AuthContext";
	import "../styles/Login.css";

	const Login = () => {
		const [email, setEmail] = useState("");
		const [password, setPassword] = useState("");
		const [loading, setLoading] = useState(false);
		const [error, setError] = useState("");
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

				// Guardar token y datos de usuario
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
			</div>
		);
	};

	export default Login;

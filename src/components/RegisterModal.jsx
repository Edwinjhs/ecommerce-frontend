import { useState } from "react";
import "../styles/RegisterModal.css";


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
			setMessage("Usuario registrado con éxito. Ya puedes iniciar sesión.");
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
						placeholder="Correo"
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

export default RegisterModal;

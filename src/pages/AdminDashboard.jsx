import React from "react";
import { useAuth } from "../context/AuthContext";
import "../styles/AdminDashboard.css"; // Asegúrate de que la ruta sea correcta

const AdminDashboard = () => {
	const { user, logout } = useAuth();

	return (
		<div className="admin-dashboard">
			<h1>Panel de Administración</h1>
			<p>Bienvenido, {user?.email}</p>
			<button onClick={logout}>Cerrar sesión</button>

			{/* Aquí iría el contenido del panel */}
			<section>
				<h2>Gestión de Bodegas</h2>
				{/* ... */}
			</section>
		</div>
	);
};

export default AdminDashboard;
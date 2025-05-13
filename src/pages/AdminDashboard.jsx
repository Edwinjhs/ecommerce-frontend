import React from "react";
import { useAuth } from "../context/AuthContext";
import { FiUsers, FiSettings, FiPlus } from "react-icons/fi";
import { FaBookOpen } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
	const { user, logout } = useAuth();

	return (
		<div className="admin-dashboard">
			<div className="dashboard-header">
				<div>
					<h1>Panel de Administración - Aprendeya</h1>
					<p className="welcome-message">Bienvenido, {user?.email}</p>
				</div>
				<button onClick={logout} className="logout-btn">
					Cerrar sesión
				</button>
			</div>

			<div className="dashboard-content">
				<div className="info-section">
					<h2>¿Cómo te ayuda Aprendeya?</h2>
					<p className="info-text">
						Administra tus cursos, estudiantes inscritos, materiales enviados y
						consultas de seguimiento de manera eficiente desde un solo lugar.
					</p>
				</div>

				<div className="action-grid">
					<Link to="/admin/courses" className="action-card">
						<FaBookOpen className="action-icon" />
						<h3>Gestión de Cursos</h3>
						<p>Crea y organiza tus programas educativos</p>
					</Link>

					<Link to="/admin/students" className="action-card">
						<FiUsers className="action-icon" />
						<h3>Estudiantes Inscritos</h3>
						<p>Administra usuarios y matrículas</p>
					</Link>

					<Link to="/admin/tracking" className="action-card">
						<FiSettings className="action-icon" />
						<h3>Seguimiento de Envíos</h3>
						<p>Consulta el estado de los materiales enviados</p>
					</Link>

					<div className="stats-card">
						<h3>Resumen General</h3>
						<div className="stats-item">
							<span>Cursos activos:</span>
							<strong>8</strong>
						</div>
						<div className="stats-item">
							<span>Estudiantes inscritos:</span>
							<strong>250</strong>
						</div>
					</div>
				</div>

				<div className="quick-actions">
					<Link to="/admin/new-course" className="primary-btn">
						<FiPlus /> Nuevo Curso
					</Link>
				</div>

				{/* Aquí se renderizarán las sub-rutas */}
				<Outlet />
			</div>
		</div>
	);
};

export default AdminDashboard;

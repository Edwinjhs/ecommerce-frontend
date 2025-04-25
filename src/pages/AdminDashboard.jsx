import React from "react";
import { useAuth } from "../context/AuthContext";
import { FiUsers, FiSettings, FiPlus } from "react-icons/fi";
import { FaWarehouse } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
	const { user, logout } = useAuth();

	return (
		<div className="admin-dashboard">
			<div className="dashboard-header">
				<div>
					<h1>Panel de Administración</h1>
					<p className="welcome-message">Bienvenido, {user?.email}</p>
				</div>
				<button onClick={logout} className="logout-btn">
					Cerrar sesión
				</button>
			</div>

			<div className="dashboard-content">
				<div className="info-section">
					<h2>¿Por qué es importante esta herramienta?</h2>
					<p className="info-text">
						Gestiona eficientemente tus bodegas, médicos autorizados y
						seguimiento de inventario en tiempo real.
					</p>
				</div>

				<div className="action-grid">
					<Link to="/admin/warehouses" className="action-card">
						<FaWarehouse className="action-icon" />
						<h3>Gestión de Bodegas</h3>
						<p>Administra inventario y ubicaciones</p>
					</Link>

					<Link to="/admin/doctor" className="action-card">
						<FiUsers className="action-icon" />
						<h3>Médicos Autorizados</h3>
						<p>Administra profesionales autorizados</p>
					</Link>

					<Link to="/admin/crm" className="action-card">
						<FiSettings className="action-icon" />
						<h3>CRM Integrado</h3>
						<p>Gestiona relaciones con clientes</p>
					</Link>

					<div className="stats-card">
						<h3>Resumen General</h3>
						<div className="stats-item">
							<span>Bodegas activas:</span>
							<strong>3</strong>
						</div>
						<div className="stats-item">
							<span>Médicos registrados:</span>
							<strong>15</strong>
						</div>
					</div>
				</div>

				<div className="quick-actions">
					<Link to="/admin/new-shipment" className="primary-btn">
						<FiPlus /> Nuevo Embarque
					</Link>
				</div>

				{/* Aquí se renderizarán las sub-rutas */}
				<Outlet />
			</div>
		</div>
	);
};

export default AdminDashboard;

import { useAuth } from "../context/AuthContext";
import { Navigate, useLocation, Outlet } from "react-router-dom";

const PrivateRoute = ({ requiredRole }) => {
	const { user, loading } = useAuth();
	const location = useLocation();

	if (loading) {
		return (
			<div className="loading-spinner">
				<div className="spinner"></div>
				<p>Verificando acceso...</p>
			</div>
		);
	}

	if (!user) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	if (requiredRole && user.role !== requiredRole) {
		return <Navigate to="/" replace />;
	}

	return <Outlet />;
};

export default PrivateRoute;

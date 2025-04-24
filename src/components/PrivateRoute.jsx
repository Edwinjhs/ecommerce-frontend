import { useAuth } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children, requiredRole }) => {
	const { user, loading } = useAuth();
	const location = useLocation();

	if (loading) {
		return <div className="loading-spinner">Cargando...</div>;
	}

	if (!user) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	if (requiredRole && user.role !== requiredRole) {
		return <Navigate to="/" replace />;
	}

	return children;
};

export default PrivateRoute;

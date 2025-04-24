// src/components/PrivateRoute.jsx
import { useAuth } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children, role }) => {
	const { user } = useAuth(); // <-- Usa el hook aquí
	const location = useLocation();

	if (!user) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	if (role && user.role !== role) {
		return <Navigate to="/" replace />;
	}

	return children;
};

export default PrivateRoute;

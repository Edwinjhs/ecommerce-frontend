import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 1. Crear el contexto
export const AuthContext = createContext();

// 2. Proveedor del contexto
export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	// Verificar autenticación al cargar
	useEffect(() => {
		const checkAuth = async () => {
			try {
				const storedUser = localStorage.getItem("user");
				if (storedUser) {
					setUser(JSON.parse(storedUser));
				}
			} catch (error) {
				console.error("Error verificando autenticación:", error);
			} finally {
				setLoading(false);
			}
		};

		checkAuth();
	}, []);

	// Función de login
	const login = (userData) => {
		localStorage.setItem("user", JSON.stringify(userData));
		setUser(userData);
		navigate("/admin");
	};

	// Función de logout
	const logout = () => {
		localStorage.removeItem("user");
		setUser(null);
		navigate("/login");
	};

	return (
		<AuthContext.Provider value={{ user, loading, login, logout }}>
			{!loading && children}
		</AuthContext.Provider>
	);
};

// 3. Hook personalizado para usar el contexto
export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth debe usarse dentro de un AuthProvider");
	}
	return context;
};

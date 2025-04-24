// context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const checkAuth = async () => {
			const token = localStorage.getItem("token");

			if (!token) {
				setLoading(false);
				return;
			}

			try {
				const response = await fetch(
					"https://inventory-backend-hvte.onrender.com/api/auth/verify",
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);

				if (response.ok) {
					const userData = await response.json();
					setUser(userData);
				} else {
					localStorage.removeItem("token");
				}
			} catch (error) {
				console.error("Error verificando autenticación:", error);
			} finally {
				setLoading(false);
			}
		};

		checkAuth();
	}, []); // Array vacío = se ejecuta solo al montar el componente

	const login = (userData) => {
		setUser(userData);
		localStorage.setItem("token", userData.token);
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem("token");
	};

	return (
		<AuthContext.Provider value={{ user, loading, login, logout }}>
			{!loading && children}
		</AuthContext.Provider>
	);
};

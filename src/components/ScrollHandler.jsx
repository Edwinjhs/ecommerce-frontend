import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollHandler = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0); // Reinicia el scroll al cambiar de ruta
	}, [pathname]);

	return null; // No renderiza nada
};

export default ScrollHandler;

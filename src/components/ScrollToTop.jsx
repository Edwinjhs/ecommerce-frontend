import { useState, useEffect } from "react";
import "../styles/ScrollToTop.css";

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	// Mostrar/Ocultar botón
	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	// Scroll suave al top
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	return (
		<div className={`scroll-to-top ${isVisible ? "visible" : ""}`}>
			<button onClick={scrollToTop} aria-label="Volver al inicio">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
					<path
						d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-3v5h-4v-5H7l5-5 5 5z"
						fill="currentColor"
					/>
				</svg>
			</button>
		</div>
	);
};

export default ScrollToTop;

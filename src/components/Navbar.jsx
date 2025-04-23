import "../styles/Navbar.css";
import logo from "../assets/logo1.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher"; // Importa el componente

const Navbar = ({ isMenuOpen, toggleMenu }) => {
	const { t } = useTranslation();
  const closeMenu = () => {
		if (isMenuOpen) {
			toggleMenu(); // Cierra el menú solo si está abierto
		}
	};
	return (
		<nav>
			<div className="nav-container">
				<Link to="/" className="logo">
					<img src={logo} alt="LIPOCUBE Logo" />
				</Link>
				<LanguageSwitcher />

				<button
					className="mobile-menu-btn"
					onClick={toggleMenu}
					aria-label="Toggle menu"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
					>
						<path d="M4 6h16M4 12h16m-16 6h16"></path>
					</svg>
				</button>

				<div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
					{/* Textos traducidos */}
					<Link to="/productos" onClick={closeMenu}>
						{t("products")}
					</Link>
					<Link to="/quienes-somos" onClick={closeMenu}>
						{t("aboutUs")}
					</Link>
					<Link to="/seguimiento" onClick={closeMenu}>
						{t("tracking")}
					</Link>

					{/* Agrega el LanguageSwitcher aquí */}

					<button className="btn1" onClick={closeMenu}>
						<Link
							to="https://wa.me/573236657380"
							className="btn1 whatsapp-btn"
							target="_blank"
						>
							{t("contactUs")}
						</Link>
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

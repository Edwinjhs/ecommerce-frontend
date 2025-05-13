import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="footer-content">
					<div className="footer-section">
						<h4>Contacto</h4>
						<p>edwin.ejhnsn@gmail.com</p>
						<p>+57 3236657380</p>
					</div>
					<div className="footer-section">
						<h4>Enlaces Rápidos</h4>
						<Link to="/login">Iniciar Sesión</Link> {/* Enlace agregado */}
						<a href="#features">Beneficios</a>
						<a href="#pricing">Precios</a>
					</div>
					<div className="footer-section">
						<h4>Políticas</h4>
						<a href="#features">Política de privacidad</a>
						<a href="#pricing">Política de datos</a>
					</div>
				</div>
				<div className="footer-bottom">
					<p>
						© 2025 AprendeYa - Educamas - Todos los derechos
						reservados
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

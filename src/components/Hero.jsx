import "../styles/Hero.css";
import { useTranslation } from "react-i18next";
import heroImage from "../assets/forhero.png";
import { Link } from "react-router-dom"; // Importa Link


const Hero = () => {
	const { t } = useTranslation();
	return (
		<section className="hero">
			<div className="hero-container container">
				<div className="hero-content">
					<h1>{t("heroTitle")}</h1>
					<p>{t("heroDescription")}</p>
					<div className="hero-buttons">
						<Link to="/productos" className="btn btn-white">
							{t("heroButton1")}
						</Link>
						<Link to="/seguimiento" className="btn btn-outline">
							{t("heroButton2")}
						</Link>
					</div>
				</div>
				<div className="hero-image">
					<img src={heroImage} alt="Producto destacado" />
				</div>
			</div>
		</section>
	);
};

export default Hero;

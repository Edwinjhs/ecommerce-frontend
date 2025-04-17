import "../styles/Features.css";

const Features = () => {
	return (
		<section className="features" id="features">
			<div className="container">
				<h2 className="section-title">Nuestros Beneficios</h2>
				<p className="section-subtitle">
					Descubre por qué LIPOCUBE es la elección de los profesionales
				</p>

				<div className="features-grid">
					{/* Ejemplo de feature card */}
					<div className="feature-card">
						<div className="feature-icon">
							<svg viewBox="0 0 24 24">
								{" "}
								{/* Ícono de ejemplo (puedes cambiarlo) */}
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
							</svg>
						</div>
						<h3>fácil, superrápido y regenerador</h3>
						<p>Productos con estándares internacionales de calidad</p>
					</div>
					<div className="feature-card">
						<div className="feature-icon">
							<svg viewBox="0 0 24 24">
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
							</svg>
						</div>
						<h3>uniformización de la grasa del tamaño del injerto</h3>
						<p>Productos con estándares internacionales de calidad</p>
					</div>
					<div className="feature-card">
						<div className="feature-icon">
							<svg viewBox="0 0 24 24">
								{" "}
								{/* Ícono de ejemplo (puedes cambiarlo) */}
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
							</svg>
						</div>
						<h3>Técnica de inyección simplificada</h3>
						<p>Productos con estándares internacionales de calidad</p>
					</div>
					{/* Repetir estructura para más features */}
				</div>
			</div>
		</section>
	);
};

export default Features;

import "../styles/Features.css";

const Features = () => {
	return (
		<section className="features" id="features">
			<div className="container">
				<h2 className="section-title">¿Por qué elegir AprendeYA?</h2>
				<p className="section-subtitle">
					Transforma tu futuro con una experiencia de aprendizaje moderna,
					accesible y con materiales incluidos.
				</p>

				<div className="features-grid">
					{/* Beneficio 1 */}
					<div className="feature-card">
						<div className="feature-icon">
							<svg viewBox="0 0 24 24">
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
							</svg>
						</div>
						<h3>100% Online y Flexible</h3>
						<p>
							Accede a tus cursos en cualquier momento y desde cualquier lugar.
						</p>
					</div>

					{/* Beneficio 2 */}
					<div className="feature-card">
						<div className="feature-icon">
							<svg viewBox="0 0 24 24">
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
							</svg>
						</div>
						<h3>Materiales Incluidos</h3>
						<p>
							Enviamos libros y guías físicas a tu domicilio. ¡Sigue el envío
							desde tu cuenta usando nuestra integración con Postal Ninja!
						</p>
					</div>

					{/* Beneficio 3 */}
					<div className="feature-card">
						<div className="feature-icon">
							<svg viewBox="0 0 24 24">
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
							</svg>
						</div>
						<h3>Certificación Profesional</h3>
						<p>
							Obtén un certificado digital al finalizar cada curso para
							fortalecer tu CV.
						</p>
					</div>

					{/* Beneficio 4 */}
					<div className="feature-card">
						<div className="feature-icon">
							<svg viewBox="0 0 24 24">
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
							</svg>
						</div>
						<h3>Accesibilidad Total</h3>
						<p>
							Cursos de alta calidad a precios justos. Aprende sin barreras.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;

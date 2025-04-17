import React from "react";
import "../styles/AboutPage.css";

const AboutPage = () => {
	return (
		<div className="about-page">
			<div className="about-container">
				{/* Sección Hero */}
				<div className="about-hero">
					<h1>Nuestra Esencia</h1>
					<p>Innovación y excelencia en tratamientos estéticos</p>
				</div>

				{/* Tarjetas de información */}
				<div className="about-cards">
					<div className="about-card">
						<div className="card-icon">
							<svg viewBox="0 0 24 24">
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
							</svg>
						</div>
						<h2>Misión</h2>
						<p>
							Proveer soluciones estéticas innovadoras con los más altos
							estándares de calidad y seguridad
						</p>
					</div>

					<div className="about-card">
						<div className="card-icon">
							<svg viewBox="0 0 24 24">
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
							</svg>
						</div>
						<h2>Visión</h2>
						<p>
							Ser líderes mundiales en tecnología regenerativa aplicada a la
							estética médica
						</p>
					</div>

					<div className="about-card">
						<div className="card-icon">
							<svg viewBox="0 0 24 24">
								<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
							</svg>
						</div>
						<h2>Valores</h2>
						<ul>
							<li>Integridad científica</li>
							<li>Innovación constante</li>
							<li>Enfoque en resultados</li>
						</ul>
					</div>
				</div>

				{/* Formulario de contacto */}
				<div className="contact-section">
					<h2>Contáctanos</h2>
					<form className="contact-form">
						<div className="form-row">
							<div className="form-group">
								<label>Nombre completo</label>
								<input type="text" placeholder="Ej: María González" />
							</div>
							<div className="form-group">
								<label>Correo electrónico</label>
								<input type="email" placeholder="Ej: contacto@ejemplo.com" />
							</div>
						</div>

						<div className="form-row">
							<div className="form-group">
								<label>Teléfono</label>
								<input type="tel" placeholder="Ej: +56 9 1234 5678" />
							</div>
							<div className="form-group">
								<label>Asunto</label>
								<select>
									<option>Consulta general</option>
									<option>Soporte técnico</option>
									<option>Distribuidores</option>
								</select>
							</div>
						</div>

						<div className="form-group">
							<label>Mensaje</label>
							<textarea
								rows="4"
								placeholder="Escribe tu mensaje aquí..."
							></textarea>
						</div>

						<button type="submit" className="submit-btn">
							Enviar Mensaje
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;

import React from "react";
import "../styles/AboutPage.css";

const AboutPage = () => {
	return (
		<div className="about-page">
			<div className="about-container">
				{/* Sección Hero */}
				<div className="about-hero">
					<h1>Sobre AprendeYA</h1>
					<p>Impulsamos tu futuro con educación de calidad</p>
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
							Brindar educación accesible y de calidad a través de cursos y
							bootcamps virtuales que preparen a las personas para el mundo
							digital.
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
							Convertirnos en la plataforma líder en Latinoamérica en educación
							online, empoderando a miles de estudiantes a alcanzar sus metas
							profesionales.
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
							<li>Accesibilidad para todos</li>
							<li>Aprendizaje continuo</li>
							<li>Innovación educativa</li>
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
								<input type="text" placeholder="Ej: Juan Pérez" />
							</div>
							<div className="form-group">
								<label>Correo electrónico</label>
								<input type="email" placeholder="Ej: juan@example.com" />
							</div>
						</div>

						<div className="form-row">
							<div className="form-group">
								<label>Teléfono</label>
								<input type="tel" placeholder="Ej: +57 300 123 4567" />
							</div>
							<div className="form-group">
								<label>Interés</label>
								<select>
									<option>Información sobre cursos</option>
									<option>Asistencia técnica</option>
									<option>Oportunidades de colaboración</option>
								</select>
							</div>
						</div>

						<div className="form-group">
							<label>Mensaje</label>
							<textarea
								rows="4"
								placeholder="Cuéntanos en qué podemos ayudarte..."
							></textarea>
						</div>

						<button type="submit" className="submit-btn">
							Enviar mensaje
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;

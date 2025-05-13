import "../styles/Pricing.css";
import producto1 from "../assets/curso1ciencia.png";
import producto2 from "../assets/curso2java.png";
import producto3 from "../assets/curs3.png";

const Pricing = ({ onSelectProduct }) => {
	return (
		<section className="pricing" id="pricing">
			<div className="container">
				<h2 className="section-title">Nuestros Cursos</h2>
				<p className="section-subtitle">
					Encuentra el mejor curso para seguir creciendo.
				</p>

				<div className="pricing-grid">
					{/* Ejemplo de pricing card */}
					<div className="pricing-card">
						<div className="product-image-container">
							<img
								src={producto1}
								alt="Lipocube Nano"
								className="product-image"
							/>
						</div>
						<h3>Ciencia de Datos</h3>
						<ul className="feature-list">
							<li>para tal tal tal</li>
							<li>ideal para tal tal</li>
						</ul>
						<button
							className="btn"
							onClick={() => onSelectProduct("Ciencia de Datos")}
						>
							Seleccionar
						</button>
					</div>
					<div className="pricing-card">
						<div className="product-image-container">
							<img
								src={producto2}
								alt="Lipocube Nano"
								className="product-image"
							/>
						</div>
						<h3>Java Full Stack</h3>
						<ul className="feature-list">
							<li>para tal tal tal</li>
							<li>ideal para tal tal</li>
						</ul>
						<button
							className="btn"
							onClick={() => onSelectProduct("Java Full Stack")}
						>
							Seleccionar
						</button>
					</div>
					<div className="pricing-card">
						<div className="product-image-container">
							<img
								src={producto3}
								alt="Lipocube Nano"
								className="product-image"
							/>
						</div>
						<h3>Frontend con React</h3>
						<ul className="feature-list">
							<li>para tal tal tal</li>
							<li>ideal para tal tal</li>
						</ul>
						<button
							className="btn"
							onClick={() => onSelectProduct("Frontend con React")}
						>
							Seleccionar
						</button>
					</div>
					{/* Repetir estructura para más productos */}
				</div>
			</div>
		</section>
	);
};

export default Pricing;

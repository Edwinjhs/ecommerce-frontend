import "../styles/Pricing.css";
import producto1 from "../assets/producto1.png";
import producto2 from "../assets/producto2.png";
import producto3 from "../assets/producto3.jpg";

const Pricing = ({ onSelectProduct }) => {
	return (
		<section className="pricing" id="pricing">
			<div className="container">
				<h2 className="section-title">Nuestros Productos</h2>
				<p className="section-subtitle">
					Encuentra la solución perfecta para tu clínica
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
						<h3>Lipocube Nano</h3>
						<ul className="feature-list">
							<li>para tal tal tal</li>
							<li>ideal para tal tal</li>
						</ul>
						<button
							className="btn"
							onClick={() => onSelectProduct("Lipocube Nano")}
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
						<h3>Lipocube Nano</h3>
						<ul className="feature-list">
							<li>para tal tal tal</li>
							<li>ideal para tal tal</li>
						</ul>
						<button
							className="btn"
							onClick={() => onSelectProduct("Lipocube Hybrid")}
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
						<h3>Lipocube Nano</h3>
						<ul className="feature-list">
							<li>para tal tal tal</li>
							<li>ideal para tal tal</li>
						</ul>
						<button
							className="btn"
							onClick={() => onSelectProduct("Exocube")}
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

import React, { useEffect } from "react";
import producto1 from "../assets/curso1ciencia.png";
import producto2 from "../assets/curso2java.png";
import producto3 from "../assets/curs3.png";
import "../styles/ProductModal.css";

const ProductModal = ({ product, onClose }) => {
	const handleKeyDown = (e) => {
		if (e.key === "Escape") {
			onClose();
		}
	};

	const handleClickOutside = (e) => {
		if (e.target.classList.contains("modal-overlay")) {
			onClose();
		}
	};

	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("click", handleClickOutside);
		document.body.style.overflow = "hidden";

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("click", handleClickOutside);
			document.body.style.overflow = "auto";
		};
	}, [onClose]); // Agregamos dependencia

	const getProductImage = () => {
		switch (product) {
			case "Ciencia de Datos":
				return producto1;
			case "Java Full Stack":
				return producto2;
			case "Frontend con React":
				return producto3;
			default:
				return producto1;
		}
	};

	return (
		<div className="modal-overlay">
			<div className="modal-content">
				<button className="close-button" onClick={onClose}>
					&times;
				</button>
				<img src={getProductImage()} alt={product} className="modal-image" />
				<h2>{product}</h2>
				<div className="product-details">
					<p>Descripción detallada del producto...</p>
					<button className="btn-buy">Unirme ahora</button>
				</div>
			</div>
		</div>
	);
};

export default ProductModal;

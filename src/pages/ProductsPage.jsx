import React, { useState } from "react"; // Agrega useState
import Pricing from "../components/Pricing";
import ProductModal from "../components/ProductModal"; // Importa el modal
import "../styles/Pricing.css";

const ProductsPage = () => {
	// Agrega estado para el producto seleccionado
	const [selectedProduct, setSelectedProduct] = useState(null);

	return (
		<div className="products-page">
			{/* Pasa la función de selección a Pricing */}
			<Pricing showAllProducts={true} onSelectProduct={setSelectedProduct} />

			{/* Renderiza el modal si hay producto seleccionado */}
			{selectedProduct && (
				<ProductModal
					product={selectedProduct}
					onClose={() => setSelectedProduct(null)}
				/>
			)}
		</div>
	);
};

export default ProductsPage;

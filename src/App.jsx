import { useState } from "react";
import { I18nextProvider } from "react-i18next"; // Importa el provider
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import ProductModal from "./components/ProductModal";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import TrackingPage from "./pages/TrackingPage";
import ScrollToTop from "./components/ScrollToTop";
import LanguageSwitcher from "./components/LanguageSwitcher"; // Importa el selector de idiomas
import i18n from "./i18n"; // Importa la configuración de i18n
import "./App.css";

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);

	return (
		<I18nextProvider i18n={i18n}>
			{" "}
			{/* Envuelve todo con el provider */}
			<Router>
				<div className="app">

					<Navbar
						isMenuOpen={isMenuOpen}
						toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
					/>

					<Routes>
						<Route
							path="/"
							element={
								<main>
									<Hero />
									<Features />
									<Pricing onSelectProduct={setSelectedProduct} />
								</main>
							}
						/>
						<Route path="/productos" element={<ProductsPage />} />
						<Route path="/quienes-somos" element={<AboutPage />} />
						<Route path="/seguimiento" element={<TrackingPage />} />
					</Routes>

					<Footer />
					<ScrollToTop />

					{selectedProduct && (
						<ProductModal
							product={selectedProduct}
							onClose={() => setSelectedProduct(null)}
						/>
					)}
				</div>
			</Router>
		</I18nextProvider>
	);
}

export default App;

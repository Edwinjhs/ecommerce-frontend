import { useState } from "react";
import { I18nextProvider } from "react-i18next";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // HashRouter aquí
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
import ScrollHandler from "./components/ScrollHandler"; // Componente nuevo
import i18n from "./i18n";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
		<I18nextProvider i18n={i18n}>
			<Router basename="/">
				{" "}
				{/* HashRouter ahora */}
				<div className="app">
					<ScrollHandler />
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
					<ScrollToTop />{" "}
					{/* Asegúrate de que esté implementado como en el punto 2 */}
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
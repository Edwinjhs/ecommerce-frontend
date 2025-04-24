import { useState } from "react";
import { I18nextProvider } from "react-i18next";
import { Routes, Route } from "react-router-dom"; // <-- Solo estas importaciones
import { AuthProvider } from "./context/AuthContext";
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
import ScrollHandler from "./components/ScrollHandler";
import i18n from "./i18n";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);

	return (
		<AuthProvider>
			<I18nextProvider i18n={i18n}>
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
							

							{/* Ruta protegida para admin */}
							<Route
								path="/admin"
								element={
									<PrivateRoute role="admin">
										<AdminDashboard />
									</PrivateRoute>
								}
							/>

							<Route path="/login" element={<Login />} />
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
			</I18nextProvider>
		</AuthProvider>
	);
}

export default App;
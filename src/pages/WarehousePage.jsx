// src/pages/WarehousePage.jsx
import React, { useState } from "react";
import { FiChevronDown, FiPlus, FiMinus, FiSearch } from "react-icons/fi";
import { FaWarehouse } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/WarehousePage.css";

const WarehousePage = () => {
	const [warehouses, setWarehouses] = useState([
		{
			id: 1,
			name: "Brazil",
			products: [
				{
					id: 1,
					name: "Lipocube Nano",
					quantity: 150,
					lot: "LN-2023-001",
					expiry: "2025-06-30",
				},
				{
					id: 2,
					name: "Lipocube Hybrid",
					quantity: 200,
					lot: "LH-2023-002",
					expiry: "2025-08-15",
				},
			],
		},
	]);

	const [searchTerm, setSearchTerm] = useState("");

	const updateQuantity = (warehouseId, productId, adjustment) => {
		setWarehouses((prev) =>
			prev.map((warehouse) => {
				if (warehouse.id === warehouseId) {
					return {
						...warehouse,
						products: warehouse.products.map((product) =>
							product.id === productId
								? {
										...product,
										quantity: Math.max(0, product.quantity + adjustment),
								  }
								: product
						),
					};
				}
				return warehouse;
			})
		);
	};

	// Versión corregida del filtro
	const filteredWarehouses = warehouses.filter(
		(warehouse) =>
			warehouse.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			warehouse.products.some((product) =>
				product.name.toLowerCase().includes(searchTerm.toLowerCase())
			)
	);

	return (
		<div className="warehouse-management">
			<header className="management-header">
				<h1>
					<FaWarehouse className="header-icon" /> Inventory Management
				</h1>
				<div className="header-actions">
					<div className="search-bar">
						<FiSearch className="search-icon" />
						<input
							type="text"
							placeholder="Search warehouses or products..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</div>
					<Link to="/admin/new-shipment" className="primary-button">
						<FiPlus /> New Shipment
					</Link>
				</div>
			</header>

			<div className="warehouse-grid">
				{filteredWarehouses.map((warehouse) => (
					<section key={warehouse.id} className="warehouse-card">
						<div className="warehouse-header">
							<h2>{warehouse.name}</h2>
							<FiChevronDown className="expand-icon" />
						</div>

						<div className="product-list">
							{warehouse.products.map((product) => (
								<article key={product.id} className="product-item">
									<div className="product-info">
										<h3>{product.name}</h3>
										<div className="product-meta">
											<span>Lot: {product.lot}</span>
											<span>Expiry: {product.expiry}</span>
										</div>
									</div>
									<div className="quantity-controls">
										<button
											onClick={() =>
												updateQuantity(warehouse.id, product.id, -1)
											}
											disabled={product.quantity === 0}
										>
											<FiMinus />
										</button>
										<span className="quantity">{product.quantity}</span>
										<button
											onClick={() =>
												updateQuantity(warehouse.id, product.id, 1)
											}
										>
											<FiPlus />
										</button>
									</div>
								</article>
							))}
						</div>
					</section>
				))}
			</div>
		</div>
	);
};

export default WarehousePage;

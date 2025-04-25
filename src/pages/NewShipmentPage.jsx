// src/pages/NewShipmentPage.jsx
import React, { useState } from "react";
import { FiPackage, FiCalendar, FiTruck, FiSave } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../styles/NewShipmentPage.css";

const NewShipmentPage = () => {
	const [formData, setFormData] = useState({
		origin: "",
		destination: "Brazil",
		shipmentDate: "",
		estimatedArrival: "",
		products: [
			{
				productType: "Lipocube Nano",
				quantity: 0,
				lotNumber: "",
				expiryDate: "",
			},
		],
	});

	const warehouses = ["Brazil", "Chile", "Colombia", "Miami"];
	const productTypes = ["Lipocube Nano", "Lipocube Hybrid"];

	const handleInputChange = (index, e) => {
		const newProducts = [...formData.products];
		newProducts[index][e.target.name] = e.target.value;
		setFormData({ ...formData, products: newProducts });
	};

	const addProductField = () => {
		setFormData({
			...formData,
			products: [
				...formData.products,
				{
					productType: "Lipocube Nano",
					quantity: 0,
					lotNumber: "",
					expiryDate: "",
				},
			],
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Aquí iría la lógica para enviar los datos al backend
		console.log("Shipment data:", formData);
		// Redireccionar o mostrar mensaje de éxito
	};

	return (
		<div className="new-shipment-container">
			<div className="header-section">
				<h1>
					<FiTruck /> New Shipment Registration
				</h1>
				<Link to="/admin/warehouses" className="back-button">
					&larr; Back to Warehouses
				</Link>
			</div>

			<form onSubmit={handleSubmit} className="shipment-form">
				<div className="form-section">
					<h2>
						<FiPackage /> Shipment Details
					</h2>

					<div className="form-group">
						<label>Origin:</label>
						<input
							type="text"
							value={formData.origin}
							onChange={(e) =>
								setFormData({ ...formData, origin: e.target.value })
							}
							required
						/>
					</div>

					<div className="form-group">
						<label>Destination Warehouse:</label>
						<select
							value={formData.destination}
							onChange={(e) =>
								setFormData({ ...formData, destination: e.target.value })
							}
						>
							{warehouses.map((warehouse) => (
								<option key={warehouse} value={warehouse}>
									{warehouse}
								</option>
							))}
						</select>
					</div>

					<div className="date-group">
						<div className="form-group">
							<label>
								<FiCalendar /> Shipment Date:
							</label>
							<input
								type="date"
								value={formData.shipmentDate}
								onChange={(e) =>
									setFormData({ ...formData, shipmentDate: e.target.value })
								}
								required
							/>
						</div>

						<div className="form-group">
							<label>
								<FiCalendar /> Estimated Arrival:
							</label>
							<input
								type="date"
								value={formData.estimatedArrival}
								onChange={(e) =>
									setFormData({ ...formData, estimatedArrival: e.target.value })
								}
								required
							/>
						</div>
					</div>
				</div>

				<div className="form-section">
					<h2>
						<FiPackage /> Products in Shipment
					</h2>

					{formData.products.map((product, index) => (
						<div key={index} className="product-entry">
							<div className="form-group">
								<label>Product Type:</label>
								<select
									name="productType"
									value={product.productType}
									onChange={(e) => handleInputChange(index, e)}
								>
									{productTypes.map((type) => (
										<option key={type} value={type}>
											{type}
										</option>
									))}
								</select>
							</div>

							<div className="form-group">
								<label>Quantity:</label>
								<input
									type="number"
									name="quantity"
									value={product.quantity}
									onChange={(e) => handleInputChange(index, e)}
									min="0"
									required
								/>
							</div>

							<div className="form-group">
								<label>Lot Number:</label>
								<input
									type="text"
									name="lotNumber"
									value={product.lotNumber}
									onChange={(e) => handleInputChange(index, e)}
									required
								/>
							</div>

							<div className="form-group">
								<label>Expiry Date:</label>
								<input
									type="date"
									name="expiryDate"
									value={product.expiryDate}
									onChange={(e) => handleInputChange(index, e)}
									required
								/>
							</div>
						</div>
					))}

					<button
						type="button"
						onClick={addProductField}
						className="add-product-btn"
					>
						<FiPlus /> Add Another Product
					</button>
				</div>

				<div className="form-actions">
					<button type="submit" className="submit-button">
						<FiSave /> Register Shipment
					</button>
				</div>
			</form>
		</div>
	);
};

export default NewShipmentPage;

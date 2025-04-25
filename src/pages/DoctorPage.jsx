// src/pages/DoctorsPage.jsx
import React, { useState } from "react";
import { FiUser, FiMail, FiPhone, FiSearch } from "react-icons/fi";
import "../styles/DoctorPage.css";


const DoctorPage = () => {
	const [doctors, setDoctors] = useState([
		{
			id: 1,
			name: "Dr. John Smith",
			email: "john.smith@example.com",
			phone: "+1 555 123 4567",
			country: "USA",
			city: "Miami",
		},
		// Add other doctors...
	]);

	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCountry, setSelectedCountry] = useState("All");

	// Get unique countries for filter options
	const countries = ["All", ...new Set(doctors.map((d) => d.country))];


	const filteredDoctors = doctors.filter((doctor) => {
		const matchesSearch =
			doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			doctor.email.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesCountry =
			selectedCountry === "All" || doctor.country === selectedCountry;
		return matchesSearch && matchesCountry;
	});

	return (
		<div className="doctors-management">
			<header className="management-header">
				<h1>
					<FiUser className="header-icon" /> Authorized Medical Professionals
				</h1>

				<div className="filters">
					<div className="search-bar">
						<FiSearch className="search-icon" />
						<input
							type="text"
							placeholder="Search doctors..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</div>

					<select
						value={selectedCountry}
						onChange={(e) => setSelectedCountry(e.target.value)}
						className="country-filter"
					>
						{countries.map((country) => (
							<option key={country} value={country}>
								{country}
							</option>
						))}
					</select>
				</div>
			</header>

			<div className="country-sections">
				{countries
					.filter((c) => c !== "All")
					.map((country) => {
						const countryDoctors = filteredDoctors.filter(
							(d) => d.country === country
						);
						if (countryDoctors.length === 0) return null;

						return (
							<section key={country} className="country-group">
								<h2 className="country-header">{country}</h2>
								<div className="doctors-grid">
									{countryDoctors.map((doctor) => (
										<article key={doctor.id} className="doctor-card">
											<h3>{doctor.name}</h3>
											<div className="contact-info">
												<p>
													<FiMail /> {doctor.email}
												</p>
												<p>
													<FiPhone /> {doctor.phone}
												</p>
											</div>
											<div className="doctor-actions">
												<button className="edit-button">Edit</button>
												<button className="details-button">Details</button>
											</div>
										</article>
									))}
								</div>
							</section>
						);
					})}
			</div>
		</div>
	);
};

export default DoctorPage;

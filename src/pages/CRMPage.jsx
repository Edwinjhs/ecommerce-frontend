// src/pages/CRMPage.jsx
import React from "react";
import { FiTool, FiBarChart2, FiUsers, FiCalendar } from "react-icons/fi";
import "../styles/CRMPage.css";

/**
 * CRM Dashboard Component
 * @component
 * Placeholder for future CRM functionality with feature roadmap
 */
const CRMPage = () => {
	return (
		<div className="crm-dashboard">
			<header className="dashboard-header">
				<h1>Customer Relationship Management</h1>
				<p className="subtitle">
					Advanced client management tools (Coming Soon)
				</p>
			</header>

			<div className="construction-notice">
				<FiTool className="tool-icon" />
				<h2>Feature Under Development</h2>
				<p>
					We're building powerful tools to enhance your client management
					capabilities
				</p>

				<div className="roadmap">
					<h3>Planned Features:</h3>
					<div className="roadmap-item">
						<FiBarChart2 className="feature-icon" />
						<div>
							<h4>Client Analytics</h4>
							<p>Detailed usage statistics and engagement metrics</p>
						</div>
					</div>

					<div className="roadmap-item">
						<FiUsers className="feature-icon" />
						<div>
							<h4>Client Segmentation</h4>
							<p>Advanced grouping and targeting capabilities</p>
						</div>
					</div>

					<div className="roadmap-item">
						<FiCalendar className="feature-icon" />
						<div>
							<h4>Appointment Management</h4>
							<p>Integrated calendar and scheduling system</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CRMPage;

import React from "react";
import "../styles/TrackingPage.css";

const TrackingPage = () => {
	return (
		<div className="tracking-page">
			<h1 className="tracking-title">Rastrea tu Pedido</h1>
			<div className="tracking-container">
				<iframe
					title="Widget de seguimiento"
					src="https://postal.ninja/widget/tracker?lc=es&autoSize=true&btnText=Buscar&btnColor=%23461111&noSave=true"
					className="tracking-widget"
					frameBorder="0"
				/>
			</div>
		</div>
	);
};

export default TrackingPage;

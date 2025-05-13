import React from "react";
import "../styles/TrackingPage.css";
import { useTranslation } from "react-i18next";

const TrackingPage = () => {
	const { t } = useTranslation();

	return (
		<div className="tracking-page">
			<div className="tracking-hero">
				<h1 className="tracking-title">{t("trackingTitle")}</h1>
				<p className="tracking-subtitle">{t("trackingSubtitle")}</p>
			</div>

			<div className="tracking-content">
				<div className="tracking-info">
					<div className="info-card">
						<h2>{t("whyTrackTitle")}</h2>
						<div className="benefits-grid">
							<div className="benefit-item">
								<div className="benefit-icon">📍</div>
								<h3>{t("realTimeTracking")}</h3>
								<p>{t("realTimeDesc")}</p>
							</div>
							<div className="benefit-item">
								<div className="benefit-icon">⚡</div>
								<h3>{t("deliverySpeed")}</h3>
								<p>{t("deliverySpeedDesc")}</p>
							</div>
							<div className="benefit-item">
								<div className="benefit-icon">🔐</div>
								<h3>{t("secureDelivery")}</h3>
								<p>{t("secureDeliveryDesc")}</p>
							</div>
						</div>
					</div>

					<div className="lipocube-info">
						<h2>{t("aboutLipocube")}</h2>
						<div className="info-section">
							<div className="info-column">
								<h3>🎓 {t("ourCommitment")}</h3>
								<p>{t("commitmentText")}</p>
							</div>
							<div className="info-column">
								<h3>📜 {t("productQuality")}</h3>
								<p>{t("qualityText")}</p>
							</div>
						</div>
					</div>
				</div>

				<div className="tracking-container">
					<div className="widget-instructions">
						<h3>{t("howToTrack")}</h3>
						<ol>
							<li>{t("step1")}</li>
							<li>{t("step2")}</li>
							<li>{t("step3")}</li>
						</ol>
					</div>

					<iframe
						title="Widget de seguimiento"
						src="https://postal.ninja/widget/tracker?lc=es&autoSize=true&btnText=Buscar&btnColor=%23005488&noSave=true"
						className="tracking-widget"
						frameBorder="0"
					/>
				</div>
			</div>

			<div className="support-section">
				<h3>{t("needHelp")}</h3>
				<p>
					{t("contactSupport")}{" "}
					<a href="mailto:soporte@aprendeya.com">soporte@aprendeya.com</a>
				</p>
			</div>
		</div>
	);
};

export default TrackingPage;

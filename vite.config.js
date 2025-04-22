import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	base: "/", // Asegura rutas absolutas
	build: {
		outDir: "dist",
		assetsDir: "assets", // Organiza JS/CSS/imágenes aquí
	},
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	base: "/", // Añade esta línea para rutas absolutas en producción
	build: {
		outDir: "dist", // Asegura que el build se genere en "dist" (esto ya es el default)
	},
});

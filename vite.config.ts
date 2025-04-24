import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.join(__dirname, 'src'),
		},
	},
	plugins: [react()],
	server: {
		host: true,
		strictPort: true,
	},
	test: {
		environment: "jsdom",
		setupFiles: ["./vitest.setup.ts"],
		css: true,
	},
	optimizeDeps: {
	},
	build: {
		commonjsOptions: {
		}
	},
	base:'/reactjs-covid-visualization-map'
});

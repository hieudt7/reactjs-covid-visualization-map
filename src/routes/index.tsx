import { Suspense } from "react";

import { BrowserRouter } from "react-router-dom";

import Preloaders from "@/components/Preloaders";
import RenderRouter from "./render-router";

const Routes = () => {
	return (
		<Suspense fallback={<Preloaders />}>
			<BrowserRouter>
				<RenderRouter />
			</BrowserRouter>
		</Suspense>
	);
};

export default Routes;

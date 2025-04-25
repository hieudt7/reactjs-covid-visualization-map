import { Suspense, useEffect, useState } from "react";

import { BrowserRouter } from "react-router-dom";

import Preloaders from "@/components/Preloaders";
import RenderRouter from "./render-router";

const Routes = () => {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 500);
	}, []);
	return (
		<Suspense fallback={<Preloaders />}>
			{isLoading ? (
				<Preloaders />
			) : (
				<BrowserRouter>
					<RenderRouter />
				</BrowserRouter>
			)}
		</Suspense>
	);
};

export default Routes;

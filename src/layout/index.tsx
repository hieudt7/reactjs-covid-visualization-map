import { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";

import fallbackRender from "./error-boundary/fallbackRender";
import HeaderComponent from "./header";

const LayoutComponent = () => {
	return (
		<div className="w-full h-full">
			<div className="flex flex-col min-h-screen">
				<HeaderComponent />
				<main className="flex-1 pt-16">
					<ErrorBoundary fallbackRender={fallbackRender}>
						<Suspense
							fallback={
								<div className="w-full h-full flex justify-center items-center">
									<span>Loading...</span>
								</div>
							}
						>
							<Outlet />
						</Suspense>
					</ErrorBoundary>
				</main>
			</div>
		</div>
	);
};

export default LayoutComponent;

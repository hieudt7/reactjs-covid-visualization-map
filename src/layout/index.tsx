import { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";

import Preloaders from "@/components/Preloaders";
import fallbackRender from "./error-boundary/fallbackRender";
import FooterComponent from "./footer";
import HeaderComponent from "./header";

const LayoutComponent = () => {
	return (
		<div className="w-full h-screen flex flex-col overflow-hidden">
			<HeaderComponent />
			<main className="flex-1 pt-16">
				<ErrorBoundary fallbackRender={fallbackRender}>
					<Suspense
						fallback={
							<div className="w-full h-full flex justify-center items-center">
								<Preloaders />
							</div>
						}
					>
						<Outlet />
					</Suspense>
				</ErrorBoundary>
			</main>
			<FooterComponent />
		</div>
	);
};

export default LayoutComponent;

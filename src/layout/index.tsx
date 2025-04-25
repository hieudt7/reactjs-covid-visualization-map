import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";

import fallbackRender from "./error-boundary/fallbackRender";
import FooterComponent from "./footer";
import HeaderComponent from "./header";

const LayoutComponent = () => {
	return (
		<div className="w-full h-screen flex flex-col overflow-hidden">
			<HeaderComponent />
			<main className="flex-1 pt-16">
				<ErrorBoundary fallbackRender={fallbackRender}>
					<Outlet />
				</ErrorBoundary>
			</main>
			<FooterComponent />
		</div>
	);
};

export default LayoutComponent;

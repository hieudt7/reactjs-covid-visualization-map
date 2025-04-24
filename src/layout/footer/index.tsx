const FooterComponent = () => {
	return (
		<footer className="w-full bg-white  fixed bottom-0 left-0">
			<div className="text-center text-sm text-gray-500 mx-auto px-4 py-4 w-full">
				© {new Date().getFullYear()} COVID-19 Dashboard. All rights reserved.
			</div>
		</footer>
	);
};

export default FooterComponent;

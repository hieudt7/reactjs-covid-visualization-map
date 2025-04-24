import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	// Set the scroll event listener
	useEffect(() => {
		const handleScroll = () => {
			const scrollContainer = document.querySelector(".overflow-auto");
			if (scrollContainer) {
				const height = scrollContainer.scrollHeight / 4;
				if (scrollContainer.scrollTop > height) {
					setIsVisible(true);
				} else {
					setIsVisible(false);
				}
			}
		};

		const scrollContainer = document.querySelector(".overflow-auto");
		if (scrollContainer) {
			scrollContainer.addEventListener("scroll", handleScroll);
			// Check initial scroll position
			handleScroll();
			return () => {
				scrollContainer.removeEventListener("scroll", handleScroll);
			};
		}
		return () => {}; // Return empty cleanup function if no scrollContainer
	}, []);

	// Scroll to top smoothly
	const scrollToTop = () => {
		const scrollContainer = document.querySelector(".overflow-auto");
		if (scrollContainer) {
			scrollContainer.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	};

	return (
		<button
			onClick={scrollToTop}
			className={`fixed bottom-16 right-6 p-3 rounded-full bg-custom-purple text-white shadow-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-green-400 hover:to-dark-green z-[9999] ${
				isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
			}`}
			aria-label="Scroll to top"
		>
			<KeyboardArrowUpIcon className="w-6 h-6" />
		</button>
	);
};

export default ScrollToTop;

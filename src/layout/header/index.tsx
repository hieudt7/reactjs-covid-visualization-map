import { Link } from "react-router-dom";

import { navList } from "@/constant/navs";
import { useActiveMenu } from "@/hooks";
import VietnamFlag from "/images/vietnam-flag.png";
const HeaderComponent = () => {
	const { checkActive } = useActiveMenu();

	return (
		<header className="bg-gradient-to-r from-teal-800 to-blue-900 block fixed w-full inset-x-0 z-30 h-16 px-4 shadow-md">
			<div className="w-full h-full flex items-center justify-between mx-auto">
				<div className="w-full flex justify-between items-center">
					<img src={VietnamFlag} alt="Vietnam Flag" className="w-12 h-12" />
					<div className="flex gap-5">
						{navList.map((item) => (
							<Link key={item.key} to={item.key}>
								<span
									className={`font-bold text-m py-2 text-white ${
										checkActive(item.key)
											? "border-b-2 border-white"
											: "hover:text-gray-200 hover:border-b-2 hover:border-gray-200"
									} transition-all duration-150`}
								>
									{item.label}
								</span>
							</Link>
						))}
					</div>
				</div>
			</div>
		</header>
	);
};

export default HeaderComponent;

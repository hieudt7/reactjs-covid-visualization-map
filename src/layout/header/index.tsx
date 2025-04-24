import { Link } from "react-router-dom";

import { navList } from "@/constant/navs";
import { useActiveMenu } from "@/hooks";
import VietnamFlag from "/images/logo.png";
import { DASHBOARD_PATH } from "@/constant/path";
import { TelephoneCall } from "@mynaui/icons-react";

const HeaderComponent = () => {
	const { checkActive } = useActiveMenu();

	return (
		<header className="bg-[#fff] block fixed w-full inset-x-0 z-30 h-16 px-4 shadow-md">
			<div className="w-full h-full flex items-center justify-between mx-auto">
				<div className="w-full flex justify-between items-center">
					<Link to={DASHBOARD_PATH}>
						<img src={VietnamFlag} alt="Vietnam Flag" className="w-44" />
					</Link>
					<div className="flex gap-10">
						{navList.map((item) => (
							<Link key={item.key} to={item.key}>
								<span
									className={`menu-link font-bold text-m py-2 text-[#333] ${checkActive(item.key)
										? "active-link"
										: ""
										} transition-all duration-150`}
								>
									{item.label}
								</span>
							</Link>
						))}
						<span className="flex items-center ml-20 gap-2 hover:text-[#4a148c] transition-all duration-150">
							<span className="phone-icon">
								<TelephoneCall />
							</span>
							<a href="tel:+221234567890" className="call-link"> Call Us - (+22) 123 456 7890</a>
						</span>
					</div>
				</div>
			</div>
		</header>
	);
};

export default HeaderComponent;

import { cloneDeep } from "lodash";
import { Link } from "react-router-dom";

import { Dashboard, Home } from "@/pages";
import { capitalizeFirstLetter } from "@/utils/string";
import { DASHBOARD_PATH, HOME_PATH } from "./path";
import type { TypeNavs, TypeRoutes } from "./type-navs";

const navs: Array<TypeNavs> = [
	{
		key: DASHBOARD_PATH,
		label: "Dashboard",
		element: <Dashboard />,
	},
	{
		key: HOME_PATH,
		label: "Covid Data",
		element: <Home />,
	},
];

const getRoutes = (array: Array<TypeRoutes>, nav: TypeNavs, basePath = "") => {
	if (nav.children) {
		for (const n of nav.children) {
			getRoutes(array, n, basePath + nav.key);
		}
	}
	if (!nav.element) return;

	array.push({
		path: basePath + nav.key,
		element: nav.element,
	});

	return array;
};

const addLink = (nav: TypeNavs, path: string) => {
	return nav.children ? (
		capitalizeFirstLetter(nav.label as string)
	) : (
		<Link to={path}>{capitalizeFirstLetter(nav.label as string)}</Link>
	);
};

const getShowNavigation = (
	nav: TypeNavs,
	basePath = ""
): TypeNavs | undefined => {
	if (!nav.label) return;
	if (nav.children) {
		const array: Array<TypeNavs> = [];
		for (const n of nav.children) {
			const formatN = getShowNavigation(n, basePath + nav.key);
			if (formatN) array.push(formatN);
		}

		nav.children = array.length > 0 ? array : undefined;
	}

	return {
		key: basePath + nav.key,
		label: addLink(nav, basePath + nav.key),
		children: nav.children,
		element: nav.element,
	};
};

const menuList: Array<TypeNavs> = [];
const routeList: Array<TypeRoutes> = [];
const navList: Array<TypeNavs> = navs.map((nav) => ({
	key: nav.key,
	label: nav.label,
}));

for (const nav of navs) {
	const nav1 = cloneDeep(nav);
	const n = getShowNavigation(nav1);
	if (n) {
		menuList.push(n);
	}

	const nav2 = cloneDeep(nav);
	getRoutes(routeList, nav2);
}

export { menuList, navList, routeList };

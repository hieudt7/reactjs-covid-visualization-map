import { ProvinceData } from "@/types/home";

export const getProvince = (id: number, data: any) => {
	const province = data.dailyReports.find(
		(province: ProvinceData) => province.provinceID === id
	);
	return province;
};

export function generateColor(province?: ProvinceData) {
	if (!province) {
		return "#919491";
	}
	if (province.casesInfected > 1000) {
		return "#ec1313";
	}
	if (province.casesInfected > 100) {
		return "#eb5814";
	}
	if (province.casesInfected > 10) {
		return "#f1d521";
	}
	return "#38f238";
}

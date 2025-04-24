import { Data, Province, ProvinceData } from "@/types/home";
import { COLOR_THRESHOLDS } from "@/constant/visualization-data";
export interface TopProvinceData {
	name: string;
	cases: number;
	deaths: number;
	recovered: number;
}

export function normalText(text: string) {
	if (text === "Bà Rịa – Vũng Tàu") return "Vung_Tau";
	if (text === "TP. Hồ Chí Minh") return "Ho_Chi_Minh";
	return text
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/đ/g, "d")
		.replace(/Đ/g, "D")
		.replace(/ /g, "_");
}

export const getProvince = (name: string, data: Data) => {
	const province = data.provinces.find((province) => {
		return normalText(province.name) === name;
	});
	return province;
};

export const getProvinceData = (province: Province | undefined, data: Data) => {
	const provinceData = data.dailyReports.find(
		(report) => report.provinceID === province?.id
	);
	return provinceData;
};

export const formatProvinceName = (name: string | null | undefined): string => {
	if (!name) return "";
	return name.replace(/_/g, " ");
};

export function generateColor(province?: ProvinceData) {
	if (!province) {
		return "#F3F4F6"; // Very light gray
	}

	const cases = province.casesInfected;
	return (
		COLOR_THRESHOLDS.find(({ threshold }) => cases > threshold)?.color ||
		"#16A34A"
	);
}

export const getTopProvincesByCases = ({ 
  data, 
  pageSize = 0, 
  ascending = false 
}: { 
  data: Data; 
  pageSize?: number; 
  ascending?: boolean;
}) => {
	const limit = pageSize === 0 ? data.provinces.length : pageSize;
	return data.provinces
		.map((province) => {
			const dailyData = data.dailyReports.find(
				(report) => report.provinceID === province.id
			);
			return {
				name: province.name,
				cases: dailyData?.casesInfected || 0,
				deaths: dailyData?.casesDeaths || 0,
				recovered: dailyData?.casesRecovered || 0,
			};
		})
		.sort((a: TopProvinceData, b: TopProvinceData) => {
			// Nếu pageSize < 0, sắp xếp từ dưới lên (ít ca nhiễm nhất lên đầu)
			// Nếu pageSize >= 0, sắp xếp từ trên xuống (nhiều ca nhiễm nhất lên đầu)
			return ascending ? a.cases - b.cases : b.cases - a.cases;
		})
		.slice(0, limit);
};

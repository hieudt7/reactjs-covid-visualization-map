import { BufferGeometry, Vector3 } from "three";

//province
export interface Province {
	id: number;
	name: string;
}

export interface ProvinceData {
	provinceID: number;
	casesInfected: number;
	casesDeaths: number;
	casesRecovered: number;
}
export interface ProvinceReportData {
	name: string,
	cases: number,
	deaths: number,
	recovered: number,
}

export interface Data {
	provinces: Province[];
	dailyReports: ProvinceData[];
}

export interface ProvinceProps {
	name: string | null;
	color: string;
	position: Vector3;
	provinceData: ProvinceData;
	geometry: BufferGeometry;
}

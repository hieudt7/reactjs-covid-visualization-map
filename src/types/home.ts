import { BufferGeometry, Vector3 } from "three";

//province

export interface ProvinceData {
	provinceID: number;
	casesInfected: number;
	casesDeaths: number;
	casesRecovered: number;
}

export interface ProvinceProps {
	name: string | null;
	color: string;
	position: Vector3;
	provinceData: ProvinceData;
	geometry: BufferGeometry;
}

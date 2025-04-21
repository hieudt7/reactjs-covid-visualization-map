export interface ChartDataValue {
	total: number;
	male: number;
	female: number;
}

export interface ChartData {
	year: string;
	value: ChartDataValue;
	color: string;
}

export interface BarProps {
	value: ChartDataValue;
	height: number;
	color: string;
	position: [number, number, number];
}

export interface LabelItem {
	year: string;
	value: number;
}

export interface LabelsProps {
	data: LabelItem[];
}

export interface BarChart3Props {
	data: ChartData[];
}

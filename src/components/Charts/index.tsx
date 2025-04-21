import BarChart3D from "./components/BarsChart";
import { ChartData } from "./components/BarsChart/BarChart.types";

const data: ChartData[] = [
	{
		year: "2017",
		value: { total: 10, male: 8, female: 2 },
		color: "lightblue",
	},
	{
		year: "2018",
		value: { total: 40, male: 25, female: 15 },
		color: "deeppink",
	},
	{ year: "2019", value: { total: 60, male: 40, female: 20 }, color: "gold" },
	{
		year: "2020",
		value: { total: 30, male: 15, female: 15 },
		color: "mediumseagreen",
	},
	{
		year: "2021",
		value: { total: 70, male: 50, female: 20 },
		color: "mediumpurple",
	},
];
const Charts = () => {
	return <BarChart3D data={data} />;
};

export default Charts;

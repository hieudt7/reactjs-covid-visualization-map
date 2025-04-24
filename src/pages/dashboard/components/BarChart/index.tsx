import mockData from "@/data/mockData.json";
import { formatDate } from "@/utils/date";
import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Bar from "./Bar";
import BarChartLegend from "./BarChartLegend";

const BarChart = () => {
	const { weeklyReport } = mockData;

	return !weeklyReport.length ? (
		<p>No data yet</p>
	) : (
		<div className="flex flex-col items-center gap-6 relative">
			<h2 className="text-xl font-bold absolute top-5 text-custom-purple uppercase">
				Weekly COVID-19 case data report
			</h2>
			<div className="w-full h-[500px]">
				<Canvas camera={{ position: [-2, 0, 7], fov: 75 }}>
					<ambientLight intensity={1} />
					<directionalLight position={[0, 5, 5]} />
					{weeklyReport.map((item, index) => (
						<group key={item.date} position={[index * 2 - 4, -1, 0]}>
							{/* Deaths - Green */}
							<Bar
								height={item.totalDeaths / 25000}
								color={"mediumseagreen"}
								position={[-0.5, 0, 0]}
								value={item.totalDeaths}
							/>
							{/* Infected - Gold */}
							<Bar
								height={item.totalInfected / 25000}
								color={"gold"}
								position={[0, 0, 0]}
								value={item.totalInfected}
							/>
							{/* Recovered - Purple */}
							<Bar
								height={item.totalRecovered / 25000}
								color={"mediumpurple"}
								position={[0.5, 0, 0]}
								value={item.totalRecovered}
							/>
							{/* Date label */}
							<Html
								position={[0, -1.5, 0]}
								center
								className="text-xs text-dark-green whitespace-nowrap -translate-x-1/2"
							>
								{formatDate(item.date)}
							</Html>
						</group>
					))}
				</Canvas>
			</div>
			<BarChartLegend />
		</div>
	);
};

export default BarChart;

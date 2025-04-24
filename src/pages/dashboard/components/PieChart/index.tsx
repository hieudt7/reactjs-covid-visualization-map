import mockData from "@/data/mockData.json";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import PieChartLegend from "./PieChartLegend";
import PieSlice from "./PieSlice";

const PieChart: React.FC = () => {
	const { vaccineReport } = mockData;
	// Calculate total as sum of all three values
	const total =
		vaccineReport.firstDose + vaccineReport.secondDose + vaccineReport.noDose;

	// Calculate angles (clockwise from top)
	const TWO_PI = Math.PI * 2;

	// Start from -Math.PI/2 to begin at the top
	const baseAngle = -Math.PI / 2;

	// Calculate proportions
	const firstDoseProportion = vaccineReport.firstDose / total;
	const secondDoseProportion = vaccineReport.secondDose / total;
	const noDoseProportion = vaccineReport.noDose / total;

	// Calculate end angles for each segment
	const firstDoseEnd = baseAngle + firstDoseProportion * TWO_PI;
	const secondDoseEnd = firstDoseEnd + secondDoseProportion * TWO_PI;

	// Calculate mid angles for hover effect
	const firstDoseMidAngle = baseAngle + (firstDoseProportion * TWO_PI) / 2;
	const secondDoseMidAngle = firstDoseEnd + (secondDoseProportion * TWO_PI) / 2;
	const noDoseMidAngle = secondDoseEnd + (noDoseProportion * TWO_PI) / 2;

	return (
		<div className="flex flex-col items-center gap-6 relative">
			<h2 className="text-xl font-normal absolute top-5 text-custom-purple uppercase text-center">
				COVID-19 vaccination report
				<br />
				<span className="text-dark-green text-sm lowercase">
					all information accurate as of the present day
				</span>
			</h2>
			<div className="w-full h-[400px]">
				<Canvas camera={{ position: [0, 4, 2], fov: 70 }} shadows>
					<ambientLight intensity={2} />
					<pointLight position={[10, 10, 10]} intensity={0.5} />
					<directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />

					<group rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
						{/* First Dose segment - Mint Green (35%) */}
						<PieSlice
							startAngle={baseAngle}
							endAngle={firstDoseEnd}
							radius={1.5}
							height={0.35}
							color="mediumseagreen"
							midAngle={firstDoseMidAngle}
							percentage={firstDoseProportion * 100}
						/>

						{/* Second Dose segment - Purple (45%) */}
						<PieSlice
							startAngle={firstDoseEnd}
							endAngle={secondDoseEnd}
							radius={1.5}
							height={0.45}
							color="mediumpurple"
							midAngle={secondDoseMidAngle}
							percentage={secondDoseProportion * 100}
						/>

						{/* No Dose segment - Yellow (20%) */}
						<PieSlice
							startAngle={secondDoseEnd}
							endAngle={baseAngle + TWO_PI}
							radius={1.5}
							height={0.2}
							color="gold"
							midAngle={noDoseMidAngle}
							percentage={noDoseProportion * 100}
						/>
					</group>

					<OrbitControls enableZoom={false} />
				</Canvas>
			</div>
			<PieChartLegend
				firstDoseProportion={firstDoseProportion}
				secondDoseProportion={secondDoseProportion}
				noDoseProportion={noDoseProportion}
			/>
		</div>
	);
};

export default PieChart;

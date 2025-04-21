import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Bar from "./Bar";
import { BarChart3Props } from "./BarChart.types";

import Labels from "./Labels";

const BarChart3D = ({ data }: BarChart3Props) => {
	return !data.length ? (
		<p>No data yet</p>
	) : (
		<Canvas camera={{ position: [-2, 0, 7], fov: 60 }} className="canvas">
			<ambientLight intensity={1} />
			<directionalLight position={[0, 5, 5]} />
			{data.map((item, index) => (
				<Bar
					key={item.year}
					height={item.value.total / 20}
					color={item.color}
					position={[index - 1.5, 0, 0]}
					value={item.value}
				/>
			))}
			<Labels
				data={data.map((item) => ({
					year: item.year,
					value: item.value.total,
				}))}
			/>
			<OrbitControls />
		</Canvas>
	);
};

export default BarChart3D;

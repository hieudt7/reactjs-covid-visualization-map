import { Text } from "@react-three/drei";
import { LabelsProps } from "./BarChart.types";
const Labels = ({ data }: LabelsProps) => {
	return (
		<>
			{data.map((item, index) => (
				<group key={index}>
					{/* Value Labels */}
					<Text
						position={[index - 1.5, item.value / 20 - 0.7, 0]}
						fontSize={0.13}
						color="white"
						anchorX="center"
						anchorY="bottom"
					>
						{`${item.value}K`}
					</Text>
					{/* Year Labels */}
					<Text
						position={[index - 1.5, -1.2, 0]}
						fontSize={0.15}
						color="#cccccc"
						anchorX="center"
						anchorY="top"
					>
						{item.year}
					</Text>
				</group>
			))}
		</>
	);
};

export default Labels;

import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { BarProps } from "./BarChart.types";

const Bar = ({ height, position, color, value }: BarProps) => {
	const mesh = useRef<THREE.Mesh>(null);

	const [h, setH] = useState<number>(0);
	const [hovered, setHovered] = useState(false);

	const percentageOfMale = Number(
		((value.male / value.total) * 100).toFixed(2)
	);

	const percentageOfFemale = Number((100 - percentageOfMale).toFixed(2));

	// Animation for the height
	useFrame(() => {
		if (h < height) {
			setH((previousHeight) => Math.min(previousHeight + 0.04, height)); // Increasing the height slowly
		}
	});
	//Ensuring that the mesh's position is updated correctly whenever the height of the bar (h) changes
	useEffect(() => {
		if (mesh.current) {
			mesh.current.position.set(position[0], h / 2 - 1, position[2]);
		}
	}, [h, position]);

	return (
		<>
			<mesh
				ref={mesh}
				position={[position[0], h / 2 - 1, position[2]]}
				onPointerOver={() => setHovered(true)}
				onPointerOut={() => setHovered(false)}
			>
				<boxGeometry args={[0.5, h, 0.5]} />
				<meshStandardMaterial color={color} />
			</mesh>
			{hovered && (
				<Html position={[position[0], height - 0.4, position[2]]}>
					<div className="tooltip">
						<p>{`Male: ${percentageOfMale}%`} </p>
						<p>{`Female: ${percentageOfFemale}%`} </p>
					</div>
				</Html>
			)}
		</>
	);
};

export default Bar;

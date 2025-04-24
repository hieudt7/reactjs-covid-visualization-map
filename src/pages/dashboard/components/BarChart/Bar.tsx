import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface BarProps {
	height: number;
	position: [number, number, number];
	color: string;
	value: number;
}

const Bar = ({ height, position, color, value }: BarProps) => {
	const mesh = useRef<THREE.Mesh>(null);
	const [h, setH] = useState<number>(0);
	const [hovered, setHovered] = useState(false);
	const [material, setMaterial] = useState<THREE.MeshStandardMaterial | null>(
		null
	);

	// Animation for the height
	useFrame(() => {
		if (h < height) {
			setH((previousHeight) => Math.min(previousHeight + 0.04, height)); // Increasing the height slowly
		}
	});

	// Update material color on hover
	useEffect(() => {
		if (material) {
			material.color.set(
				hovered ? new THREE.Color(color).multiplyScalar(1.5) : color
			);
			material.emissive.set(
				hovered
					? new THREE.Color(color).multiplyScalar(0.2)
					: new THREE.Color(0x000000)
			);
		}
	}, [hovered, color, material]);

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
				<meshStandardMaterial
					ref={setMaterial}
					color={color}
					emissive={new THREE.Color(0x000000)}
					emissiveIntensity={0}
				/>
			</mesh>
			{hovered && (
				<Html
					position={[position[0], h + 0.1, position[2]]}
					center
					className="bg-dark-green px-2.5 py-1.5 rounded text-white text-xs whitespace-nowrap pointer-events-none -translate-x-1/2 -translate-y-1/2"
				>
					{value.toLocaleString()}
				</Html>
			)}
		</>
	);
};

export default Bar;

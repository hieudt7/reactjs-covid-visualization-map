import useMapStore from "@/store/useMapStore";
import { ProvinceProps } from "@/types/home";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const Province = ({
	name,
	color,
	position,
	geometry,
}: Partial<ProvinceProps>) => {
	const provinceRef = useRef<THREE.Mesh>(null);
	const [hovered, setHovered] = useState<boolean>(false);
	const setCameraPosition = useMapStore((state) => state.setCameraPosition);
	const activeMesh = useMapStore((state) => state.activeMesh);

	useEffect(() => {
		if (hovered) {
			return () => {
				document.body.style.cursor = "pointer";
			};
		}
		return () => {
			document.body.style.cursor = "auto";
		};
	}, [hovered]);

	useFrame(() => {
		if (provinceRef.current) {
			provinceRef.current.position.y = THREE.MathUtils.lerp(
				provinceRef.current.position.y,
				hovered || activeMesh === name ? 0.01 : 0,
				0.05
			);
		}
	});

	return (
		<group
			ref={provinceRef}
			onClick={() => {
				setCameraPosition({ activeMesh: name });
			}}
			onPointerOver={() => setHovered(true)}
			onPointerOut={() => setHovered(false)}
			position={position}
		>
			<mesh
				castShadow
				receiveShadow
				geometry={geometry}
				material={new THREE.MeshStandardMaterial({ color })}
			/>
		</group>
	);
};

export default Province;

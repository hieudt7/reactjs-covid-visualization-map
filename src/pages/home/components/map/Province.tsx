import useColorFilterStore from "@/store/useColorFilterStore";
import useMapStore from "@/store/useMapStore";
import { ProvinceProps } from "@/types/home";
import { formatProvinceName } from "@/utils/map";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import TextGenerate from "./TextGenerate";
import { useCursorPointer } from "@/hooks/useCursorPointer";

const Province = ({
	name,
	color,
	position,
	geometry,
	provinceData,
}: ProvinceProps) => {
	const provinceRef = useRef<THREE.Group>(null);
	const [hovered, setHovered] = useState<boolean>(false);
	const setCameraPosition = useMapStore((state) => state.setCameraPosition);
	const activeMesh = useMapStore((state) => state.activeMesh);
	const { activeFilter } = useColorFilterStore();

	useCursorPointer(hovered);

	useFrame(() => {
		if (provinceRef.current) {
			provinceRef.current.position.y = THREE.MathUtils.lerp(
				provinceRef.current.position.y,
				hovered || activeMesh === name ? 0.02 : 0,
				0.05
			);
		}
	});

	// Tính toán màu hiển thị dựa trên filter
	const displayColor = activeFilter
		? activeFilter.color === color
			? color // Giữ nguyên màu nếu match với filter
			: "#808080" // Màu xám cho các province không match
		: color; // Không có filter thì hiển thị màu gốc

	return (
		<group
			ref={provinceRef}
			name={name || undefined}
			onClick={() => {
				setCameraPosition({ activeMesh: name });
			}}
			onPointerOver={() => setHovered(true)}
			onPointerOut={() => setHovered(false)}
			position={position}
		>
			<TextGenerate
				name={name || ""}
				animate={false}
				position={new THREE.Vector3(0, 0.01, 0.01)}
				text={formatProvinceName(name)}
				hovered={hovered}
				color="#ffffff"
			/>
			<TextGenerate
				name={name || ""}
				color={"#111"}
				animate
				position={new THREE.Vector3(0, 0.01, -0.05)}
				text={`Infected: ${provinceData.casesInfected}
				Deaths: ${provinceData.casesDeaths}
				Recovered: +${provinceData.casesRecovered}`}
				hovered={hovered}
				textAlign="left"
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={geometry}
				material={
					new THREE.MeshStandardMaterial({
						color: displayColor,
						roughness: 0.8,
						metalness: 0,
						flatShading: true,
					})
				}
			/>
		</group>
	);
};

export default Province;

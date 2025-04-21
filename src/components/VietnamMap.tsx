import mockData from "@/data/mockData.json";
import { generateColor, getProvince, getProvinceData } from "@/utils/map";
import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { JSX, useRef } from "react";
import * as THREE from "three";
import Province from "./Province";

const VietnamMap = (props: GroupProps) => {
	const mapRef = useRef<THREE.Group>(null);
	const { scene } = useGLTF("/models/map.gltf");

	const Provinces = () => {
		const provinces: JSX.Element[] = [];
		scene.traverse((child) => {
			if (child instanceof THREE.Mesh) {
				const province = getProvince(child.name, mockData);
				const provinceData = getProvinceData(province, mockData);
				const color = generateColor(provinceData);

				provinces.push(
					<Province
						position={child.position}
						key={child.name}
						name={child.name}
						geometry={child.geometry}
						color={color}
						provinceData={provinceData}
					/>
				);
			}
		});
		return provinces;
	};

	return (
		<group
			ref={mapRef}
			{...props}
			dispose={null}
			position={[-2, 0, 1]}
			scale={[2, 2, 2]}
			castShadow
			receiveShadow
		>
			<Provinces />
		</group>
	);
};

export default VietnamMap;

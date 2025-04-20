import mockData from "@/data/mockData.json";
import { generateColor, getProvince } from "@/utils/map";
import { useGLTF } from "@react-three/drei";
import { JSX, useRef } from "react";
import * as THREE from "three";
import Province from "./Province";
type GroupProps = Partial<THREE.Group>;

const VietnamMap = (props: GroupProps) => {
	const mapRef = useRef<THREE.Group>(null);
	const { scene } = useGLTF(process.env["PUBLIC_URL"] + "/map.gltf");

	const Provinces = () => {
		const provinces: JSX.Element[] = [];
		scene.traverse((child) => {
			if (child instanceof THREE.Mesh) {
				const province = getProvince(child.id, mockData);
				const color = generateColor(province);

				provinces.push(
					<Province
						position={child.position}
						key={child.name}
						name={child.name}
						geometry={child.geometry}
						color={color}
						provinceData={province}
					/>
				);
			}
		});
		return provinces;
	};

	return (
		<group ref={mapRef} {...props} dispose={null} position={[-10, 0, 5]}>
			<Provinces />
		</group>
	);
};

export default VietnamMap;

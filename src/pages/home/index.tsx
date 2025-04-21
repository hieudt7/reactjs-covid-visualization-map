import CameraControl from "@/components/CameraControl";
import ColorIndicator from "@/components/ColorIndicator";
import Lights from "@/components/Lights";
import TopCitiesTable from "@/components/TopCitiesTable";
import VietnamMap from "@/components/VietnamMap";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Home = () => {
	return (
		<div style={{ width: "100vw", height: "100vh", position: "relative" }}>
			<Canvas
				shadows
				camera={{
					position: [0, 8, 4],
					fov: 45,
				}}
				style={{
					width: "100%",
					height: "100%",
					background: "linear-gradient(135deg, #60A5FA 0%, #BFDBFE 100%)",
				}}
			>
				<OrbitControls />
				<Lights />
				<CameraControl />
				<VietnamMap />
			</Canvas>
			<div
				style={{
					position: "absolute",
					right: "20px",
					top: "20px",
					zIndex: 1000,
				}}
			>
				<ColorIndicator />
				<TopCitiesTable />
			</div>
		</div>
	);
};

export default Home;

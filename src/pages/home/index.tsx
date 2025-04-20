import { Canvas } from "@react-three/fiber";

const Home = () => {
	return (
		<Canvas>
			<mesh>
				<boxGeometry />
				<meshStandardMaterial color="red" />
			</mesh>
		</Canvas>
	);
};

export default Home;

import mockData from "@/data/mockData.json";
import { getTopProvincesByCases } from "@/utils/map";
import { Canvas } from "@react-three/fiber";
import ColorIndicator from "./components/ColorIndicator";
import ProvinceDataTable from "./components/ProvinceDataTable";
import TopCitiesTable from "./components/TopCitiesTable";
import VietnamMap from "./components/map/VietnamMap";
const Home = () => {
	const top10MostInfectedCities = getTopProvincesByCases({
		data: mockData,
		pageSize: 10,
		ascending: false,
	});
	const top10LeastInfectedCities = getTopProvincesByCases({
		data: mockData,
		pageSize: 10,
		ascending: true,
	});
	return (
		<>
			<div className="w-screen h-screen relative">
				<Canvas
					dpr={[1, 1.5]}
					shadows
					camera={{
						position: [0, 59, 36],
						fov: 45,
					}}
					className="w-full h-full"
				>
					<VietnamMap />
				</Canvas>
				<div className="absolute left-5 top-5 z-[1000]" data-aos="fade-right" data-aos-easing="ease-out-back" data-aos-duration="1000">
					<ProvinceDataTable />
				</div>
				<div className="absolute left-1/2 translate-x-[-50%] top-5 z-[1000]">
					<ColorIndicator />
				</div>
				<div className="absolute right-5 top-1/2 translate-y-[-50%] z-[1000] uppercase">
					<div data-aos="fade-left" data-aos-easing="ease-out-back" data-aos-duration="1000">
						<TopCitiesTable
							data={top10MostInfectedCities}
							title="with Most Cases"
							type="most"
						/>
						<TopCitiesTable
							data={top10LeastInfectedCities}
							title="with Least Cases"
							type="least"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;

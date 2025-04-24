import { VisualizationMap } from "@/components/hospital/VisualizationMap";
import ScrollToTop from "@/components/ScrollToTop";
import BarChart from "@/pages/dashboard/components/BarChart";
import PieChart from "@/pages/dashboard/components/PieChart";
import DailyThresholdStats from "./components/DailyThresholdStats";
import InfectionSource from "./components/InfectionSource";

const Dashboard = () => {
	return (
		<div className="w-full h-screen px-6 py-4 overflow-auto">
			<div className="text-3xl font-bold mb-6 uppercase flex flex-col tracking-wider">
				<span className="text-dark-green">Comprehensive Report</span>{" "}
				<span className="text-custom-purple ml-40">of COVID-19 in Vietnam</span>
			</div>
			<div className="grid grid-cols-2 gap-6 ">
				<div className="w-[70%]">
					<PieChart />
					<BarChart />
				</div>
				<div className="w-full max-w-[800px] flex flex-col gap-12">
					<DailyThresholdStats />
					<InfectionSource />
				</div>
			</div>
			<h2 className="text-xl font-bold uppercase text-custom-purple mb-8">
				COVID Treatment Centers
			</h2>
			<div className="w-full h-screen relative">
				<VisualizationMap />
				<ScrollToTop />
			</div>
		</div>
	);
};

export default Dashboard;

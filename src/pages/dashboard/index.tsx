import BarChart from "@/pages/dashboard/components/BarChart";
import PieChart from "@/pages/dashboard/components/PieChart";
import DailyThresholdStats from "./components/DailyThresholdStats";
import InfectionSource from "./components/InfectionSource";

const Dashboard = () => {
	return (
		<div className="w-full h-full px-6 py-4">
			<div className="text-2xl font-bold mb-6 uppercase flex flex-col tracking-wider">
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
		</div>
	);
};

export default Dashboard;

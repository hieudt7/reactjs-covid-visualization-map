import { dailyThreshold } from "../constant";
import ThresholdItem from "./ThresholdItem";

const DailyThresholdStats = () => {
	return (
		<div className="flex justify-center gap-16">
			{dailyThreshold.map((item) => (
				<ThresholdItem key={item.description} {...item} />
			))}
		</div>
	);
};

export default DailyThresholdStats;

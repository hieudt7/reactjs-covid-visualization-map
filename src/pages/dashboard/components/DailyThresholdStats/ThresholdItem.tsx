import { DailyThresholdItem } from "@/types/dashboard";

const ThresholdItem = ({ numerator, description }: DailyThresholdItem) => {
	return (
		<div className="flex flex-col items-center gap-8 max-w-40">
			<div className="flex items-baseline">
				<span className="text-5xl font-bold text-orange-500">{numerator}</span>
				<div className="flex items-center ml-0.5">
					<div className="h-8 w-[3px] bg-custom-purple rotate-[25deg] translate-y-4"></div>
					<span className="text-3xl text-custom-purple translate-y-6 ml-1 font-medium">
						63
					</span>
				</div>
			</div>
			<p className="text-sm text-dark-green leading-tight">{description}</p>
		</div>
	);
};

export default ThresholdItem;

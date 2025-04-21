import { COLOR_THRESHOLDS } from "@/utils/map";

interface ColorThreshold {
	color: string;
	threshold: number;
}

const ColorIndicator = () => {
	return (
		<div className="w-80 bg-white/80 p-4 rounded-md shadow-md">
			<div className="flex flex-col gap-2">
				<div className="flex h-5">
					{COLOR_THRESHOLDS.map(({ color }: ColorThreshold, index: number) => (
						<div
							key={color}
							style={{
								width: `${100 / COLOR_THRESHOLDS.length}%`,
								backgroundColor: color,
								borderRadius:
									index === 0
										? "3px 0 0 3px"
										: index === COLOR_THRESHOLDS.length - 1
											? "0 3px 3px 0"
											: "0",
							}}
						/>
					))}
				</div>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					{COLOR_THRESHOLDS.map(({ threshold }: ColorThreshold) => (
						<span
							key={threshold}
							style={{
								fontSize: "12px",
								color: "#333",
							}}
						>
							{threshold}
						</span>
					))}
				</div>
				<div className="text-sm text-gray-600 mt-2">Daily COVID-19 Cases</div>
			</div>
		</div>
	);
};

export default ColorIndicator;

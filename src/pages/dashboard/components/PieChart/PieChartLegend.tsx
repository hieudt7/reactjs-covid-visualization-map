interface LegendItemProps {
	color: string;
	label: string;
	percentage: number;
}

interface PieChartLegendProps {
	firstDoseProportion: number;
	secondDoseProportion: number;
	noDoseProportion: number;
}

const LegendItem: React.FC<LegendItemProps> = ({
	color,
	label,
	percentage,
}) => (
	<div className="flex items-center gap-2">
		<div className="w-4 h-4 rounded-sm" style={{ backgroundColor: color }} />
		<span className="text-sm text-dark-green">{label}</span>
		<span className="text-sm font-semibold text-gray-900">
			{Math.round(percentage)}%
		</span>
	</div>
);

const PieChartLegend: React.FC<PieChartLegendProps> = ({
	firstDoseProportion,
	secondDoseProportion,
	noDoseProportion,
}) => {
	return (
		<div className="flex gap-8 p-4 bg-white rounded-lg shadow-sm absolute bottom-10">
			<LegendItem
				color="mediumpurple"
				label="No doses"
				percentage={noDoseProportion * 100}
			/>
			<LegendItem
				color="gold"
				label="1 dose"
				percentage={firstDoseProportion * 100}
			/>
			<LegendItem
				color="mediumseagreen"
				label="2 doses"
				percentage={secondDoseProportion * 100}
			/>
		</div>
	);
};

export default PieChartLegend;

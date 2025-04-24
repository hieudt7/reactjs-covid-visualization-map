interface LegendItemProps {
	color: string;
	label: string;
}

const LegendItem: React.FC<LegendItemProps> = ({ color, label }) => (
	<div className="flex items-center gap-2">
		<div className="w-4 h-4 rounded-sm" style={{ backgroundColor: color }} />
		<span className="text-sm text-dark-green">{label}</span>
	</div>
);

const PieChartLegend: React.FC = () => {
	return (
		<div className="flex gap-8 p-4 bg-white rounded-lg shadow-sm absolute bottom-9">
			<LegendItem color="mediumseagreen" label="Deaths" />
			<LegendItem color="gold" label="Infected" />
			<LegendItem color="mediumpurple" label="Recovered" />
		</div>
	);
};

export default PieChartLegend;

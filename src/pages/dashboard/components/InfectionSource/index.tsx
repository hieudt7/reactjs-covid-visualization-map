import { sources } from "../constant";

const InfectionSource = () => {
	return (
		<div className="bg-white p-6 rounded-lg shadow-md">
			<div className="flex items-center gap-2 mb-6 font-bold uppercase">
				<div className="bg-dark-green text-white  flex items-center justify-center rounded-lg text-4xl  px-4 py-2">
					{sources.length}
				</div>
				<h2 className="text-xl">
					<span className="text-custom-purple "> Primary Source of</span> <br />
					<span className="text-dark-green">COVID-19 transmission</span>
				</h2>
			</div>

			<div className="space-y-6">
				{sources.map((item) => (
					<div
						key={item.title}
						className="flex items-center justify-between text-dark-green border-b border-gray-200 pb-4"
					>
						<div className="flex items-center gap-4">
							<img
								src={item.image}
								alt={item.title}
								className="w-16 h-auto rounded-lg"
							/>
							<span className="font-medium">{item.title}</span>
						</div>
						<div className="text-left text-sm">
							<p>Accounts for</p>
							<p className="font-bold text-custom-purple text-xl">
								{item.percentage}%
							</p>
							<p>of the source of infection</p>
						</div>
					</div>
				))}
			</div>

			<div className="mt-6 text-xs text-gray-500 italic">
				Source: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</div>
		</div>
	);
};

export default InfectionSource;

import mockData from "@/data/mockData.json";
import useMapStore from "@/store/useMapStore";
import {
	formatProvinceName,
	getTopProvincesByCases,
	normalText,
} from "@/utils/map";

const TopCitiesTable = () => {
	const setCameraPosition = useMapStore((state) => state.setCameraPosition);
	const provincesWithData = getTopProvincesByCases(mockData);

	return (
		<div className="w-80 bg-gradient-to-br from-white to-green-50/20 p-4 rounded-lg shadow-lg mt-4 backdrop-blur-sm border border-green-100/30">
			<div className="flex items-center justify-between mb-3">
				<h3 className="text-base font-semibold bg-gradient-to-r from-green-400 to-yellow-300 bg-clip-text text-transparent">
					Top 10 Cities Today
				</h3>
				<span className="text-xs text-green-400/70">
					Updated: {new Date().toLocaleDateString()}
				</span>
			</div>
			<div className="overflow-x-auto">
				<table className="w-full text-sm">
					<thead>
						<tr className="border-b border-green-100/30">
							<th className="text-left py-2 px-2 font-medium text-green-500">
								#
							</th>
							<th className="text-left py-2 px-2 font-medium text-green-500">
								City
							</th>
							<th className="text-right py-2 px-2 font-medium text-green-500">
								Cases
							</th>
							<th className="text-right py-2 px-2 font-medium text-green-500">
								Deaths
							</th>
						</tr>
					</thead>
					<tbody>
						{provincesWithData.map((province, index) => (
							<tr
								key={province.name}
								className="border-b border-green-50/30 hover:bg-green-50/20 transition-colors cursor-pointer"
								onClick={() =>
									setCameraPosition({ activeMesh: normalText(province.name) })
								}
							>
								<td className="py-2 px-2 text-green-400/80">{index + 1}</td>
								<td className="py-2 px-2 font-medium text-green-600">
									{formatProvinceName(province.name)}
								</td>
								<td className="py-2 px-2 text-right font-medium text-red-300">
									{province.cases.toLocaleString()}
								</td>
								<td className="py-2 px-2 text-right text-green-400/80">
									{province.deaths.toLocaleString()}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="mt-3 text-xs text-green-400/60 text-right">
				* Data source: Ministry of Health
			</div>
		</div>
	);
};

export default TopCitiesTable;

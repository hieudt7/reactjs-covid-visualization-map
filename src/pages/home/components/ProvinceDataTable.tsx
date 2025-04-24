import mockData from "@/data/mockData.json";
import useMapStore from "@/store/useMapStore";
import {
	formatProvinceName,
	getTopProvincesByCases,
	normalText,
} from "@/utils/map";

const ProvinceDataTable = () => {
	const setCameraPosition = useMapStore((state) => state.setCameraPosition);
	const provincesWithData = getTopProvincesByCases({
		data: mockData,
		pageSize: 0,
		ascending: false,
	});

	return (
		<div className="w-80 bg-gradient-to-br from-white to-green-50/20 p-4 rounded-lg shadow-lg mt-4 backdrop-blur-sm border border-green-100/30">
			<div className="flex items-center justify-between mb-3 uppercase">
				<h3 className="text-base font-semibold text-[#28667e]">All cities</h3>
				<span className="text-xs text-[#28667e]">
					Updated: {new Date().toLocaleDateString()}
				</span>
			</div>
			<div className="overflow-y-auto h-[70vh]">
				<table className="w-full text-sm">
					<thead>
						<tr className="border-b border-green-100/30">
							<th className="text-left py-2 px-2 font-medium text-[#28667e]">
								#
							</th>
							<th className="text-left py-2 px-2 font-medium text-[#28667e]">
								City
							</th>
							<th className="text-right py-2 px-2 font-medium text-[#28667e]">
								Cases
							</th>
							<th className="text-right py-2 px-2 font-medium text-[#792884]">
								Deaths
							</th>
						</tr>
					</thead>
					<tbody>
						{provincesWithData.map((province, index) => (
							<tr
								key={`${province.name}-${index}`}
								className="border-b border-green-50/30 hover:bg-green-50/20 transition-colors cursor-pointer hover:bg-[#28667e21]"
								onClick={() =>
									setCameraPosition({ activeMesh: normalText(province.name) })
								}
							>
								<td className="py-2 px-2 text-[#28667e]">{index + 1}</td>
								<td className="py-2 px-2 font-medium text-[#28667e]">
									{formatProvinceName(province.name)}
								</td>
								<td className="py-2 px-2 text-right font-medium text-[#28667e]">
									{province.cases.toLocaleString()}
								</td>
								<td className="py-2 px-2 text-right text-[#792884]">
									{province.deaths.toLocaleString()}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="mt-3 text-xs text-[#28667e] text-right">
				* Data source: Ministry of Health
			</div>
		</div>
	);
};

export default ProvinceDataTable;

import useMapStore from "@/store/useMapStore";
import { ProvinceReportData } from "@/types/home";
import {
	formatProvinceName,
	normalText,
} from "@/utils/map";

interface TopCitiesTableProps {
	data: ProvinceReportData[];
	title:string;
	type: 'most' | 'least';
}

const TopCitiesTable = ({data, title, type}: TopCitiesTableProps) => {
	const setCameraPosition = useMapStore((state) => state.setCameraPosition);
	// const top10MostInfectedCities = getTopProvincesByCases({ data: mockData, pageSize: 10, ascending: false });
	// const top10LeastInfectedCities = getTopProvincesByCases({ data: mockData, pageSize: 10, ascending: true });

	return (
		<>
			<div className={`top-cities-table relative ${type === 'most' ? 'warning-styles' : 'available-styles'}`}>
				<div className="top-cities-title flex gap-2">
					<span className="top-cities-number">10</span>
					<div className="top-cities-description-container">
						<span className="top-cities-description">TỈNH THÀNH</span>
						<span className="top-cities-sub-description">{title}</span>
					</div>
				</div>
				<table>
					<tbody>
						{data.length > 0 && data.map((province, index) => (
							<tr
								key={`${province.name}-${index}`}
								className="table-chart-content border-b border-green-50/30 hover:bg-green-50/20 transition-colors cursor-pointer"
								onClick={() =>
									setCameraPosition({ activeMesh: normalText(province.name) })
								}
							>
								<td className="px-2">{index + 1}</td>
								<td className="px-2 font-medium">
									{formatProvinceName(province.name)}
								</td>
								<td className="text-left font-medium text-red-300 w-[150px]">
									<div
										className="table-chart-bg px-2"
										style={{
											width: `${(province.cases / ((type === 'most' ? data[0]?.cases : data[data.length - 1]?.cases) || 1)) * 100}%`,
											minWidth: '25%'
										}}
									>
										<span className="text-white text-[10px]">{province.cases.toLocaleString()}</span>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default TopCitiesTable;

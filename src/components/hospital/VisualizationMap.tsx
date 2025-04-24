import Config from "@/constant/config";
import { BUILDINGS, type Building } from "@/data/hospital";
import {
	AmbientLight,
	LightingEffect,
	_SunLight as SunLight,
} from "@deck.gl/core";
import { MapboxOverlay as DeckOverlay } from "@deck.gl/mapbox";
import { ScenegraphLayer } from "@deck.gl/mesh-layers";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import {
	GeolocateControl,
	Map,
	NavigationControl,
	useControl,
} from "react-map-gl";
import { LocationSelected, Telephone, User, Ambulance } from "@mynaui/icons-react";

const INITIAL_VIEW_STATE = {
	longitude: 105.8419,
	latitude: 21.0022,
	zoom: 14,
	pitch: 60,
	bearing: 0,
	antialias: true,
};

const MAPBOX_ACCESS_TOKEN = Config.mapBoxUrl;

interface HoverInfo {
	x: number;
	y: number;
	building: Building | null;
}
const DeckGLOverlay = (props: {
	layers: any[];
	effects: any[];
	controller: boolean;
}) => {
	const overlay = useControl(() => new DeckOverlay(props));
	overlay.setProps(props);
	return null;
};

export const VisualizationMap: React.FC = () => {
	const [hoverInfo, setHoverInfo] = useState<HoverInfo | null>(null);

	const sun = new SunLight({
		timestamp: Date.now(),
		color: [255, 255, 255],
		intensity: 1.0,
	});
	const ambientLight = new AmbientLight({
		color: [255, 255, 255],
		intensity: 1,
	});
	const lightingEffect = new LightingEffect({ sun, ambientLight });

	const createBuildingLayers = () => {
		return BUILDINGS.map(
			(building) =>
				new ScenegraphLayer({
					id: `building-layer-${building.id}`,
					data: [building],
					scenegraph: building.modelPath,
					getPosition: (d) => d.coordinates,
					getOrientation: [0, 0, 90],
					sizeScale: building.scale || 1,
					pickable: true,
					onClick: () => {
						console.log("Clicked building:", building.name);
						console.log("Clicked building:", building);
					},
					onHover: (info) => {
						if (info.object) {
							setHoverInfo({
								x: info.x,
								y: info.y,
								building: building,
							});
						} else {
							setHoverInfo(null);
						}
					},
				})
		);
	};

	return (
		<>
			<Map
				mapStyle="mapbox://styles/mapbox/light-v9"
				mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
				initialViewState={INITIAL_VIEW_STATE}
				onLoad={(event) => {
					const map = event.target;
					const geocoder = new MapboxGeocoder({
						accessToken: MAPBOX_ACCESS_TOKEN,
						mapboxgl: mapboxgl as any,
						language: "en",
						placeholder: "Search for a location",
						types: "place,locality,neighborhood",
						marker: false,
						flyTo: {
							zoom: 16,
							speed: 1.2,
							curve: 1,
							easing: (t: number) => t,
						},
					});
					map.addControl(geocoder, "top-left");
				}}
			>
				<DeckGLOverlay
					layers={createBuildingLayers()}
					effects={[lightingEffect]}
					controller
				/>
				<GeolocateControl position="top-right" />
				<NavigationControl position="top-right" />
			</Map>

			{hoverInfo && (
				<div
					className="absolute z-10 bg-white p-4 rounded-lg shadow-md min-w-[300px] text-dark-green"
					style={{
						left: hoverInfo.x + 10,
						top: hoverInfo.y + 10,
						pointerEvents: "none",
					}}
				>
					<div className="text-lg font-bold mb-3 text-custom-purple">
						{hoverInfo.building?.name}
					</div>
					<div className="text-sm mb-2 text-dark-green flex items-center gap-2">
						<span className="text-base"><LocationSelected /></span>
						{hoverInfo.building?.address}
					</div>
					{hoverInfo.building?.phone && (
						<div className="text-sm mb-2 text-dark-green flex items-center gap-2">
							<span className="text-base"><Telephone /></span>
							{hoverInfo.building.phone}
						</div>
					)}
					<div
						className={`text-sm mb-2 font-semibold flex items-center gap-2 
                        ${hoverInfo.building?.status === "available" ? "text-green-600" : "text-red-600"}`}
					>
						<span className="text-base"><Ambulance /></span>
						Status:{" "}
						{hoverInfo.building?.status === "available" ? "Available" : "Full"}
					</div>
					<div className="text-sm text-dark-green flex items-center gap-2">
						<span className="text-base"><User /></span>
						Patient count: {hoverInfo.building?.patients}
					</div>
				</div>
			)}
		</>
	);
};

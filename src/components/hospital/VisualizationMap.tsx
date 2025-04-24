import Config from "@/constant/config";
import DeckGL from "@deck.gl/react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Map } from "react-map-gl";
import {
    AmbientLight,
    LightingEffect,
    _SunLight as SunLight,
} from "@deck.gl/core";
import { ScenegraphLayer } from '@deck.gl/mesh-layers';
import { useState } from 'react';
import { BUILDINGS, type Building } from '@/data/hospital';

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
        return BUILDINGS.map(building => 
            new ScenegraphLayer({
                id: `building-layer-${building.id}`,
                data: [building],
                scenegraph: building.modelPath,
                getPosition: d => d.coordinates,
                getOrientation: [0, 0, 90],
                sizeScale: building.scale || 1,
                pickable: true,
                onClick: () => {
                    console.log('Clicked building:', building.name);
                    console.log('Clicked building:', building);
                },
                onHover: (info) => {
                    if (info.object) {
                        setHoverInfo({
                            x: info.x,
                            y: info.y,
                            building: building
                        });
                    } else {
                        setHoverInfo(null);
                    }
                }
            })
        );
    };

    return (
        <>
            <DeckGL
                initialViewState={INITIAL_VIEW_STATE}
                controller
                effects={[lightingEffect]}
                layers={createBuildingLayers()}
            >
                <Map
                    mapStyle="mapbox://styles/mapbox/light-v9"
                    mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
                    onLoad={(event) => {
                        const map = event.target;
                        map.addControl(
                            new mapboxgl.NavigationControl({
                                showCompass: true,
                                showZoom: true,
                                visualizePitch: true,
                            }),
                            "top-right"
                        );
                        map.addLayer({
                            id: "3d-buildings",
                            source: "composite",
                            "source-layer": "building",
                            filter: ["==", "extrude", "true"],
                            type: "fill-extrusion",
                            minzoom: 15,
                            paint: {
                                "fill-extrusion-color": "#aaa",
                                "fill-extrusion-height": [
                                    "interpolate",
                                    ["linear"],
                                    ["zoom"],
                                    15,
                                    0,
                                    15.05,
                                    ["get", "height"],
                                ],
                                "fill-extrusion-base": [
                                    "interpolate",
                                    ["linear"],
                                    ["zoom"],
                                    15,
                                    0,
                                    15.05,
                                    ["get", "min_height"],
                                ],
                                "fill-extrusion-opacity": 0.6,
                            },
                        });
                    }}
                />
            </DeckGL>
            {hoverInfo && (
                <div
                    className="absolute z-10 bg-white p-4 rounded-lg shadow-md min-w-[300px]"
                    style={{
                        left: hoverInfo.x + 10,
                        top: hoverInfo.y + 10,
                        pointerEvents: 'none'
                    }}
                >
                    <div className="text-lg font-bold mb-3 text-gray-800">
                        {hoverInfo.building?.name}
                    </div>
                    <div className="text-sm mb-2 text-gray-600 flex items-center gap-2">
                        <span className="text-base">📍</span>
                        {hoverInfo.building?.address}
                    </div>
                    {hoverInfo.building?.phone && (
                        <div className="text-sm mb-2 text-gray-600 flex items-center gap-2">
                            <span className="text-base">☎</span>
                            {hoverInfo.building.phone}
                        </div>
                    )}
                    <div className={`text-sm mb-2 font-semibold flex items-center gap-2 
                        ${hoverInfo.building?.status === 'available' ? 'text-green-600' : 'text-red-600'}`}
                    >
                        <span className="text-base">⚡</span>
                        Trạng thái: {hoverInfo.building?.status === 'available' ? 'Còn chỗ' : 'Đã đầy'}
                    </div>
                    <div className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="text-base">👥</span>
                        Số bệnh nhân: {hoverInfo.building?.patients}
                    </div>
                </div>
            )}
        </>
    );
};

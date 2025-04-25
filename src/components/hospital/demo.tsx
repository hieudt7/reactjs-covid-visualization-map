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

// Cấu hình view state ban đầu của bản đồ (Hà Nội)
const INITIAL_VIEW_STATE = {
    longitude: 105.85,  // Kinh độ Hà Nội
    latitude: 21.029,   // Vĩ độ Hà Nội
    zoom: 18,          // Mức zoom
    pitch: 60,         // Góc nghiêng camera
    bearing: 0,        // Góc xoay bản đồ
    antialias: true,   // Bật làm mịn cạnh
};

// Token truy cập Mapbox từ config
const MAPBOX_ACCESS_TOKEN = Config.mapBoxUrl;

interface Building {
    id: string;
    name: string;
    coordinates: [number, number, number]; // [longitude, latitude, altitude]
    modelPath: string;
    scale?: number;
}

// Danh sách các tòa nhà
const BUILDINGS: Building[] = [
    {
        id: 'hospital-bach-mai',
        name: 'Bệnh viện Bạch Mai',
        coordinates: [105.8419, 21.0022, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2
    },
    {
        id: 'hospital-viet-duc',
        name: 'Bệnh viện Việt Đức',
        coordinates: [105.8486, 21.0196, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2
    },
    {
        id: 'hospital-108',
        name: 'Bệnh viện Trung ương Quân đội 108',
        coordinates: [105.8502, 21.0183, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2
    },
    {
        id: 'hospital-e',
        name: 'Bệnh viện E Hà Nội',
        coordinates: [105.7969, 21.0289, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2
    },
    {
        id: 'hospital-thanh-nhan',
        name: 'Bệnh viện Thanh Nhàn',
        coordinates: [105.8562, 21.0075, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2
    },
    {
        id: 'hospital-saint-paul',
        name: 'Bệnh viện Saint Paul',
        coordinates: [105.8474, 21.0219, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2
    },
    {
        id: 'hospital-vinmec',
        name: 'Bệnh viện Vinmec Times City',
        coordinates: [105.8686, 20.9947, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2
    },
    {
        id: 'hospital-hong-ngoc',
        name: 'Bệnh viện Hồng Ngọc',
        coordinates: [105.7927, 21.0350, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2
    },
    {
        id: 'hospital-103',
        name: 'Bệnh viện Quân y 103',
        coordinates: [105.7836, 21.0472, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2
    },
    {
        id: 'hospital-k',
        name: 'Bệnh viện K Tân Triều',
        coordinates: [105.7978, 20.9647, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2
    }
];

const createBuildingLayers = () => {
    return BUILDINGS.map(building => 
        new ScenegraphLayer({
            id: `building-layer-${building.id}`,
            data: [building],
            scenegraph: '/models/hospital_building.glb',
            getPosition: d => d.coordinates,
            getOrientation: [0, 0, 90],
            sizeScale: building.scale || 1,
            pickable: true,
            onClick: () => {
                console.log('Clicked building:', building.name);
                console.log('Clicked building:', building);
            }
        })
    );
};

export const VisualizationMap: React.FC = () => {
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

    return (
        <DeckGL
            initialViewState={INITIAL_VIEW_STATE}
            controller
            effects={[lightingEffect]}
            layers={createBuildingLayers()} // Không cần spread operator vì map đã trả về array
        >
            <Map
                mapStyle="mapbox://styles/mapbox/light-v9"
                mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
                onLoad={(event) => {
                    const map = event.target;

                    // Thêm controls
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
    );
};

import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { Tooltip } from "react-tooltip";

const geoUrl = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

const cities: { name: string; coordinates: [number, number]; info: string }[] = [
    { name: "Casablanca", coordinates: [-7.5898, 33.5731], info: "Capitale économique du Maroc." },
    { name: "Rabat", coordinates: [-6.8326, 34.0209], info: "Capitale administrative du Maroc." },
    { name: "Marrakech", coordinates: [-7.9811, 31.6295], info: "Ville touristique emblématique." },
    { name: "Fès", coordinates: [-4.9998, 34.0331], info: "Capitale culturelle du Maroc." },
    { name: "Tanger", coordinates: [-5.7998, 35.7595], info: "Grand port et carrefour international." },
    { name: "Agadir", coordinates: [-9.5981, 30.4278], info: "Station balnéaire prisée." }
];


const MapMaroc = () => {
    return (
        <div className="relative">
            <Tooltip id="city-tooltip" />
            <ComposableMap projection="geoMercator" projectionConfig={{ scale: 1200 }} width={800} height={600}>
                <Geographies geography={geoUrl}>
                    {({ geographies }: { geographies: any[] }) => geographies.map((geo: any) => (

                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill="#DDD"
                            stroke="#FFF"
                            className="transition-colors duration-300 hover:fill-blue-300"
                        />
                    ))
                    }
                </Geographies>
                {cities.map((city, index) => (
                    <Marker key={index} coordinates={city.coordinates}>
                        <circle
                            cx={0}
                            cy={0}
                            r={6}
                            fill="#ff5733"
                            stroke="#fff"
                            strokeWidth={2}
                            data-tip={city.info}
                            data-for="city-tooltip"
                        />
                        <text
                            textAnchor="middle"
                            y={-10}
                            className="fill-black text-xs font-bold"
                        >
                            {city.name}
                        </text>
                    </Marker>
                ))}
            </ComposableMap>
        </div>
    );
};

export default MapMaroc;

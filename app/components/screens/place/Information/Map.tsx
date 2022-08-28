import React, {FC} from "react";
import styles from '../Information/Information.module.scss'
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker, ZoomableGroup
} from "react-simple-maps";
import {TypeLocation} from "../../../../types/place";


const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

const Map:FC<{location: TypeLocation}> = ({location}) => {
    return (
        <div className={styles.map}>
            <ComposableMap
                projectionConfig={{
                    center: [0, 0],
                }}
                width={285}
                height={140}
            >
                <ZoomableGroup zoom={0.3} maxZoom={1} minZoom={0.3}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => {
                                const isCurrent = geo.properties.name === location.country.eng[0].toUpperCase() + location.country.eng.slice(1)

                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={isCurrent ? '#eb601e' : '#39373B'}
                                        stroke={isCurrent ? 'transparent' : '#2D2B2F'}
                                        style={{
                                            default: { outline: 'none' },
                                            hover: { outline: 'none' },
                                            pressed: { outline: 'none' },
                                        }}
                                    />
                                )
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
             </ComposableMap>
        </div>
    );
};

export default Map;

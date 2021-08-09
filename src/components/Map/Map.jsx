import React, { useState, useEffect } from 'react'
import {
    GoogleMap,
    useLoadScript,
    Marker,
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
    height: "100vh",
    width: "100vw",
};
const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
};
const center = {
    lat: 40.69,
    lng: -73.79,
};

const Map = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyBYbAlSWN1gUz5QMhkV9esGebDWDsg0ZCk",
        libraries,
    });
    const [markers, setMarkers] = useState([]);
    const [dogParks, setDogParks] = React.useState([])
    const [selected, setSelected] = useState(null);


    useEffect(() => {
        const tomtom = `https://api.tomtom.com/search/2/poiSearch/dog%20park.json?lat=40.69&lon=-73.79&radius=1000&key=rna21jhsFa14jRA7PdiHoysupvIjza4t`
        const makeApiCall = async () => {
            const res = await fetch(tomtom);
            const dogParkData = await res.json();
            setDogParks(dogParkData.results)
        };
        makeApiCall();
    }, []);

    const onMapClick = React.useCallback((e) => {
        setMarkers((current) => [
            ...current,
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
                time: new Date(),
            },
        ]);
    }, []);

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";


    return (
        <>
            <h1>MAP COMPONENT!</h1>
            <Locate panTo={panTo} />
            <GoogleMap
                id="map"
                mapContainerStyle={mapContainerStyle}
                zoom={8}
                center={center}
                options={options}
                onClick={onMapClick}
                onLoad={onMapLoad}

            >
                {dogParks.map((park) => (
                    <Marker
                        key={park.id}
                        position={{ lat: park.position.lat, lng: park.position.lon }}
                        onClick={() => {
                            setSelected(park);
                        }}
                        icon={{
                            url: `/dog-treat.png`,
                            origin: new window.google.maps.Point(0, 0),
                            anchor: new window.google.maps.Point(15, 15),
                            scaledSize: new window.google.maps.Size(30, 30),
                        }}
                    />
                ))}
            </GoogleMap>
        </>
    )
}

function Locate({ panTo }) {
    return (
        <button
            className="locate"
            onClick={() => {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        panTo({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        });
                    },
                    () => null
                );
            }}

        >
            <h1>Your Location</h1>
        </button>
    );
}

export default Map;



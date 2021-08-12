import React, { useState, useEffect } from 'react'
import Lottie from 'react-lottie-player'
import mapLoading from '../../assets/animation/mapLoading.json'

import {
    GoogleMap,
    useLoadScript,
    Marker,
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
    height: "100%",
    width: "100%",
};
const options = {
    styles: mapStyles,
    disableDefaultUI: true,
};

const googleMapsApiKey = process.env.REACT_APP_API_KEY_GOOGLE_MAPS
const tomtomApiKey = process.env.REACT_APP_API_KEY_TOMTOM

const Map = (props) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: googleMapsApiKey,
        libraries,
    });
    const [dogParks, setDogParks] = useState([])
    const [selected, setSelected] = useState(null)
    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)

    useEffect(() => {
        (async () => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLat(parseFloat(position.coords.latitude))
                    setLng(parseFloat(position.coords.longitude))
                },
                () => null
            )
        })()
    }, [])

    useEffect(() => {
        !props.location &&
            (async () => {
                const tomtom = `https://api.tomtom.com/search/2/poiSearch/%22dog%20parks%22.json?limit=100&lat=${lat}&lon=${lng}&radius=2000&key=${tomtomApiKey}`
                const res = await fetch(tomtom)
                const { results } = await res.json();
                setDogParks(results)
            })();
    }, [lat, lng]);

    useEffect(() => {
        props.location &&
            (async () => {
                const tomtom = `https://api.tomtom.com/search/2/poiSearch/%22dog%20parks%22.json?limit=100&lat=${props.location.lat}&lon=${props.location.lon}&radius=2000&key=${tomtomApiKey}`
                const res = await fetch(tomtom)
                const { results } = await res.json();
                setDogParks(results)
                setLat(props.location.lat)
                setLng(props.location.lon)
            })();
    }, [props.location]);

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";

    return (
        lng ?
            <>
                <GoogleMap
                    id="map"
                    mapContainerStyle={mapContainerStyle}
                    zoom={14}
                    center={{ lat: lat, lng: lng }}
                    options={options}
                    onLoad={onMapLoad}
                >
                    {dogParks?.map((park) => (
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
            :
            <Lottie
                loop
                animationData={mapLoading}
                play
                speed={1}
                style={{ width: '100%', height: '100%' }}
            />

    )
}

export default Map;


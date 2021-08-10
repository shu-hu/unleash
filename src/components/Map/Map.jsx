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


const googleMapsApiKey = process.env.REACT_APP_API_KEY_GOOGLE_MAPS
const tomtomApiKey = process.env.REACT_APP_API_KEY_TOMTOM

const Map = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: googleMapsApiKey,
        libraries,
    });
    // const [markers, setMarkers] = useState([]);
    const [dogParks, setDogParks] = useState([])
    const [selected, setSelected] = useState(null)
    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)
    const [inputLat, setInputLat] = useState()
    const [inputLng, setInputLng] = useState()
    
    useEffect(() => {
        (async() => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLat(parseFloat(position.coords.latitude))
                    setLng(parseFloat(position.coords.longitude))
                },
                () => null
                )
    })()
    }, [])

    // useEffect(() => {
    //     const geocode = `https://api.tomtom.com/search/2/geocode/yankee%20stadium.json?&key=${tomtomApiKey}`
    //     const makeApiCall = async () => {
            // const res = await fetch(geocode)
            // const {results} = await res.json()
            // console.log('LOOKHERE!!!!', results)
            // setInputLat(results[0].position.lat)
            // setInputLng(results[0].position.lon)
            // setLat(inputLat)
            // setLng(inputLng)
    //     }
    //     makeApiCall()
    // }, [inputLng])

    useEffect(() => {
        const tomtom = `https://api.tomtom.com/search/2/poiSearch/%22dog%20parks%22.json?limit=100&lat=${lat}&lon=${lng}&radius=5000&key=${tomtomApiKey}`
        const makeApiCall = async () => {
            const res = await fetch(tomtom)
            const {results} = await res.json();
            setDogParks(results)
        };
        makeApiCall();
    }, [lng]);

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
            <GoogleMap
                id="map"
                mapContainerStyle={mapContainerStyle}
                zoom={14}
                center={{lat: lat, lng: lng}}
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
    )
}

export default Map;


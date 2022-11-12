import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { FC, useEffect, useRef, useState } from 'react';
import { defaultTheme } from './Theme';


const defaulOptions = {
    panControl: true,
    zoomControl: true,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    fullScreenControll: false,
    disableDefaultUI: true,

    styles: defaultTheme
  }

  const containerStyle = {
    width: '100%',
   height: '300px'
}

type LocationType = {
    lat: number
    long: number
}

type PropsType = {
    location: LocationType
}

export const MapContainer: FC<PropsType> = ({ location }) => {

    const [center, setCentr] =useState({ lat: Number(location.lat), lng: Number(location.long) });

    useEffect(() => {
        setCentr({ lat: Number(location.lat), lng: Number(location.long) })
        
    }, [location])

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCMw-qmPiIoRy7gQqaDOenf4m8qXC86tQo"
    });


    const mapRef = useRef<google.maps.Map | null>(null);


  const onLoad = (map: google.maps.Map ): void => {     
    mapRef.current = map;
  }

  const onUnmount = (): void => {
    mapRef.current = null;
  }


    return (
        <div className=''>
            <div className='w-full'>
               { isLoaded ? <GoogleMap
                    center={center}
                    mapContainerStyle={containerStyle}
                    zoom={10}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    options={defaulOptions}
                >
                    {center ? <MarkerF position={center} icon={{ url: '/icons/locationIcon.png' }} /> : 'Marker'}
                </GoogleMap> : 'map is loading....'}
                </div>
        </div>
    )
}
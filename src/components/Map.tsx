import { FC, useCallback, useEffect, useRef, useState } from "react";
import { GoogleMap, MarkerF, Marker } from '@react-google-maps/api';
import { Spot } from "./Spot";


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
}

type LocationType = {
    lat: number
    lng: number
}

type PropsType = {
    center: LocationType
}

export const Maps: FC<PropsType> = ({ center }) => {
  const [centers, setCentrs] =useState({ lat: Number(center.lat), lng: Number(center.lng) });

  const mapRef = useRef<google.maps.Map| null>(null);
  const onLoad = useCallback(function (map: google.maps.Map ): void {
      console.log('jkn');
      
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(): void {
    mapRef.current = null;
  }, []);

  useEffect(() => {
    console.log(mapRef);
    
}, [mapRef])


  useEffect(() => {
    setCentrs({ lat: Number(center.lat), lng: Number(center.lng) })
    
}, [center])

  return (
    <div className='map-container'>
      <GoogleMap
        center={centers}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaulOptions}
        mapContainerClassName='map'
      >
        {center ? <Marker icon={{ url: '/icons/spotIcon.svg' }} position={center} /> : 'Marker'}
        <Spot iconPath='/icons/spotIcon.svg' center={center} />
      </GoogleMap>
    </div>
  )
}
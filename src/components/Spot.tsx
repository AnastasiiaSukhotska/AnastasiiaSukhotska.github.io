import { Marker, MarkerF } from "@react-google-maps/api"
import { FC } from "react"

type LocationType = {
    lat: number
    lng: number
}

type PropsType = {
    center: LocationType
    iconPath: string
}
export const Spot: FC<PropsType> = ({ center, iconPath }) => {
   
    return (
        <MarkerF icon={{ url: iconPath }} position={center}   opacity={0}/>
    )
}
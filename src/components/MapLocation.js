import React from 'react'
import styled from 'styled-components'
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import { Icon } from 'leaflet'

const MapLocationStyled = styled.div`
z-index: -1;
 width:100%;
 height:70vh;
 border: 1px solid black;
 position: relative;
 top: -127px;
 
 left:0px;
 right:0px;
 .leaflet-container{
     width:100%;
     height:100%;
 }
 @media screen and (min-width:500px){
    top:-46px;
 }
`
export default function MapLocation({ position }) {
    let customIcon = new Icon({
        iconUrl:"./images/icon-location.svg" 
    });

    return (
        <MapLocationStyled>
            <MapContainer center={position} zoom={12} scrollWheelZoom={true} zoomControl={false} >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ZoomControl position={"bottomright"} zoomInText={"👀"} zoomOutText={"-"} />
                <Marker position={position} icon={customIcon}>
                    <Popup>
                        You Location
                     </Popup>
                </Marker>
            </MapContainer>
        </MapLocationStyled>
    )
}
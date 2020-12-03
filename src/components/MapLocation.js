import React from 'react'
import styled from 'styled-components'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapLocationStyled = styled.div`
z-index: -1;
 width:100%;
 height:70vh;
 border: 1px solid black;
 position: relative;
 top:-46px;
 left:0px;
 right:0px;
 .leaflet-container{
     width:100%;
     height:100%;
 }
`

export default function MapLocation({position}) {
    
    return (
        <MapLocationStyled>
                <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases">Open Bicycle render</a> contributors'
                        url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            You Location
                     </Popup>
                    </Marker>
                </MapContainer>
            


        </MapLocationStyled>
    )
}
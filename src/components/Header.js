import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Search from './Search';
import Data from './Data';
import MapLocation from './MapLocation';

const HeaderStyled = styled.div`
background-image: url("./images/pattern-bg.png");
width: 100%;
height:200px;
/* padding:20px; */
    h1{
        font-size: 20px;
        margin:0;
        color:white;
        align-self:center;
        font-weight:400;
    }
`

export default function Header({ title }) {
    const dummy = {
        ip: "0.0.0.0",
        isp: "Unknown",
        location: {
            city: "Unknown",
            region: "Unknown",
            timezone: "Unknown"
        }
    }
    const [data, setData] = useState(dummy)
    const [cords, setCords] = useState(null)
    const [searchString, setSearchString] = useState(data.ip)

    useEffect(() => {
        fetch('https://geo.ipify.org/api/v1?apiKey=at_oOhIBWtFLKXwQfDmjfqmVU3VXNkZw')
            .then(response => response.json())
            .then(data => {
                setData(data)
                setSearchString(data.ip)
                setCords([data.location.lat, data.location.lng])
            });
    }, [])

    const handlerSearch = (e) => {
        setSearchString(e.target.value)

    }
    const btnSearch = () => {
        fetch(`https://geo.ipify.org/api/v1?apiKey=at_oOhIBWtFLKXwQfDmjfqmVU3VXNkZw&ipAddress=${searchString}`)
            .then(response => response.json())
            .then(data => {
                if (data.code === 422) {
                    return setCords(null)
                }
                setData(data)
                setSearchString(data.ip)
                setCords(null)
                setCords([data.location.lat, data.location.lng])
            }).catch((err) => {
                console.log(err)
            })
    }
    return (
        <HeaderStyled>
            <h1>{title}</h1>
            <Search handlerSearch={handlerSearch} searchString={searchString} onClick={btnSearch} />
            <Data data={data}></Data>
            {cords
                ? <MapLocation position={cords}></MapLocation>
                : <div>...Check the IP</div>
            }
        </HeaderStyled>
    )
}
import React from 'react'
import styled from 'styled-components'
// import arrow from '../../public/images/icon-arrow.svg'
const SearchStyled = styled.div`
padding:10px 0;
max-width:600px;
margin:auto;
    input{
        outline: 0;
        width:70%;
        padding:10px;
        border-radius:10px;
        height:30px;
        border:none;
        text-align: initial;
        cursor:pointer;

    }
    button{
        cursor:pointer;
        outline: 0;
        color:white;
        background: black;
        padding:10px;
        height:30px;
        width: 50px;
        border-radius: 0 10px 10px 0;
        border:none;
        top:3px;
        position: relative;
        left: -15px;
        margin:0;
            img{
                display: inline-block;
                width: 8px;
                margin: 0;
                padding: 0;
            }

    }
`

export default function Serach({handlerSearch ,searchString, onClick}) {
    return (
        <SearchStyled>
            <input onChange={handlerSearch} value={searchString} placeholder="Search for any IP address or domain" type="text"/>
            <button onClick={onClick}>
                <img src="./images/icon-arrow.svg" alt="buscar"/>
            </button>
        </SearchStyled>
    )
}
import React from 'react'
import styled from 'styled-components'
import Search from './Search';
import Data from './Data';

const HeaderStyled = styled.div`
background-image: url("./images/pattern-bg.png");
width: 100%;
height:200px;
// display:flex;
// flex-direction:column;
// gap:100px;
padding:20px;
    h1{
        font-size: 20px;
        margin:0;
        color:white;
        align-self:center;
        font-weight:400;
    }
`

export default function Header({ title }) {
    return (
        <HeaderStyled>
            <h1>{title}</h1>
            <Search/>
            <Data></Data>
        </HeaderStyled>
    )
}
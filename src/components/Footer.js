import React from 'react'
import styled from 'styled-components'

const FooterStyled = styled.div`
position:absolute;
bottom:0;
left:0;
right:0;
font-size: 11px; 
text-align: center;
    a{
        color: hsl(228, 45%, 44%);
    }
`

export default function Footer() {
    return (
        <FooterStyled>
            Challenge by <a href="https://github.com/911harm/ip-tracker-react">Frontend Mentor</a>.
            Coded by <a href="https://github.com/911harm">911harm</a>.
        </FooterStyled>
    )
}
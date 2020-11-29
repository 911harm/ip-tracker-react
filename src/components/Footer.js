import React from 'react'
import styled from 'styled-components'

const FooterStyled = styled.div`
font-size: 11px; 
text-align: center;
    a{
        color: hsl(228, 45%, 44%);
    }
`

export default function Footer() {
    return (
        <FooterStyled>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a href="https://github.com/911harm">911harm</a>.
        </FooterStyled>
    )
}
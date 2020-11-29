import React from 'react'
import styled from 'styled-components'
 
const DataStyled = styled.div`
 width:100%;
 margin:auto;
 height:250px;
 background:white;
 border-radius:10px;
 padding:10px;
 box-shadow: 1px 1px 2px 0px black;
    ul{
        list-style:none;
        padding:0;
        li{
            display:block;
            h3{
                margin-top:3px;
                text-transform:uppercase;
                font-size:10px;
                font-weight:400;
                color:#333;
            }
            p{  margin-top:0px;
                margin-bottom:15px;
                // margin: 0.5em 0;
                font-weight:700;
            }
        }
    }
    @media screen and (min-width:500px){
        width:70%;
        height:30vh;
        max-height:150px;
        display:flex;
        ul{
            align-self:center;
            display:flex;
            padding: 10px;
            justify-content: space-around;
            li{
                h3{
                    text-align: initial;
                    margin:0;
                }
                border-right:1px solid black;
                padding-right: 20px;
                &:last-child{
                    border:none;
                }
            }

        }
    }
`
 
export default function Data() {
    return (
        <DataStyled>
            <ul>
                <li>
                    <h3>IP Address</h3>
                    <p>198.88.88.7</p>
                </li>
                <li>
                    <h3>Location </h3> 
                    <p>broklyn ayer todo</p>
                </li>
                <li>
                    <h3>Timezone</h3>
                    <p>UTC-875</p>
                </li>
                <li>
                    <h3>ISP</h3>
                    <p>Space-startlink</p>
                </li>
            </ul>
         {/* add offset value dynamically using the API  */}
        </DataStyled>
    )
}
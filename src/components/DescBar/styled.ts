import styled from "styled-components";
import Link from "next/link"
export const Bar= styled.div`
margin:0;
width: 100%;
background: #181818;
height:2.5rem;

;
`
export const MyP=styled.p`
color:white;
text-align: center;
margin-top: 0px;
font-family: Montserrat;
font-weight: 500;
font-size:1rem;
@media(max-width:1120px){
    font-size: 0.8rem;
}
`
export const Links=styled(Link)`
text-decoration:none;`

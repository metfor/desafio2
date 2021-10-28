import styled from "styled-components";
import img from "../../../public/j.svg"
import imgMobile from "../../../public/jmobile.svg"
export const Rectangle= styled.div`
    border: 1px solid #000;
  
    width: 100%;
    height: 23.625rem;
    background: rgba(0, 0, 0, .65) url(${img}) ;
    background-size: cover;
    background-blend-mode: darken;
    @media(max-width:1120px){
        background: rgba(0, 0, 0, .65) url(${imgMobile}) ;
        background-size: cover;
        background-blend-mode: darken;
        
    }
    
`
export const MyH1=styled.h1`
    font-family: Montserrat;
    font-weight: 700;
    font-size: 2rem;
    color: white;
    margin-top: 8.0625rem;
    margin-left: 6.25rem;
    @media(max-width:1120px){
        margin-left:1.25rem ;
        font-size: 1.70rem;
    }
`
export const MyP=styled.p`
    font-family: Montserrat;
    font-weight: 600;
    font-size: 1.25rem;
    margin-left: 6.25rem;
    color:white;
    line-height: 35.31px;
    @media(max-width:1120px){
        margin-left:1.25rem ;
        font-size: 0.8rem;
    }
`
import styled from "styled-components";
import image from"next/image"
export const MyH1=styled.h1`
    font-family: Montserrat;
    font-weight: 600;
    font-size: 2rem;
    text-align: center;
    margin-top: 3.625rem;
`
export const MyP=styled.p`
    font-family: Montserrat;
    font-weight: 500;
    font-size:1.125rem;
    text-align: center;

`
export const Container=styled.div`
display:flex;
max-width: 1120px;
margin: 0rem auto;
padding: 1rem 1rem 12rem;
@media(max-width:1120px){
    display:grid; 
    justify-content: center;
    
}
`
export const MyImg=styled(image)`
background:#EBE9EA;

`
export const ImgBox=styled.div`
margin:1rem;
`
export const Container2=styled.div`
display:flex;
max-width: 1120px;
margin: -10rem auto;
padding: 1rem 1rem 12rem;
@media(max-width:1120px){
    display:grid; 
    justify-content: center;  
}
`
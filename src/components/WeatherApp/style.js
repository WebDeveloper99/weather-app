import styled from "styled-components";
import { Sunny, Cloudy, Rain, Snow } from 'weather-styled-icon';


export const Container = styled.div`
display: flex;
height: 100vh;
background: url(${({bgImg})=> bgImg});
background-repeat: no-repeat;
background-size: cover;
transition: 1.5s linear all;

`

export const Wrapper = styled.div`
width: 100%;
height: 50vh;
display: flex;
flex-direction: column;
margin: auto 0;
align-items: center;
justify-content: center;

`



export const Input = styled.input`
display: flex;
background-color: rgba(0, 0, 0, 0.7);
box-shadow: 0 -8px 30px #000;
width: 45%;
padding: 20px 30px;
color: #fff;
border-radius: 20px;
font-size: 30px;
font-weight: 600;
border: none;
outline: none;
transition: 1s all ease-in-out;

`



export const Box = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: rgba(30, 30, 30, 0.8);
border-radius: 20px;
margin-top: 100px;
padding: 40px;
transition: 2s all ease-in;

`


export const StateLocation = styled.div`
text-align: center;
color: lightblue;
font-size: 50px;
font-weight: 900;

`


export const DateLocation = styled(StateLocation)`
color: white;
text-shadow: 0 0 50px ;
text-align: center;
font-size: 36px;
margin-top: 15px;
line-height: 70px;

`

export const Temp = styled(StateLocation)`
color: white;
text-shadow: 0 0 50px ;
text-align: center;
font-size: 46px;
margin-top: 15px;

`

export const Air = styled(StateLocation)`
color: ${({color})=> color ? color : 'white'};
text-shadow: 0 0 50px ;
text-align: center;
font-size: 36px;
margin-top: 15px;
line-height: 70px;

`



// ===================icons==================


export const Sun = styled(Sunny)`

`

export const Cloud = styled(Cloudy)`

`

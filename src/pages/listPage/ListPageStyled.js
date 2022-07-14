import styled from "styled-components"

export const HeaderListPage = styled.div`
height: 30vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background-color: #00bcd4;
margin-top: -50px;
position: fixed;
`
export const ContainerListPage = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: flex-start;
background-color: #27cb50;
margin-top: 145px;
height: 100vh;
`
export const Logo = styled.img`
background-repeat: no-repeat;
background-image: url(${props => props.img});
padding-top: 80px;
width: 300px;
height: 250px;
margin-top: -16px;
`
export const Card = styled.div`
box-sizing: border-box;
height: 180px;
width: 390px;
display: flex;
gap: 20px;
margin: 0 auto;
background-color: #fad309;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
margin-top: 10px;
transition: 1s;
&:hover {
    background-color: red;
}
`
export const ButtonsAndName = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
gap: 8px;
`
export const Tittle = styled.h2`
color: #10193c;
align-self: center;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
text-transform: capitalize;
`
export const Buttons = styled.button`
background-color: transparent;
border-radius: 10px;
border: 2px solid #10193c;
color: #10193c;
font-size: large;
cursor: pointer;
&:hover{
    background-color: #ff9800;
    box-shadow:
                1px 1px black,
                2px 2px black,
                3px 3px black;
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
}
`
export const ImagePokemon = styled.img`
margin-top: 5px;
margin-right: 5px;
max-width: 100%;
display: block;
height: 160px;
width: 160px;
transition: 1s;
&:hover {
    -webkit-transform: scale(1.4);
        -ms-transform: scale(1.4);
        transform: scale(1.4);
}
`
export const ButtonBack = styled.button`
height: 90px;
width: 90px;
border-radius: 50px;
background-color: #fad309;
position: absolute;
margin-left: -1150px;
margin-top: 55px;
cursor: pointer;
border: none;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);
&:hover {
  -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
}
`
export const Arrow = styled.img`
background-image: url(${props => props.img});
height: 60px;
width: 60px;
margin-right: 8px;
`

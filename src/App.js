import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Frase } from "./components/Frase";

const Contenedor = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 5rem;
flex-direction: column;
`

const Boton = styled.button`
background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
background-size: 300px;
font-family: Arial, Helvetica, sans-serif;
color: #fff;
margin-top: 3rem;
padding: 1rem 3rem;
font-size: 2rem;
border: 2px solid black;
transition: background-size .8s ease;
:hover{
  cursor: pointer;
  background-size: 400;
}
`
function App() {

  // state de frase
  const [frase, setFrase] = useState({})

  const consultarAPI = async () =>{
    const api = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const frase = await api.json();
    setFrase(frase[0])
  }

  //Cargar frase 

  useEffect(() => {
    consultarAPI()
  }, [])
  
  return (
    <Contenedor>
      <Frase
        frase={frase}
      ></Frase>
      <Boton
      onClick={consultarAPI}
      >
      Obtener frase
      </Boton>
    </Contenedor>
  );
}

export default App;

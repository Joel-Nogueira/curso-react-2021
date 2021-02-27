import React from 'react';

function AppFunction(props) {

  const modificarNome = event => {
    console.log(event.target.value);
  }

  const criaComboBox = () => {
     const opcoes = ["Joel", "Nogueira", "de", "Abreu", "Graça"];
     const comboBox = opcoes.map(opcoes => <option>{opcoes}</option>);
     return(
         <select>
           {comboBox}
         </select>
     )
   }

  const ComboBox = () => criaComboBox();

  return(
    <>
      <h1>Utilizando App como função</h1>
      <input className="textoCentralizado" type="text" value={props.nome} onChange={modificarNome}/>
      {/* class pode ser utilizado em html, mas é uma palavra reservada no jsx, por isto deve ser 
        * trocada por className
        */}
      <h1>Hello, {props.nome} sua idade é {props.idade}</h1>
      <ComboBox/>
    </>
  )
}

export default AppFunction;
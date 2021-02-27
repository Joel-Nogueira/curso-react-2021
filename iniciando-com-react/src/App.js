import React from 'react';

function ComponenteFuncao(){
  return (
    <h1>Hello</h1>
  )
}

class App extends React.Component{

  state = {
    nome: 'Joel Nogueira'
  }

  /*
    Para utilizar o this, referenciando a classe, em uma função padrão do tipo:
      modificarNome(event){}
    É necessário vincular esta função à classe da seguinte forma
      constructor(){
        super(); Chama o construtor da classe mãe, React.Component
        this.modificarNome = this.modificarNome.bind(this);
      }

  */

  componentDidMount(){
    console.log("Executou o componentDidMount");
  }

  modificarNome = (event) => {
    this.setState({
      nome: event.target.value
    })
  }

  /**
   * CRIANDO UM COMPONENTE COMO UMA FUNÇÃO
   */

   criaComboBox = () => {
     const opcoes = ["Joel", "Nogueira", "de", "Abreu", "Graça"];
     const comboBox = opcoes.map(opcoes => <option>{opcoes}</option>);
     return(
         <select>
           {comboBox}
         </select>
     )
   }

  render(){
    console.log("Executou o render");
    const MeuComboBox = () => this.criaComboBox(); /* A LETRA DEVE SER MAIÚSCULA */

    return(
      <>
      <h1>Utilizando App como classe</h1>
        <input type="text" value={this.state.nome} onChange={this.modificarNome}/>,
        <h1>Hello, {this.props.nome} sua idade é {this.props.idade}</h1>
       {/* UTILIZANDO O STATE <h1>Hello, {this.state.nome}</h1>, */}
       {/* O {} serve para utilizar código JavaScript dentro de uma tag */}
       
        <MeuComboBox/>
        {/* { this.criaComboBox() } */ }
        <hr/><hr/>
      </>

      /*
        Formas de retornar uma lista de objetos
        
        1ª forma
          <div> 
            <h1>Objeto 1</h1>
            <h2>Objeto 2</h2>
          <div/>

        2ª forma
          <React.Fragment> 
            <h1>Objeto 1</h1>
            <h2>Objeto 2</h2>
          <React.Fragment/>

        3ª forma
          <> O mesmo de React.Fragment
            <h1>Objeto 1</h1>
            <h2>Objeto 2</h2>
          </>

        4ª forma
          [
            <h1>Objeto 1</h1>, PRESTAR ATENÇÃO A VÍRGULA ENTRE AS TAGS
            <h2>Objeto 2</h2>
          ]
      */
    )
  }
}

export default App;
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

  modificarNome = (event) => {
    this.setState({
      nome: event.target.value
    })
  }

  render(){
    return(
      <>
        <input type="text" value={this.state.nome} onChange={this.modificarNome}/>
        <h1>Hello, {this.state.nome}</h1> {/* O {} serve para utilizar código JavaScript
                                              dentro de uma tag
                                           */}
      </>
    )
  }
}

export default App;
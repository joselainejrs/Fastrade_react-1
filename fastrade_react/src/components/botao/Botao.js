import React from 'react';

// SITE PARA APRENDER A COMPONENTIZAR https://blog.rocketseat.com.br/react-do-zero-componentizacao-propriedades-e-estado/
class Post extends React.Component {
    render() {
      return 
      <div className="botao_ficha_perfil">
      <div >
          <button
              type="submit"
              onClick={this.handleClick}
              value="Submit"
              className="botao_perfil">ALTERAR</button>
      </div>
  </div>
    }
  }
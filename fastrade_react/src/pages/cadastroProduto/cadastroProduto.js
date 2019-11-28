import React, {Component} from 'react';


class cadastroProduto extends Component{

    render(){
        return(
            <div className="container">
            <div className="card">
         
          <h1>Cadastro de Produto</h1>

            <div className="form-group">
                <label htmlFor="nomeProd">Nome do Produto</label>
                <div className="input-button">
                    <input id="nomeProd" type="text"/>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="precoProd">Preço do Produto</label>
                <div className="input-button">
                    <input id="precoProd" type="number"/>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="catProd">Categoria do Produto</label>
                <div className="input-button">
                    <select>
                        <option value="volvo">Grãos</option>
                        <option value="saab">Enlatado</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                      </select>
                   
                </div>
            </div>

            
            <div className="form-group">
                <label htmlFor="descProd">Descrição do Produto</label>
                <div className="input-button">
                    <input id="descProd" type="text"/>
                </div>
                
            </div>

            <div className="form-group">
                <label htmlFor="valProd">Validade do Produto</label>
                <div className="input-button">
                    <input id="valProd" type="date"/>
                </div>
            </div>

            <div className="buttons-area">
                <button className="botao">Incluir</button>
                <button className="botao">Alterar</button>
                <button className="botao">Excluir</button>
                <button className="botao">Sair</button>
            </div>
            
        </div>
    </div>


        );
    }
}
export default cadastroProduto;
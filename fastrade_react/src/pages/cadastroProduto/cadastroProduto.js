import React, {Component} from 'react';
import '../../assets/css/CadastroProduto.css';


class cadastroProduto extends Component{
    //Alteramos o estado de um elemento através do construtor 
    constructor(props){
        //Passamos o props para o componente com o super
        super(props);
        this.state = {

        listarProd:[],

        //Criamos um obj com o estado inicial do nosso form
            nomeProd:'',
            precoProd:'',
            categoriaId:'',
            descProd:'',
            valProd:''
        }
      
    }

    //Ciclo de vida 

    componentDidMount(){
        console.log('Carregado');
        console.log(this.listarProd);
        this.listarProdutos();
    }

            listarProdutos =() =>{
                fetch('https://localhost:5001/api/Catproduto')
                .then(response =>response.json())
                .then(data => this.setState({ listarProd : data }))
                .catch(error =>{
                    console.log(error)
                })
            }


    
    render(){
    
    
        
        //  const{nomeProd,PrecoProd,descProd,valProd} = this.state;
        return(
            <div className="container">
            <div className="card">
         
          <h1>Cadastro de Produto</h1>

            <div className="form-group">
                <label htmlFor="nomeProd">Nome do Produto</label>
                <div className="input-button">
                    <input 
                    id="nomeProd" 
                    type="text"
                    name = "NomeProd"
                   //  value ={nomeProd}
                   // onChange ={this.escutadorDeInput}
                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="precoProd">Preço do Produto</label>
                <div className="input-button">
                    <input id="precoProd"
                     type="number"
                     name = "PrecoProd"
                    //   value ={PrecoProd}
                  //  onChange = {this.escutadorDeInput}
                     />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="catProd">Categoria do Produto</label>
                <div className="input-button">
                    <select id ="descProd"
                    name ="categoriaId"
                    onChange ="">
                        {
                            this.state.listarProd.map(function(c){
                                return(
                                    
                                    <option key ={c.idCatProduto} value={c.idCatProduto}>
                                       {c.tipo}
                                    </option>

                                )
                            })
                        }
                        {/* <option value="">Enlatado</option>
                        <option value="">Opel</option>
                        <option value="">Audi</option> */}
                       
                      </select>
                   
                </div>
            </div>

            
            <div className="form-group">
                <label htmlFor="descProd">Descrição do Produto</label>
                <div className="input-button">
                    <input id="descProd"
                     type="text"
                     name = "DescProd"
                    // value ={descProd}
                   // onChange = {this.escutadorDeInput}
                     />
                </div>
                
            </div>

            <div className="form-group">
                <label htmlFor="valProd">Validade do Produto</label>
                <div className="input-button">
                    <input id="valProd" 
                    type="date"
                    name ="ValProd"
                    // value ={valProd}
                  //  onChange = {this.escutadorDeInput}
                    />
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
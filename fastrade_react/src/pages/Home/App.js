import React, { Component } from 'react';
import Cabecalho from '../../components/cabecalho/cabecalho';

//Aqui importamos imagens
import logo_banner from '../../assets/img/logo_banner.png';
import usuarioPng from '../../assets/img/usu_ario.png';
import shopPng from '../../assets/img/shop.png';
import negociarPng from '../../assets/img/nego_ciar.png';
import documentoPng from '../../assets/img/document_home.png';
import ClientePng from '../../assets/img/cliente_home.png';
import bannerFinal from '../../assets/img/img_2.png';

//importa Link  
import { Link } from 'react-router-dom';

//importamos a css da home
import Home from '../../assets/css/Home.css'
import { parseJwt } from '../../services/auth';
import cabecalho from '../../components/cabecalho/cabecalho';


//Aqui importamos paginas


//Aqui temos o ciclo de vida!
class App extends Component {
  UNSAFE_componentWillMount() {
    console.log('Carregando');
  }

  componentDidMount() {
    console.log('Carregado');
    this.listaAtualizada();
  }

  componentDidUpdate() {
    console.log("Update");
  }

  componentWillUnmount() {
    console.log("Unmount")
  }

  //declaramos um construtor com uma lista
  constructor() {
    super();
    this.state = {
      listaNomeOferta: [],
      listaImagem: []

    }

  }
  // temos uma lista atualizada onde escolhemos qual produto ira aparecer
  listaAtualizada = () => { 
    fetch("https://localhost:5001/api/oferta")
      .then(response => response.json())
      .then(data => this.setState({ listaNomeOferta: data }));
  }

  render() {
    return (
      <div className="App" >
      <cabecalho {...this.props}/>
        <div className="tod_home">
          <div className="estrut_frase">
            <p className="frase_dicas">
              Sem tempo para fazer Compras?<br />
              seja rápido, seja  FASTRADE</p>
            <Link to="/#" className="botao_dicas">Conheça nossa loja</Link>
          </div>
        </div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

        <i class="fa fa-angle-double-down icone"></i>
        <main>
          <div className="container_oferta">
            <p className="oferte">Produtos em ofertas</p>
            <div className="conteudo">
              {
                this.state.listaNomeOferta.map(
                  function (oferta) {
                    return (
                      <div key={oferta.idOferta} className="alimentos">
                        <img src={"http://localhost:5000/" + oferta.fotoUrlOferta} className="img_home" alt="Imagem de Arroz" />
                        <p>{oferta.idProdutoNavigation.nome}</p>
                        <p className="vermelho">30% Desconto</p>
                      </div>
                    );
                  }
                )
              }

            </div>
          </div>

          <div className="tod_informativo">
            <div className="dica_informativa">
              <p className="informativo">Quero comprar alimentos</p>

              <div className="global_informativa">
                <div className="caixa_informativa">
                  <div><img src={usuarioPng} alt="usuario" className="img_informativa" /></div>
                  <div className="frase_informativa"><p> Cadastrar</p></div>
                </div>
              </div>


              <div className="global_informativa">
                <div className="caixa_informativa">
                  <div><img src={shopPng} alt="Imagem de shopping" className="img_informativa" /></div>
                   <div className="frase_informativa"><p> Visite nossa página produtos de produtos. E aproveite para comprar!</p></div>
                </div>
              </div>

              <div className="global_informativa">
                <div className="caixa_informativa">
                  <div><img src={negociarPng} alt="Imagem de mão negociando" className="img_informativa" /></div>
                  <div className="frase_informativa"><p>Negocie da melhor forma suas compras.</p></div>
                </div>
              </div>
            </div>


            <div className="dica_informativa">
              <p className="informativo2">Quero vender meus produtos</p>

              <div className="global_informativa">
                <div className="caixa_informativa">
                  <div><img src={usuarioPng} alt="usuario" className="img_informativa" /></div>
                  <div className="frase_informativa"><p> Cadastrar</p></div>
                </div>
              </div>

              <div className="global_informativa">
                <div className="caixa_informativa">
                  <div><img src={documentoPng} alt="Imagem de shopping" className="img_informativa" /></div>
                  <div className="frase_informativa"><p> Ofereça seus produtos em nossa plataforma.</p></div>
                </div>
              </div>

              <div className="global_informativa">
                <div className="caixa_informativa">
                  <div><img src={ClientePng} alt="Imagem de mão negociando" className="img_informativa" /></div>
                  <div className="frase_informativa"><p>Aguarde um novo comprador.</p></div>
                </div>
              </div>
            </div>
          </div>

          <div className="destaque">
            <img src={bannerFinal} alt="imagem da fruta flaboesa no pote" className="img_destaque" /> </div>

          <div>
            <div><p className="frase_destaque">Sua melhor plataforma de venda</p></div>
            <div><p className="frase_destaque">Produtos com menores valores</p></div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
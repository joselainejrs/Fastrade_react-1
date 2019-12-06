import React, { Component } from 'react';

//Aqui importamos imagens
import logo_banner from '../../assets/img/logo_banner.png';
import usuarioPng from '../../assets/img/usu_ario.png';
import shopPng from '../../assets/img/shop.png';
import negociarPng from '../../assets/img/nego_ciar.png';
import documentoPng from '../../assets/img/document_home.png';
import ClientePng from '../../assets/img/cliente_home.png';
import bannerFinal from '../../assets/img/img_2.png';
import logoFinal from '../../assets/img/logo_img2.png';
import CirculaPng from '../../assets/img/circulo_comentario.png';

//

//importamos a css da home
import Home from '../../assets/css/Home.css'


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
        <div className="tod_home">
          <p className="frase_dicas">
            Sem tempo para fazer Compras?<br />
            seja rápido, seja </p> <img src={logo_banner} className="img_frase" alt="logo fastrade" />
          <a href="#" className="botao_dicas">Conheça nossa loja</a>
        </div>
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
              <p className="informativo">Quero comprar alimentos, como faço?</p>

              <div className="global_informativa">
                <div className="caixa_informativa">
                  <div><img src={usuarioPng} alt="usuario" className="img_informativa" /></div>
                  <div className="frase_informativa"><p> Cadastra-se</p></div>
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


            <div className="dica_informativa2">
              <p className="informativo2">Quero vender meus produtos, como faço?</p>

              <div className="global_informativa">
                <div className="caixa_informativa">
                  <div><img src={usuarioPng} alt="usuario" className="img_informativa" /></div>
                  <div className="frase_informativa"><p> Cadastra-se</p></div>
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
                  <div className="frase_informativa"><p>E aguarde um novo comprador.</p></div>
                </div>
              </div>
            </div>
          </div>

          <div className="destaque">
            <img src={bannerFinal} alt="imagem da fruta flaboesa no pote" className="img_destaque" />
            <img src={logoFinal} alt="frastrade logo da empresa" className="logo_destaque" />
            <div className="frase_destaque"><p>Sua melhor plataforma de venda</p></div>
          </div>

          <div className="espaco_comentario">

            <div className="titulo_comentario">
              <p className="frase_comentario">Deixe seu Comentário sobre Fastrade</p>
            </div>

            <div className="tod_comentario">
              <div><img src={CirculaPng} alt="" className="img_comentario" /></div>
              <div className="comentario">
                <p className="adm">Joselaine Romão</p>
                <p className="comenta">Uma plataforma interessante e inovadora</p>
                <p className="comenta">Data: 25/07/2019</p></div>
            </div >

            <div className="tod_comentario">
              <div><img src={CirculaPng} alt="" className="img_comentario" /></div>
              <div className="comentario">
                <p className="adm">Joselaine Romão</p>
                <p className="comenta">Muito fácil  o acesso, consegui navegar todas as páginas tranquilamente.Parabéns</p>
                <p className="comenta">Data: 25/07/2019</p></div>
            </div>

            <div className="tod_comentario">
              <div><img src={CirculaPng} alt="" className="img_comentario" /></div>
              <div className="comentario1">
                <a href="#"><p className="adm">Deixe seus comentários</p></a>

              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;

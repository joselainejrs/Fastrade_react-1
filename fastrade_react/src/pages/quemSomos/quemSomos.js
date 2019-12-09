import React, { Component } from 'react';
import Missao from '../../assets/img/Missão.jpg';
import Visao from '../../assets/img/Visão.jpg';
import Valores from '../../assets/img/Valores.jpg';
import fotoJosi from '../../assets/img/Josi.png';
import fotoLuana from '../../assets/img/luana.png'
import fotoJoao from '../../assets/img/João vitor.png';
import fotoFernando from '../../assets/img/fernando.png';
import fotoEricki from '../../assets/img/ericki.png';
import fotoJennifer from '../../assets/img/jennifer.png';
import fotoGrupo from '../../assets/img/Pessoasgrupo.jpg';
import Rodape from '../../components/rodape/Rodape';

// import '../../assets/css/quemSomos.css';

class quemSomos extends Component {
    render() {
        return (
            <div className="QuemSomos">
                <section className="deitadas">
                    <img src={Missao} className="esquerdo" alt="Imagem que representa missão" />
                    <div className="direito">
                        <h1>Missão</h1>
                        <div>
                            <p>dfdafsdafdsfsdfdsfdfddsfdfdfdfdfdfdfdfdf<br />
                                fdfsdfdffdfdfdfdfdfdfdfdfdfdffawefwerfaw<br />
                                fsasafasfsafasfasfafasfafasffasfgagagasga<br />
                                asdasdasfasfafasfafasfsafafsfasfasfasfsafs<br />
                            </p>
                        </div>
                    </div>
                </section>
                <section className="deitadas">
                    <div className="esquerdo">
                        <h1>Visão</h1>
                        <p>dfdafsdafdsfsdfdsfdfddsfdfdfdfdfdfdfdfdfd<br />
                            fdfsdfdffdfdfdfdfdfdfdfdfdfdffawefwerfawef<br />
                        </p>
                    </div>
                    <img src={Visao} className="direito" alt="Imagem que representa Visão" />
                </section>
                <section className="deitadas">
                    <img src={Valores} className="esquerdo" alt="Imagem que representa valores" />
                    <div className="direito">
                        <h1>Valores</h1>
                        <p>dfdafsdafdsfsdfdsfdfddsfdfdfdfdfdfdfdfdfdd<br />
                            fdfsdfdffdfdfdfdfdfdfdfdfdfdffawefwerffsgaf<br />
                            fsalklhfsafshjfasfafsfsafafasfsafsafsdsadasda<br />
                        </p>
                    </div>
                </section>

                <section className="larg">
                    <h2>Quem somos</h2>
                    <div className="persona">
                        <div className="rosto">
                            <img src={fotoJosi} alt="Foto de" />
                            <p>Josilaine<br /> 23 anos</p>
                        </div>
                        <div className="rosto">
                            <img src={fotoLuana} alt="Foto de" />
                            <p>Luana<br /> 23 anos</p>
                        </div>
                        <div className="rosto">
                            <img src={fotoJoao} alt="Foto de" />
                            <p>João<br />17 anos</p>
                        </div>
                        <div className="rosto">
                            <img src={fotoFernando} alt="Foto de" />
                            <p>Fernando<br /> 16 anos</p>
                        </div>
                        <div className="rosto">
                            <img src={fotoEricki} alt="Foto de" />
                            <p>Ericki<br /> 20 anos</p>
                        </div>
                        <div className="rosto">
                            <img src={fotoJennifer} alt="Foto de" />
                            <p>Jennifer<br /> 23 anos</p>
                        </div>
                    </div>
                </section>
                <div className="foto_grupo">
                    <img src={fotoGrupo} alt="Fotos do integrantes do projetos" />
                </div>
                <Rodape/>
            </div>
        );
    }
}

export default quemSomos;
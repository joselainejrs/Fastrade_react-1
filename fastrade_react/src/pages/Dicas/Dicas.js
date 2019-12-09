import React, { Component } from 'react';

import Macarrao from '../../assets/img/macarrao.png';
import Arroz from '../../assets/img/arrozBR.png';
import Pudim from '../../assets/img/pudim.png';
import Doce from '../../assets/img/docemaracuja.png';
import Bolo from '../../assets/img/bolo.png';
import Farofa from '../../assets/img/farofa.png';
import Brigadeiro from '../../assets/img/brigadeiro.png';
import Creme from '../../assets/img/cremecouve.png';
import Pate from '../../assets/img/patealho.png';
import '../../components/rodape/Rodape';
import Cabecalho from '../../components/cabecalho/cabecalho';
import '../../components/rodape/Rodape';
import Rodape from '../../components/rodape/Rodape';

//link
import {Link} from 'react-router-dom'

class Dicas extends Component {
    render() {
        return (
            <div>
                <Cabecalho/>
                <div className="banner_dicas">
                    <p>DICAS</p>
                </div>
                {/* // <!-- <img src="imagens/banner.png"> --> */}
                <div Classname="frase">
                    <p>Não sabe o que fazer com os restos dos alimentos???</p>
                    <p>Segue algumas dicas!!</p>
                </div>

                <div Classname="container_pai">
                    <div>
                        <Link to="/Receitas"><img src={Macarrao} Classname="img" /></Link>
                        <div Classname="nome">
                            <p Classname="titulo receita"> Macarrão de Talos</p>
                        </div>
                    </div>
                    <div>
                        <Link to="/Pudim"><img src={Pudim} Classname="img" /></Link>
                        <div Classname="nome">
                            <p Classname="titulo receita">Pudim de Pão Amanhecido </p>
                        </div>
                    </div>
                    <div>
                        <Link to="/Arroz"><img src={Arroz} Classname="img" /></Link>
                        <div Classname="nome">
                            <p Classname="titulo receita">Arroz Brasileirinho</p>
                        </div>
                    </div>
                    <div>
                        <Link to="/Doce de Casca de Maracujá"><img src={Doce} Classname="img" /></Link>
                        <div Classname="nome">
                            <p Classname="titulo receita">Doce de Casca de
                        Maracujá</p>
                        </div>
                    </div>
                    <div>
                        <Link to="/Bolo de casca de abóbora"><img src={Bolo} Classname="img" /></Link>
                        <div Classname="nome">
                            <p Classname="titulo receita">Bolo de Casca de
                        Abóbora</p>
                        </div>
                    </div>
                    <div>
                        <Link to="/farofa de casca de melão"><img src={Farofa} Classname="img" /></Link>
                        <div Classname="nome">
                            <p Classname="titulo receita">Farofa de Casca de
                        Melão</p>
                        </div>
                    </div>
                    <div>
                        <Link to="/brigadeiro de casca de banana"> <img src={Brigadeiro} Classname="img" /></Link>
                        <div Classname="nome">
                            <p Classname="titulo receita">Brigadeiro de Casca
                        de Banana</p>
                        </div>
                    </div>
                    <div>
                        <Link to="/creme de couve-flor"><img src={Creme} Classname="img" /></Link>
                        <div Classname="nome">
                            <p Classname="titulo receita">Creme de Couve - Flor</p>

                        </div>
                    </div>
                    <div>
                        <Link to="/patê de alho poró"><img src={Pate} Classname="img" /></Link>
                        <div Classname="nome">
                            <p Classname="titulo receita">Patê de Alho Poró</p>

                        </div>
                    </div>
                    <Rodape/>
                </div>
            </div>
        );
    }
}
export default Dicas;
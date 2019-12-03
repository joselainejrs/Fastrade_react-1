import React, {Component} from 'react';
import Laranja from '../../assets/img/laranja.jpg';
import Card from '../../assets/img/Agrupar 14.png';
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/Rodape';

class Produtos extends Component {
    render() {
        return(
            <div>
                <Cabecalho/>
                 <div class="container_lista">
            <div class="busca">
                <h3 class="ordenar">Ordenar por:</h3>
                <select name="" id="">
                    <option value="">Selecione</option>
                    <option value="">Menor Preço</option>
                    <option value="">Maior preço</option>
                    <option value="">Mais Vendidos</option>
                    <option value="">Data de Vencimento</option>
                    <option value="">Melhor Desconto</option>
                </select>
            </div>
        </div>
        <div class="container_cards">
            <div class="card">
                <div class="sub_card">
                    <img src={Laranja} alt=""/>
                    <p class="produtor">Qualyban</p>
                    <p>Laranja Lima Orgânica Qualyban
                        600g</p>
                    <p class="dinheiro">R$ 45,00</p>
                </div>
                <a href="#" class="btn_1">ADICIONAR</a>
            </div>
            <div class="card">
                <img src={Laranja} alt=""/>
                <p class="produtor">Qualyban</p>
                <p>Batata Baroa cozida
                    Orgânica Nativa 1kg</p>
                <p class="dinheiro">R$ 45,00</p>
                <a href="#" class="btn_1">ADICIONAR</a>
            </div>
            <div class="card">
                <img src={Laranja} alt=""/>
                <p class="produtor">Qualyban</p>
                <p>Batata Baroa cozida
                    Orgânica Nativa 1kg</p>
                <p class="dinheiro">R$ 45,00</p>
                <a href="#" class="btn_1">ADICIONAR</a>
            </div>
            <div class="card">
                <img src={Laranja} alt=""/>
                <p class="produtor">Qualyban</p>
                <p>Batata Baroa cozida
                    Orgânica Nativa 1kg</p>
                <p class="dinheiro">R$ 45,00</p>
                <a href="#" class="btn_1">ADICIONAR</a>
            </div>
            <div class="card">
                <img src={Laranja} alt=""/>
                <p class="produtor">Qualyban</p>
                <p>Batata Baroa cozida
                    Orgânica Nativa 1kg</p>
                <p class="dinheiro">R$ 45,00</p>
                <a href="#" class="btn_1">ADICIONAR</a>
            </div>
            <div class="card">
                <img src={Laranja} alt=""/>
                <p class="produtor">Qualyban</p>
                <p>Batata Baroa cozida
                    Orgânica Nativa 1kg</p>
                <p class="dinheiro">R$ 45,00</p>
                <a href="#" class="btn_1">ADICIONAR</a>
            </div>
            <div class="card">
                <img src={Laranja} alt=""/>
                <p class="produtor">Qualyban</p>
                <p>Batata Baroa cozida
                    Orgânica Nativa 1kg</p>
                <p class="dinheiro">R$ 45,00</p>
                <a href="#" class="btn_1">ADICIONAR</a>
            </div>
            <div class="card">
                <img src={Laranja} alt=""/>
                <p class="produtor">Qualyban</p>
                <p>Batata Baroa cozida
                    Orgânica Nativa 1kg</p>
                <p class="dinheiro">R$ 45,00</p>
                <a href="#" class="btn_1">ADICIONAR</a>
            </div>
        </div>
        <p class="vermais"><a href="" class="btn_1">Ver Mais</a></p>

        <div align="center">

            <img src={Card} alt="" class="card2"/>
        </div>
        <Rodape/>
            </div>
        );
    }
}

export default Produtos;
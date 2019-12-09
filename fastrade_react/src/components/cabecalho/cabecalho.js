import React, { Component } from 'react';
import Logotipo from '../../assets/img/FONTE-1.png';
import User from '../../assets/img/user.png';
import Lupa from '../../assets/img/search.png';
import '../../assets/css/cabecalho.css';
import { Link } from 'react-router-dom';
import { usuarioAutenticado } from '../../services/auth';



class cabecalho extends Component {

    constructor(props) {
        super(props);
    }
    logout = () => {
        // Remove o token do localStorage
        localStorage.removeItem("usuario-fastrade");
        console.log(this.props)
        // Redireciona para o endereço '/'
        this.props.history.push("/home");
    }
    
    listaAtualizada = () => {
        fetch("https://localhost:5001/api/oferta/")
            .then(response => response.json())
            .then(data => this.setState({ listaNomeOferta: data }));
    }

    render() {
        return (
            <div>
                <header>
                    <div className="container">
                        <div className="sub_menu">
                            <img src={Logotipo} alt="Logo do site" className="logo" />
                            <div className="pesquisa">
                                <input type="text" placeholder="Busque aqui..." aria-label="Barra de busca" name="Barra_busca"
                                    className="txt_busca" />
                                <img src={Lupa} alt="Buscar" className="btn_busca" />

                                {usuarioAutenticado() ? (
                                    <>
                                        <a href="index_comprador.html"><img src={User} alt="Entra em sua conta" /></a>
                                        <a onClick={this.logout}>Sair</a>

                                    </>
                                ) : (
                                        this.props.headerprops
                                    )}

                            </div>
                        </div>
                        {
                            <nav>
                                <ul>
                                    <Link to="/Home">Home</Link>
                                    <li><a href="produtos.html">PRODUTOS</a></li>
                                    <Link to="/Dicas">Dicas</Link>
                                    <li><a href="Quem Somos .html">QUEM SOMOS</a></li>
                                </ul>
                            </nav>
                        }
                    </div>
                </header>
            </div>
        );
    }
}

export default cabecalho;
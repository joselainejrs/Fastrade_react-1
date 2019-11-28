
import React, { Component } from 'react';
import Logo from '../../assets/img/fastrade_img.png';
import '../../assets/css/cabecalho.css';
import { Link, withRouter } from 'react-router-dom';
import { usuarioAutenticado, parseJwt } from '../../services/auth';

class Cabecalho extends Component {
    logout = () => {
        //Remove o token do localStorage
        localStorage.removeItem("");

        //Redireciona para o endereço '/'
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <header className="cabecalhoPrincipal">
                    <div className="container">
                        <img src={Logo} alt="Logo do site." />

                        <nav className="cabecalhoPrincipal-nav">
                            <Link to="/">Index</Link>

                            {usuarioAutenticado() && parseJwt().Role === "Cliente_Fornecedor" ? (
                                <>
                                    <Link to="/produtos">Produtos</Link>
                                    <a href="/#" onClick={this.logout}>Sair</a>
                                </>

                                <>
                                    <Link to="/dicas">Dicas</Link>
                                    <a href="/#" onClick={this.logout}>Sair</a>
                                </>

                                <>
                                    <Link to="/receitas">Receitas</Link>
                                    <a href="/#" onClick={this.logout}>Sair</a>
                                </>

                                <>
                                    <Link to="/quem somos">Quem somos</Link>
                                    <a href="/#" onClick={this.logout}>Sair</a>
                                </>

                                <>
                                    <Link to="/cadastro">Cadastro</Link>
                                    <a href="/#" onClick={this.logout}>Sair</a>
                                </>
                            
                        ) : (
                                    usuarioAutenticado() && parseJwt().Role === "" ? (
                                        <React.Fragment>
                                            <Link to="/"></Link>
                                            <a href="/#" onClick={this.logout}>Sair</a>
                                        </React.Fragment>
                                    ) : (

                                            <React.Fragment>
                                                <Link className="cabecalhoPrincipal-nav-login" to="/login">Login</Link>
                                            </React.Fragment>
                                        )

                                )}
                            {/*? == if */}
                            {/* : == else */}
                        </nav>
                    </div>
                </header>
            </div>
        )
    }
}

export default withRouter(Cabecalho);
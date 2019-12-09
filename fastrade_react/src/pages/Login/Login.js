import React, { Component } from 'react';
import logoface from '../../assets/img/face.png';
import logogoogle from '../../assets/img/Agrupar 20.png';
import { parseJwt } from '../../services/auth';

class Login extends Component {

    constructor() {
        super();

        this.state = {
            email: "",
            senha: "",
            erroMensagem: "",
            isLoading: false
        }
    }

    atualizaEstado = (event) => {
        this.setSate({ [event.target.name]: event.target.value });
    }

    realizarLogin(event) {
        event.preventDefault();

        this.setState({ erroMensagem: '' })

        this.setState({ isLoading: true })
        
        fetch("https://localhost:5001/api/login", {
            method: "POST",
            body: JSON.stringify(
                {
                    email: this.state.email,
                    senha: this.state.senha,

                }),
            headers: {
                "Content-Type": "application/json"
            }
        })

            .then(response => response.json().then(data => ({ status: response.status, body: data })))
            .then(response => {
                console.log(response);

                if (response.status === 200) {
                    localStorage.setItem('usuario-fastrade', response.body.token)
                    this.setState({ isLoading: false })

                    // Exibe no console somente o token
                    console.log("Meu token é: " + response.body.token)

                    // Define base64 recebendo o payload do token
                    var base64 = localStorage.getItem('usuario-fastrade').split('.')[1]
                    // exibe no console o valor de base64
                    console.log(base64)

                    // Exibe no console o valor do payload convertido para string
                    console.log(window.atob(base64))

                    // Exibe no console o valor do payload convertido para JSON
                    console.log(JSON.parse(window.atob(base64)))

                    // Exibe no console o tipo de usuário logado
                     console.log("O seu tipo de id é ", parseJwt().Role)

                     //Caso o usuario seja um administrador ele vai para home
                    if (parseJwt().Role === '3') {
                        //console.log(this.props)
                        this.props.history.push('/Home');
                    }
                    else {
                        this.props.history.push('/Dicas');
                    }
                }

            })

            .catch(error => console.log(error))

        // if (parseJwt().Role === 'Administrador') {
        //     this.props.history.push('/Home');
        // }
        // else {
        //     this.props.history.push('/cadastrarProduto');
        // }
    }

    atualizaEmail(input) {
        this.setState({ email: input.target.value })

    }
    atualizaSenha(input) {
        this.setState({ senha: input.target.value })

    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="card">
                        <h1 className="conta">Criar sua conta/Logar</h1>
                        <form onSubmit={this.realizarLogin.bind(this)}>
                            <div className="conteudotodo">
                                <label className="e-mail">
                                    <p className="login">Email</p>
                                    <input className="login" name="email"
                                        type="text" required className="caixa_cadastro"
                                        placeholder="exemplo@hotmail.com"
                                        arial-label="exemplo@hotmail.com"
                                        onChange={this.atualizaEmail.bind(this)} />
                                </label>
                            </div>
                            <div className="conteudotodo">
                                <label>
                                    <p className="login">Senha</p>
                                    <input className="login" name="Senha" type="password" required className="caixa_cadastro"
                                        placeholder="Digite sua senha..."
                                        arial-label="Digite sua senha"
                                        onChange={this.atualizaSenha.bind(this)} />
                                </label>
                                <div className="caixabotao">
                                    <button type="submit">Continuar</button>
                                    <button type="submit">Registrar</button>
                                </div>

                            </div>

                            <div className="botaologar">
                                <a href="https://pt-br.facebook.com/"><img className="botaolink" src={logoface} alt="Logar com facebook" /></a>
                                <a
                                    href="https://accounts.google.com/signin/v2/identifier?hl=pt-BR&passive=true&continue=https%3A%2F%2Fwww.google.com.br%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin"><img
                                        src={logogoogle} className="botaolink" alt="Logar com google"/></a>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        );
    }
}



export default Login;
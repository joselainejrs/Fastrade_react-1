import React, { Component } from 'react';
import { render } from 'react-dom';
//importar a imagens
import usuario from '../../assets/img/usuario.png';
//importamos pagina de perfil do usuario 
import PerfilConsumidor from '../PerfilUsuario/PerfilConsumidor';
import PerfilProduto from '../PerfilUsuario/PerfilProduto';

//impotar link 
import {Link} from 'react-router-dom';

//importar o css
import perfil from '../../assets/css/perfil.css';

// importamos as dependencias de Route
import { Route, BrowserRouter as Router } from 'react-router-dom';


export default class PerfilComerciante extends Component {

    
    UNSAFE_componentWillMount() {
        console.log('Will');
    }

    componentDidMount() {
        console.log('Did');
    }

    componentDidUpdate() {
        console.log("Update");
    }

    componentWillUnmount() {
        console.log("Unmount")
    }

    //props é usado para passar dados para elementos JSX
    constructor(props) {
        super(props);

        //cada elemento de input que você terá em seu component formulário assumirá o valor de state como seu valor.
        this.state = {

            listaPerfilConsumidor: [],
            listaUsuario: [],
            listaEndereco: [],

            nome_razao_social: "",
            email: "",
            cpf_cnpj: "",
            celular_telefone: "",
            rua_av: "",
            numero: "",
            complemento: "",
            bairro: "",
            estado: "",
            cep: "",
            id_Usuario: "",
            id_Endereco: "",
            erroDeDados: ""
        };
    }

    //Em seguida, podemos adicionar um método handleChange que aceita o argumento do event 
    //. Este objeto de evento conterá nosso nome e valor de entrada.

    handleNome_Razao_SocialChange = (event) => {
        this.setState({ nome_razao_social: event.target.value });
    }
    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }
    handleCPF_CNPJChange = (event) => {
        this.setState({ cpf_cnpj: event.target.value });
    }
    handleCelular_TelefoneChange = (event) => {
        this.setState({ celular_telefone: event.target.value });
    }
    handleRua_AVChange = (event) => {
        this.setState({ rua_av: event.target.value });
    }
    handleNumeroChange = (event) => {
        this.setState({ numero: event.target.value });
    }
    handleComplementoChange = (event) => {
        this.setState({ complemento: event.target.value });
    }
    handleBairroChange = (event) => {
        this.setState({ bairro: event.target.value });
    }
    handleEstadoChange = (event) => {
        this.setState({ estado: event.target.value });
    }
    handleCEPChange = (event) => {
        this.setState({ cep: event.target.value });
    }

    //usamos um método handleSubmit que chama uma caixa de 
    //alerta que imprime os valores de estado.
    // Separei por id = {id_Usuario}
    handleSubmit = (event) => {
        event.preventDefault();
        const { nome_razao_social, email, cpf_cnpj, celular_telefone } = this.state
        alert(`Seus valores de estado:  n
        nome_razao_social: $ {nome_razao_social}  n
        email: $ {email} n 
        cpf_cnpj: $ {cpf_cnpj} n
        celular_telefone: $ {celular_telefone} `)
    }

    //usamos um método handleSubmit que chama uma caixa de 
    //alerta que imprime os valores de estado.
    // Separei por id = {id_Endereco}
    handleSubmit = (event) => {
        event.preventDefault();
        const { rua_av, numero, complemento, bairro, estado, cep } = this.state
        alert(`Seus valores de estado:  n
        rua_av: $ {rua_av}  n
        numero: $ { numero} n 
        complemento: $ {complemento} n
        bairro: $ {bairro} n
        estado: $ {estado} n
        cep: $ {cep}`)
    }
    render() {
        return (
            <div className="cabeca_perfil">
            <div className="barra_lateral_perfil">
                <Link to="/PerfilComerciante" className="opcoes_perfil">Perfil</Link>
                <Link to="/PerfilProduto" className="opcoes_perfil">Meu Produtos</Link>
                <Link to="/" className="opcoes_perfil">Cadastrar Produtos</Link>
            </div>
            <div className="conj_barra">
                <div className="pri_barra_perfil">
                    <div className="titulo_usuario">
                        <p>PERFIL DO USUÁRIO</p>
                    </div>

                    <div className="dados_perf">
                        <form>
                            <div className="conj_img">
                                <input
                                    className="img_usuario"
                                    type="image"
                                    src={usuario}
                                    alt="Insire uma imagem"
                                    name="foto_Url_Usuario"
                                    onChange={this.handleFoto_Url_UsuarioChange}
                                    value={this.state.foto_Url_Usuario} />
                            </div>
                        </form>

                        <div className="usuario_perfil">

                            <form onSubmit="">
                                <div className="item_perfil">
                                    <input
                                        className="estilo_input_perfil"
                                        placeholder="Razão Social"
                                        type="text"
                                        name="nome_razao_social"
                                        onChange={this.handleNome_Razao_SocialChange}
                                        value={this.state.nome_razao_social} />
                                </div>

                                <div className="item_perfil">
                                    <input
                                        className="estilo_input_perfil"
                                        placeholder="Email"
                                        type="text"
                                        name="email"
                                        onChange={this.handleEmailChange}
                                        value={this.state.email} />
                                </div>
                            </form>
                        </div>
                    </div>

                    <form id="conj_perfil">
                        <div className="dados_principais">

                            <div className="item_perfil2">
                                <input
                                    className="estilo_input_perfil"
                                    placeholder="CNPJ"
                                    type="text"
                                    name="cpf_cnpj"
                                    onChange={this.handleCPF_CNPJChange}
                                    value={this.state.cpf_cnpj} />
                            </div>
                            <div className="item_perfil2">
                                <input
                                    className="estilo_input_perfil"
                                    placeholder="Telefone para contato"
                                    type="text"
                                    name="celular_telefone"
                                    onChange={this.handleCelular_TelefoneChange}
                                    value={this.state.celular_telefone} />
                            </div>
                        </div>
                        <div className="dados_principais">
                            <div className="item_perfil2">
                                <input
                                    className="estilo_dados_perfil"
                                    placeholder="Endereço:"
                                    type="text"
                                    name="rua_av"
                                    onChange={this.handleRua_AVChange}
                                    value={this.state.rua_av} />
                            </div>

                            <div className="item_perfil2">
                                <input
                                    className="estilo_dados_perfil"
                                    placeholder="Complemento"
                                    type="text"
                                    name="complemento"
                                    onChange={this.handleComplementoChange}
                                    value={this.state.complemento} />
                            </div>
                            <div className="item_perfil2">
                                <input
                                    className="estilo_dados_perfil"
                                    placeholder="Numero"
                                    type="text"
                                    name="numero"
                                    onChange={this.handleNumeroChange}
                                    value={this.state.numero} />
                            </div>
                        </div>
                        <div className="dados_principais">

                            <div className="item_perfil2">
                                <input
                                    className="estilo_dados_perfil"
                                    placeholder="CEP"
                                    type="text"
                                    name="cep"
                                    onChange={this.handleCEPChange}
                                    value={this.state.cep} />
                            </div>
                            <div className="item_perfil2">
                                <input
                                    className="estilo_dados_perfil"
                                    placeholder="Bairro"
                                    type="text"
                                    name="bairro"
                                    onChange={this.handleBairroChange}
                                    value={this.state.bairro} />
                            </div>
                            <div className="item_perfil2">
                                <input
                                    className="estilo_dados_perfil"
                                    placeholder="Estado"
                                    type="text"
                                    name="estado"
                                    onChange={this.handleEstadoChange}
                                    value={this.state.estado} />
                            </div>
                        </div>
                    </form>
                </div>


                <div className="botao_ficha_perfil">
                    <div >
                        <button
                            type="submit"
                            className="botao_perfil">ALTERAR</button>
                    </div>
                </div>
            </div>
        </div >
    );
}
}
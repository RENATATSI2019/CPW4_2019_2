import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Menu from '../../components/menu/Menu';
import logo from '../../img/logo.png';
import ListaService from '../../services/ListaService';
import './Lista.scss';
import adicionar from '../../img/add.png';

export default class Listas extends Component {

    constructor() {
        /**
         * Toda vez que criar um construtor
         * em um componente React, lembre-se
         * de invocar o construtor da classe
         * mãe Component na primeira linha de
         * código.
         */
        super();

        this.state = {
            listas: []
        }

        this.service = new ListaService();
    }

    async componentDidMount() {
        const listas =
            await this.service.recuperarListas();
        console.log(listas);
        this.setState({ listas });
    }

    render() {
        const listas =
            this.state.listas.map(lista => (
                <div className ="item" key={lista._id}>{lista.nome}</div>
            ));

        return (
            <div>
                <Menu
                    logo={logo}
                    paginaAnterior="/"
                    titulo="Lista de Compras" />

                <div className="conteiner">
                    <div>
                        {   
                            /*
                            Neste trecho de código o Operador AND (&&) atua como
                            um perador de ligação entre a condição lógica e o código
                            de apresentação a ser renderizado.
                            */
                            !this.state.listas &&
                            <h2>Minhas listas</h2>
                        }
                        {
                            this.state.listas &&
                            <p id= "mensagemNenhumaLista">
                                Clique no botão abaixo para cadastrar uma nova lista.
                            </p>

                        }
                        <div id="listagem">
                            {listas}
                        </div>

                        <div id="areaBotao">
                            <Link to = "/criarlista">
                                <img src={adicionar} alt="Nova Lista" id="botaoNovaLista"/>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
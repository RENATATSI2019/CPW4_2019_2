import React, { Component } from 'react';

import Menu from '../menu/Menu';
import logo from'../../img/logo.png';
import ListaService from '../../services/ListaService';

class Listas extends Component {
    constructor(){

        super();
        this.state={
            listas:[]
        }
        this.service=new ListaService();
    }
    //metodo que monta o componente antes de carregar os dados
    componentDidMount(){
        const listas = 
        this.service.recuperarListas();
        this.setState({listas});
    }

    render() {
        const listas = this.state.listas.map(lista =>(
            <li key={lista._id}>{lista.nome}</li>
        ));


        return (
            <div>
                <Menu
                    logo={logo}
                    paginaAnterior="/"
                    titulo="Listas de Compras" />
                
                <div className="conteiner">
                    <div>
                        <h2>Minhas Listas</h2>
                        <ul>
                            {listas}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Listas;
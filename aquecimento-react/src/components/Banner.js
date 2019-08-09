import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Banner.css';
class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <span id="titulo">
                 <Link to = "/Início"> Aquecimento</Link>
                </span>
                <ul id="menu">
                    <li>
                    <Link to = "/Início"> Início</Link>
                    </li>
                    <li>
                    <Link to = "/Sobre"> Sobre</Link>
                    </li>
                    <li>
                    <Link to = "/Contato">Contato</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Banner;
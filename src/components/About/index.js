import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import "./styles.css";
import int from '../../images/int.png';
import atv from '../../images/atv.png';
import formacao from '../../images/formacao.png';
import idioma from '../../images/idioma.png';

class About extends Component {
    render(){
        return (            
            <section id="sobre">

                <div className="div-sobre"> 
                    <Image src={int} className="icon-img" />
                    <h1 class="title-sobre">Interesses</h1>
                </div>
                <ul>
                        <li>Desenvolvimento Web</li>
                        <li>User Experience</li>
                        <li>Design Gráfico</li>
                </ul>

                <div className="div-sobre">
                    <Image src={idioma} className="icon-img" />
                    <h1 class="title-sobre">Idiomas</h1>
                </div>
                <ul>
                    <li>Português (Nativo)</li>
                    <li>Inglês (Avançado)</li>
                </ul>
                
                <div className="div-sobre">
                    <Image src={formacao} className="icon-img" />
                    <h1 class="title-sobre">Formação</h1>                         
                </div>
                <ul>
                    <li>Ensino Médio -Colégio Bezerra de Menezes, 2015</li>
                    <li>Cursando Ensino Superior - Universidade Tecnológica Federal do Paraná (2016-2020)</li>
                </ul>
                
                <div className="div-sobre">
                    <Image src={atv} className="icon-img" />
                    <h1 class="title-sobre">Atividades Desenvolvidas</h1>
                </div>
                <ul>
                    <li>Participação no Grupo ELLP de ensino lúdico de lógica e programação para crianças</li>
                    <li>Estágio no Setor DIRPPG na UTFPR</li>
                </ul>
                
            </section>
            
        );
    }
}

export default About;
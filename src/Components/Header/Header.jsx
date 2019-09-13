import React from 'react';
import {DropdownButton, ButtonToolbar, Dropdown} from 'react-bootstrap'
import styles from './styles';

const Header = () => {
    return(
        <div {...styles}>
            <div>
                <a href="https://www.freepik.es/fotos-vectores-gratis/fondo" target="_blank">
                    <img src="https://image.freepik.com/vector-gratis/vector-alfabeto-mayuscula-floral-s_53876-87381.jpg" alt="icono" />
                </a>
                <p>
                    <span>user name</span>
                    <span>Cha cha</span>
                </p>
            </div>
            <DropdownButton>
                <Dropdown.Item eventKey="1">Perfil</Dropdown.Item>
                <Dropdown.Item eventKey="2">Cerrar sesión</Dropdown.Item>
            </DropdownButton>
        </div>
    );
}

export default Header;
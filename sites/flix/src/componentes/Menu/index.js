import React from "react";
import Logo from '../../assets//img/logo.png'
import './Menu.css'
import Button from "../Button";
//import ButtonLink from "./components/ButtonLink";

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="clovisflix logo"
                 />
            </a>      
            <Button as="a" href="/" className="ButtonLink">
            Novo Vídeo no filme
            </Button>
        </nav>
    );
}

export default Menu;
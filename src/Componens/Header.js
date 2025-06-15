import React from 'react';
import './Header.css';
import Logo from '../Assets/Img/Logo.png';
import PersonIcon from '@material-ui/icons/Person';
import {
      Link
  } from "react-router-dom";








  
  

function Header() {
    

    

    

   
    return (
        <div className="header">
            <div className="header__left">
                <img className="header__logo" src={Logo} alt="Logo"/>
                <h1>Likovna radionica</h1>
                    <ul className="header__list" >
                            <Link to="/">
                                <li >O nama</li>
                            </Link>
                            <Link to="o_vlasniku">
                                <li>O vlasniku</li>
                            </Link>
                            <Link to="galerije">
                                <li  >Galerije</li>
                            </Link>
                            <Link to="kontakt">
                                <li>Kontakt</li>
                            </Link>
                </ul>
            </div>
        
          
          
            <div className="header__right">
                <form method="get" action="/login" >       
                <button type="submit"  className="header__button">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    
                    <PersonIcon className="header__icon" alt="Ikonica"/>
                    Registruj se </button>
                </form>

            
                    </div>
               
            </div>

            
        
    );
}

export default Header;

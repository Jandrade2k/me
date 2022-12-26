import React from "react";
import {Link} from 'react-router-dom';

const Header = () =>{
    return(
        <div id="header">
            <div className="logo">
                <h1>Jandrade</h1>
            </div>

            <div className="menu">
                <Link to="/">Início</Link>
            </div>
        </div>
    );
}

export default Header;
import React from "react";
import {Route, BrowserRouter} from 'react-router-dom';

import Inicio from './pages/Inicio';
// import Sobre from './pages/Sobre';
// import Experiencias from './pages/Experiencias';
// import Galeria from './pages/Galeria';
// import Contato from './pages/Contato';


const routes = () => {
    return(
        <BrowserRouter>
            <Route component = { Inicio } path="/" exact />
            {/* <Route component = {Sobre} path="/about" />
            <Route component = {Experiencias} path="/work" />
            <Route component = {Galeria} path="/galery" />
            <Route component = {Contato} path="/contact" /> */}
        </BrowserRouter>
    )
}

export default routes;
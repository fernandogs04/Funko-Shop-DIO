import React from "react";
import { Routes, Route} from 'react-router-dom';
import Contatos from "./Pages/contato";
import HomePage from "./Pages/home";


const MainRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<HomePage />}
            />
            <Route
                path="contato"
                element={<Contatos />}
            />
        </Routes>
    )
}

export default MainRoutes;
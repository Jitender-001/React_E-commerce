import React from 'react';
import { Routes,Route } from 'react-router';
import Home from './home';

function Rout(){
    return(
        <>
            <Routes>
                <Route path='/' element={<Home />}></Route>
            </Routes>
        </>
    );
}

export default Rout;
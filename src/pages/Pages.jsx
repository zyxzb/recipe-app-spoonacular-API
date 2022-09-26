import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import Cuisine from './Cuisine';
import SearchedMeal from './SearchedMeal';
import Recipe from './Recipe';

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={< Home />}/>
            <Route path="/cuisine/:type" element={< Cuisine />}/>
            <Route path="/searched/:search" element={< SearchedMeal />}/>
            <Route path="/recipe/:name" element={< Recipe />}/>
        </Routes>
    );
}

export default Pages;

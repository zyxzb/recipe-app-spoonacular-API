import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import Home from './Home';
import Cuisine from './Cuisine';
import SearchedMeal from './SearchedMeal';
import Recipe from './Recipe';
import { AnimatePresence } from "framer-motion"

const Pages = () => {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            {/* animation for routes - useLocation and AnimatePresence needed */ }
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={< Home />}/>
            <Route path="/cuisine/:type" element={< Cuisine />}/>
            <Route path="/searched/:search" element={< SearchedMeal />}/>
            <Route path="/recipe/:name" element={< Recipe />}/>
        </Routes>
        </AnimatePresence>
    );
}

export default Pages;

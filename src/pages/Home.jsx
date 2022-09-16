import React from 'react';
import Category from '../components/Category';
import Trending from '../components/Trending';
import Vege from '../components/Vege';

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Category/>
            <Trending/>
            <Vege/>
        </div>
    );
}

export default Home;

import React from 'react';
import Trending from '../components/Trending';
import Vege from '../components/Vege';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity:0}}
            transition={{duration: 0.5}}
            >
            <TextSection>
                <h2>Popular food spoonacular api website provides access to a variety of recipes.</h2>
                <p>
                Spoonacular is not a website but rather an API that allows you to access a robust database with over 365,000 recipes and 86,000 food products. This tool comes with a recipe search engine that permits users to find favorite recipes using typical language queries such as “low-fat vegan cupcakes.” It also allows you to find recipes for creating various kinds of diet plans.
                </p>
                <span><i>-Free AI Writer and Text Generator: <a href="https://smodin.io/writer" target="_blank" rel="noopener noreferrer">smodin.io</a></i></span>
            </TextSection>
            <Trending/>
            <TextSection>
                <h2>Vegetarians have a healthier diet than meat-eaters.</h2>
                <p>
                Vegetarians are less likely to have high blood pressure, cholesterol, obesity, and other diseases which stem from the consumption of saturated fats. This way, they have a higher chance of living a longer life than non-vegetarians. This one, again, is subject to a number of factors. To be specific, the risk of early death due to heart diseases is lower in vegetarians as compared to non-vegetarians.
                </p>
                <p>
                Maybe. Compared with meat eaters, vegetarians tend to consume less saturated fat and cholesterol and more vitamins C and E, dietary fiber, folic acid, potassium, magnesium, and phytochemicals (plant chemicals), such as carotenoids and flavonoids. As a result, they're likely to have lower total and LDL (bad) cholesterol, lower blood pressure, and lower body mass index (BMI), all of which are associated with longevity and a reduced risk for many chronic diseases
                </p>
                <span><i>-Free AI Writer and Text Generator: <a href="https://smodin.io/writer" target="_blank" rel="noopener noreferrer">smodin.io</a></i></span>
            </TextSection>
            <Vege/>
            <TextSection>
                <h2>Find today’s meal based on your preferences.</h2>
                <p>
                Alright! That narrows down what you’re looking for. Now you’ve got to find that recipe. You can use a site like ours, comb through Pinterest, or flip through a magazine or cookbook with your criteria in mind. You won’t be making a physical list like this every time you begin searching for recipes, but this technique illuminates a way to think. Eventually, you start doing all this in your head! And you will absolutely feel like such a rockstar when you do.
                </p>
                <p>
                This sounds so simple and obvious, yet when your mind is swirling with the components of meal planning, it can be easy to overlook. Like many things in life, meal planning is most successful when you keep things simple. Choose recipes based on the kind of meals you need. Busy week ahead? Lean on the slow cooker for mostly hands-off dinners. Tight on time and not a fan of a pile of dishes? Sounds like sheet pan supper recipes might be right for you. Whether it’s budget dinners, vegan options, or meals with make-ahead potential, choose the recipes that meet your needs.
                </p>
                <span><i>-Free AI Writer and Text Generator: <a href="https://smodin.io/writer" target="_blank" rel="noopener noreferrer">smodin.io</a></i></span>
            </TextSection>
        </motion.div>
    );
}
const TextSection = styled.section`
margin: 3rem 1rem;
text-align: left;
h2{
    font-size: 1.8rem;
}

@media (max-width: 576px) {
    p,span{

        text-align: justify;
    }
}
span{
    display: block;
    font-size: 0.8rem;
    text-align: right;
}
`


export default Home;

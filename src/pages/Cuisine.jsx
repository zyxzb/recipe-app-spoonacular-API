import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom';
import Category from '../components/Category';

const Cuisine = ({name}) => {
    const [cuisine,
        setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async(name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results);
        console.log(cuisine);
    }

    useEffect(() => {
        // path="/cuisine/:type" in 'Pages' Component
        getCuisine(params.type)
    }, [params.type]);

    return (
        <div>
            <h1>Cuisine Page</h1>
            <Category/>
            <Grid>
                {cuisine.map((item) => (
                    <Card key={item.id}>
                        <h4>{item.title}</h4>
                        <img src={item.image} alt={item.title}/>
                    </Card>
                ))}
            </Grid>
        </div>
    );
}
const Grid = styled.div `
    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;

`

const Card = styled.div `
    img{
        width: 100%;
        border-radius: 2rem;
    } 
    
    a{
        text-decoration: none;
        }

    h4{
         text-align: center;
         padding: 0.5rem;
        }
    `

export default Cuisine;

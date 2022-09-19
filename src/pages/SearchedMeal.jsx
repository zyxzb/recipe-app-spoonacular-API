import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';



const SearchedMeal = () => {
    const [searchedMeals, setSearchedMeals] = useState([]);
    let params = useParams();

    const getSearchedMeals = async(name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
        const recipes = await data.json();
        setSearchedMeals(recipes.results);
    }

    useEffect(() => {
        // path="/searched/:search" in 'Pages' Component
        getSearchedMeals(params.search);
    },[params.search])

    return (
        <Grid>
                {searchedMeals.map((item) => (
                    <Card key={item.id}>
                        <h4>{item.title}</h4>
                        <img src={item.image} alt={item.title}/>
                    </Card>
                ))}
            </Grid>
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

export default SearchedMeal;

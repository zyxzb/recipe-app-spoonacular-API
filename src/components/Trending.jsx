import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Trending = () => {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getTrending();
    }, [])

    const getTrending = async() => {

        // chcecking if items are in localStorage
        const check = localStorage.getItem('popular');

        if (check) {
            setPopular(JSON.parse(check));
            
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`);
            const data = await api.json();
            localStorage.setItem('popular', JSON.stringify(data.recipes));
            setPopular(data.recipes);
            
        }

    }
    console.log(popular);

    return (
        <div>
            <Wrapper>
                <h3>Popular Picks 🔥</h3>
                <Splide
                    options={{
                    perPage: 4,
                    gap: '3rem',
                    drag: "free",
                    pagination: false
                }}>
                    {popular.map((recipe) => (
                        <SplideSlide key={recipe.id}>
                            <Card>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title}/>
                                <Gradient/>
                            </Card>
                        </SplideSlide>
                    ))}
                </Splide>
            </Wrapper>
        </div>
    );
}

const Wrapper = styled.div `
    margin: 4rem 0;

`
const Card = styled.div `
    margin: 0;
    position: relative;
    min-height: 20rem;
    border-radius: 2rem;
    overflow: hidden;
    

    p{
       padding: 0;
        font-size: 0.9rem;
        position: absolute;
        width: 100%;
        text-align: center;
        padding: 5px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: #13131353;
        z-index: 4;
        color: white;

    }
    

    img{
        margin: 0 auto;
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
       
    }


`
const Gradient = styled.div `
        position: absolute;
        z-index: 3;
        width: 100%;
        height: 100%;
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
       
`

export default Trending;

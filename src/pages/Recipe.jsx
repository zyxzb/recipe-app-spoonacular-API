import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';

const Recipe = () => {
    const [details, setDetails] = useState({});
    const [activeButton, setActiveButton] = useState('instructions');

    let params = useParams();

    const fetchDetails = async() => {

        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();

        setDetails(detailData);
        console.log(detailData);

        };

    useEffect(() => {
        fetchDetails()
        console.log(details);
    }, [params.name])

    return (
        <DetailsWrapper>
            <div>
                <h2>{details.title}</h2> 
                <img src={details.image} alt="" />
            </div>
            <Info>
                <button className={activeButton === 'instructions' ? 'active' : ''} onClick={() => setActiveButton('instructions')}>Instructions</button>
                <button className={activeButton === 'ingredients' ? 'active' : ''} onClick={() => setActiveButton('ingredients')}>Ingredients</button>
                <div>
                    {activeButton === 'instructions' &&  
                    <>
                        <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
                        <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
                    </>
                    }
                    {activeButton === 'ingredients' && 
                    <>
                        <ul>
                            {details.extendedIngredients.map((ing) => (
                                <li key={ing.id}>{ing.original}</li>
                            ))}
                        </ul>
                    </> 
                    }
                </div>
            </Info>
        </DetailsWrapper>
    );
}

const DetailsWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;

div:first-child{
    width: 50%;
}

h2{
    margin-top: 0;
    margin-bottom: 2rem;
}

img{
    max-width: 100%;
}
      
    
`

const Info = styled.div`
    margin: 0 auto;
    width: 50%;


button{
    margin-right: 2rem;
    padding: 0.6rem 1.5rem ;
    text-transform: uppercase;
    background-color: white;
    font-weight: 600;
    border: 2px solid gray;
    cursor: pointer;
    transition: 0.3s all ease-in-out;
    width: 160px;

    &.active {
        background-color: gray;
        color: white
    }
}

h3{
    text-align: justify;
    line-height: 1.5rem;
}

`

export default Recipe;

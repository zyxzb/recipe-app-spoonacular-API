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
    margin: 10rem 1rem 5rem;
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 3rem;
    }

div:first-child{
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
    }
}

h2{
    margin-top: 0;
    margin-bottom: 2rem;
}

img{
    width: 100%;
    @media (max-width: 768px) {
        object-fit: cover;
    }
}
      
    
`

const Info = styled.div`
    margin: 0 auto;
    margin-left: 1rem;
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
        margin-left: 0;
    }

@keyframes textAppear {
        0% { opacity: 0;}
        100% { opacity: 1; }
    }

button{
    margin-right: 2rem;
    padding: 0.6rem 1.5rem ;
    text-transform: uppercase;
    background-color: white;
    font-weight: 600;
    border: 2px solid gray;
    cursor: pointer;
    transition: 0.3s all ease-in-out;
    width: 150px;
    @media (max-width: 768px) {
        width: max-content;
        font-size: 0.7rem;
        margin: 2rem 0 1rem 1rem;
        &:first-of-type{
            margin-left: 0;
        } 
        
    }

    &.active {
        background-color: gray;
        color: white
    }
}

h3{
    text-align: justify;
    line-height: 1.5rem;

}

ul{
    font-weight: bold;
    list-style-type: "🥄"; 
    li{
        margin-bottom: 0.5rem;
    }
}

h3, ul{
    animation: textAppear 0.6s ease-in-out;
}

`

export default Recipe;

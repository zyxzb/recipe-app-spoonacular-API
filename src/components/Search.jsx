import React,{useState} from 'react';
import styled from 'styled-components';
import{FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Search = () => {
    const[inputValue, setInputValue] = useState('');
    const navigate = useNavigate();


    const handleInputValue = (e) => {
        setInputValue(e.target.value);
       
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // navigate on Submit 
        navigate('searched/'+ inputValue)
        
       
    }

    return (
        <Form onSubmit={handleSubmit}>
            <input onChange={handleInputValue} type="text" value={inputValue} />
            <FaSearch/>
        </Form>
    );
}

const Form = styled.form`
    position: relative;
    margin:  0 auto;
    margin-bottom: 1rem;
    margin-top: 1rem;
    display: flex;
    max-width: 70%;
    
    input{
        border: none;
        font-size: 1.5rem;
        background-color: #2f2f2fa5;
        padding: 1rem 3rem;
        border-radius: 1rem;
        outline: none;
        width: 100%;
        letter-spacing: 1px;

    }
    svg{
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        font-size: 28px;
        padding: 0 10px;
        color: white;
        
}
`

export default Search;

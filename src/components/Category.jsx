import React from 'react';
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiSausage} from 'react-icons/gi';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Category = () => {
    return (
        <CategoryWrapper>
            <NavLink to={'/cuisine/italian'}>
                <FaPizzaSlice/>
                <h4>Italian</h4>
            </NavLink>
            <NavLink to={'/cuisine/american'}>
                <FaHamburger/>
                <h4>American</h4>
            </NavLink>
            <NavLink to={'/cuisine/thai'}>
                <GiNoodles/>
                <h4>Thai</h4>
            </NavLink>
            <NavLink to={'/cuisine/german'}> 
                <GiSausage/>
                <h4>German</h4>
            </NavLink>
        </CategoryWrapper>
    );
}

const CategoryWrapper = styled.div `
    margin: 4rem 0;
    display: flex;
    max-width: 50%;
    justify-content: space-around;
    margin: 0 auto;
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-width: 70px;
        min-height: 70px;
        background-color: #2f2f2fa5;
        color: white;
        border-radius: 50%;
        svg{
            font-size: 20px;
        }
        h4{
            font-size: 9px;
        }
    }

`


export default Category;

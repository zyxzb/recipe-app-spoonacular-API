import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo.png';

const NavLogo = () => {
    return (
        <NavElement>
            <Link to='/'>
                <img src={logo} alt="logo"/>
            </Link>
        </NavElement>
    );
}

const NavElement = styled.nav `
    display: flex;
    height: 60px;
    padding:20px 0 30px;
    width: 100%;
    justify-content: flex-start;
    border-bottom: 1px solid lightgray;
    @media (max-width: 576px) {
        padding-left: 1rem;
    }

    img{
        height: 100%;
    }
`

export default NavLogo;

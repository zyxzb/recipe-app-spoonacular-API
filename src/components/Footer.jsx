import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterComponent>
            <p>ZYXZB || &copy; {new Date().getFullYear()}</p>
        </FooterComponent>
    );
}

const FooterComponent = styled.footer`
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: center;
    align-items: center;
    border-top: 1px solid lightgray;
    margin-top: 2rem;
`

export default Footer;

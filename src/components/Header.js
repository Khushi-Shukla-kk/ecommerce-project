import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav"; // Ensure Nav is imported from the correct path

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary}; // Default color

    &:hover {
        color: ${({ theme }) => theme.colors.helper}; // On hover change color
    }
`;

const Header = () => {
    return (
        <MainHeader>
            <StyledNavLink to="/">
                <h2 className="logo">Kk online store</h2>
            </StyledNavLink>
            <Nav />
            {/* <StyledNavLink to="/login">Login</StyledNavLink> Use StyledNavLink */}
        </MainHeader>
    );
};


const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .logo {
        font-size: 2rem; // Adjust font size as needed
        font-weight: bold; // Add font weight for emphasis
        color: ${({ theme }) => theme.colors.primary}; // Example color, adjust as needed
        text-decoration: none;
    }
`;

export default Header;

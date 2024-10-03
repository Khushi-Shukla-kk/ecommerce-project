import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from "../context/cart_context";

const NavContainer = styled.nav`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.colors.bg};
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .navbar-lists {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    .navbar-link {
      text-decoration: none;
      font-size: 1.6rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.black};
      transition: color 0.3s linear;

      &:hover {
        color: ${({ theme }) => theme.colors.helper};
      }
    }

    .cart-trolley--link {
      position: relative; // To position the total item badge correctly
    }

    .cart-total--item {
      position: absolute;
      top: -10px; // Adjust as needed
      right: -10px; // Adjust as needed
      background-color: ${({ theme }) => theme.colors.helper};
      color: #fff;
      border-radius: 50%;
      padding: 0.3rem 0.5rem; // Adjust padding as needed
      font-size: 1.2rem;
      font-weight: bold;
    }
  }

  .mobile-navbar-btn {
    display: none;

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      display: inline-block;
      cursor: pointer;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .navbar-lists {
      display: none;
    }

    .navbar.active .navbar-lists {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.bg};
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
  }
`;

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const { total_item } = useCartContext();

  return (
    <NavContainer>
      <div className={`navbar ${menuIcon ? "active" : ""}`}>
        <ul className="navbar-lists">
          <li>
            <NavLink to="/" className="navbar-link" onClick={() => setMenuIcon(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link" onClick={() => setMenuIcon(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="navbar-link" onClick={() => setMenuIcon(false)}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-link" onClick={() => setMenuIcon(false)}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="navbar-link" onClick={() => setMenuIcon(false)}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" className="navbar-link" onClick={() => setMenuIcon(false)}>
              Signup
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link" onClick={() => setMenuIcon(false)}>
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item">{total_item}</span>
            </NavLink>
          </li>
        </ul>

        {/* Show menu icon or close icon based on the menu state */}
        <div className="mobile-navbar-btn">
          {menuIcon ? (
            <CgClose className="mobile-nav-icon" onClick={() => setMenuIcon(false)} />
          ) : (
            <CgMenu className="mobile-nav-icon" onClick={() => setMenuIcon(true)} />
          )}
        </div>
      </div>
    </NavContainer>
  );
};

export default Nav;

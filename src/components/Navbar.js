import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from "../../src/logo.svg";
import styled from 'styled-components'
import {ButtonContainer} from './Button';

export default class Navbar extends Component {

  render() {
    return (
        <NavContainer className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link to="/">
                <img src={logo} alt="store"></img>
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        products
                    </Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                        <i  className="fa fa-cart-plus" />   
                    </span> 
                    my Cart
                </ButtonContainer>
            </Link>
        </NavContainer>
    );
  }
}

const NavContainer = styled.nav`
    background: var(--mainBlue)!important;
    .nav-link{
        color: var(--lightBlue)!important;
        font-size: 1.3rem;
        text-transform:
    }
`

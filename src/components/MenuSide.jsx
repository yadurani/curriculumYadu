import React from "react";
import Social from "./Social";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuContainer = styled.div`
    display: grid;
    grid-template-rows: 180px 1fr 1fr 1fr 1fr;
    height: 100vh;
    margin-bottom: 0;
`;

const MenuSquare = styled.div`
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    margin-bottom: 1px;
    background: white;
    margin-right: 1px;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.5px;
    font-weight: 500;
    &:first-child {
        overflow: hidden;
    }
    h3 {
        font-size: 0.9em;
        margin-bottom: 0px;
        text-transform: uppercase;
    }
    small {
        color: #403f3f;
        font-size: 0.75em;
        font-weight: 300;
    }
    &:hover small {
        color: white;
    }
`;

const ImgSquare = styled.img`
    width: 100%;
`;

const MenuLink = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transform: translateZ(0);
    transition-duration: 0.3s;
    position: relative;
    .menu-link {
        color: black;
        text-decoration: none;
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transform: translateZ(0);
        transition-duration: 0.3s;
        position: relative;

        &:hover {
            color: white;
        }
        &:hover:before {
            transform: scaleX(1);
        }
        &:before {
            content: "";
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #e2005a;
            transform: scaleX(0);
            transform-origin: left center;
            transition-property: transform;
            transition-duration: 0.3s;
            transition-timing-function: ease-out;
        }
        &.active {
            background: #e2005a;
            color: white;
            position: relative;
            small {
                color: white;
            }
            &:after {
                pointer-events: none;
                position: absolute;
                z-index: -1;
                content: "";
                border-style: solid;
                -webkit-transition-duration: 0.3s;
                transition-duration: 0.3s;
                -webkit-transition-property: transform;
                transition-property: transform;
                top: 50%;
                margin-top: -25px;
                right: -10px;
                border-width: 25px 0 25px 15px;
                border-color: transparent transparent transparent #e2005a;
            }
        }
    }
`;
const NameProfile = styled.div`
    position: absolute;
    bottom: 0;
    color: white;
    background: black;
    font-family: "Poppins", sans-serif;
    text-transform: uppercase;
    width: 100%;
    padding: 5px 10px;
    text-align: center;
    font-weight: 600;
`;
const MenuSide = ({ avatar, name }) => (
    <MenuContainer>
        <MenuSquare>
            <ImgSquare src={avatar} alt="Yadu López" />
            <NameProfile>{name}</NameProfile>
        </MenuSquare>

        <MenuSquare>
            <MenuLink>
                <NavLink exact to="/" className="menu-link">
                    <h3>Sobre mi</h3>
                    <small>¿Quien soy?</small>
                </NavLink>
            </MenuLink>
        </MenuSquare>
        <MenuSquare>
            <MenuLink>
                <NavLink exact to="/experiencia" className="menu-link">
                    <h3>Experiencia</h3>
                    <small>Mi trayectoria</small>
                </NavLink>
            </MenuLink>
        </MenuSquare>
        <MenuSquare>
            <MenuLink>
                <NavLink exact to="/portafolio" className="menu-link">
                    <h3>Portafolio</h3>
                    <small>Mi trabajo</small>
                </NavLink>
            </MenuLink>
        </MenuSquare>
        <MenuSquare>
            <MenuLink>
                <NavLink exact to="/contacto" className="menu-link">
                    <h3>Contacto</h3>
                    <small>Mi información</small>
                </NavLink>
            </MenuLink>
        </MenuSquare>
    </MenuContainer>
);

export default MenuSide;

import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import MenuSide from "./MenuSide";
import Social from "./Social";
import { createGlobalStyle } from "styled-components";
import useGetData from "../hooks/useGetData";

const MainStyled = styled.div`
    background: #eaeaea;
    justify-content: center;
    overflow-x: hidden;
    height: 100vh;
`;

const MainContainer = styled.div`
    margin: auto;
    display: grid;
    grid-template-columns: 150px 1fr;
    @media only screen and (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

const Content = styled.div`
    background: white;
    grid-column-start: 2;
`;

const GlobalStyle = createGlobalStyle`
    body {
        font-family: "Poppins",sans-serif;
        margin: 0;
        padding: 0;
        background: #FFFFFF;
    }
        /* width */
    ::-webkit-scrollbar {
    width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #888; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555; 
    }
`;

const Layout = ({ children }) => {
    const data = useGetData();
    return (
        <MainStyled>
            <GlobalStyle />
            <MainContainer>
                <Sidebar>
                    <MenuSide avatar={data.avatar} name={data.name} />
                </Sidebar>
                <Content>{children}</Content>
            </MainContainer>
            <Social social={data.social} />
        </MainStyled>
    );
};

export default Layout;

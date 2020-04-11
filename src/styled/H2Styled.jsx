import React from "react";
import styled from "styled-components";

const StyledH2 = styled.h2`
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    letter-spacing: 1px;
    margin: 1em 0 0 0;
    color: black;
    font-size: 3em;
    text-align: center;
`;

const H2Styled = ({ children }) => <StyledH2>{children}</StyledH2>;

export default H2Styled;

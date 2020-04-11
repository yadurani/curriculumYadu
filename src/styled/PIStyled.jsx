import React from "react";
import styled from "styled-components";

const StyledPI = styled.p`
    color: #757575;
    font-weight: 300;
    font-size: 0.75em;
    line-height: 1.8em;
    font-family: "Poppins", sans-serif;
    font-style: italic;
`;

const PIStyled = ({ children }) => <StyledPI>{children}</StyledPI>;

export default PIStyled;

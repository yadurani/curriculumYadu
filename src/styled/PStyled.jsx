import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
    color: #5d5b5b;
    font-weight: 300;
    font-size: 0.75em;
    line-height: 1.8em;
    font-family: "Poppins", sans-serif;
`;

const PStyled = ({ children }) => <StyledP>{children}</StyledP>;

export default PStyled;

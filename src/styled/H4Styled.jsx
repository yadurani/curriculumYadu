import React from "react";
import styled from "styled-components";

const StyledH4 = styled.h4`
    font-family: "Poppins", sans-serif;
    font-size: 0.9em;
    margin-bottom: 35px;
    text-transform: uppercase;
    color: black;
    letter-spacing: 0.5px;
    margin-top: 15px;
`;

const H4Styled = ({ children }) => <StyledH4>{children}</StyledH4>;

export default H4Styled;

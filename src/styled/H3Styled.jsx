import React from "react";
import styled from "styled-components";

const StyledH3 = styled.h3`
    color: #999999;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    margin-top: 0;
    font-size: 1.2em;
    letter-spacing: 0.5px;
`;

const H3Styled = ({ children }) => <StyledH3>{children}</StyledH3>;

export default H3Styled;

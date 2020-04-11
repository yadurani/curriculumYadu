import React from "react";
import styled from "styled-components";

const StyledContent = styled.section`
    width: 50%;
    margin: auto;
    text-align: center;
    padding: 45px 0 0;
`;

const ContentStyled = ({ children }) => <StyledContent>{children}</StyledContent>;

export default ContentStyled;

import React from "react";
import LineStyled from "../../styled/LineStyled";
import PIStyled from "../../styled/PIStyled";
import H4Styled from "../../styled/H4Styled";
import ContentStyled from "../../styled/ContentStyled";

const Bio = ({ bio }) => {
    return (
        <ContentStyled>
            <LineStyled />
            <H4Styled>Sobre mi</H4Styled>
            <PIStyled>"{bio}"</PIStyled>
        </ContentStyled>
    );
};

export default Bio;

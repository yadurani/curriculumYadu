import React from "react";
import H2Styled from "../styled/H2Styled";
import H3Styled from "../styled/H3Styled";
const Title = ({ title, subtitle }) => {
    return (
        <>
            <H2Styled>{title}</H2Styled>
            <H3Styled>{subtitle}</H3Styled>
        </>
    );
};

export default Title;

import React from "react";
import styled from "styled-components";

const StyledRate = styled.div`
    display: flex;
    margin-right: 2px;

    &.num {
        &-90 {
            span:nth-child(1),
            span:nth-child(2),
            span:nth-child(3),
            span:nth-child(4),
            span:nth-child(5),
            span:nth-child(6),
            span:nth-child(7),
            span:nth-child(8),
            span:nth-child(9) {
                background: #e2005a;
                display: block;
            }
        }
        &-80 {
            span:nth-child(1),
            span:nth-child(2),
            span:nth-child(3),
            span:nth-child(4),
            span:nth-child(5),
            span:nth-child(6),
            span:nth-child(7),
            span:nth-child(8) {
                background: #e2005a;
                display: block;
            }
        }
        &-50 {
            span:nth-child(1),
            span:nth-child(2),
            span:nth-child(3),
            span:nth-child(4),
            span:nth-child(5) {
                background: #e2005a;
                display: block;
            }
        }
    }
    span {
        width: 6px;
        height: 6px;
        border-radius: 2px;
        background: #eaeaea;
        display: flex;
        align-items: center;
        margin-right: 7px;
        transform: rotate(45deg);
    }
`;

const RateStyled = ({ percentage }) => (
    <StyledRate className={`num-${percentage}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </StyledRate>
);

export default RateStyled;

import React from "react";
import ContentStyled from "../../styled/ContentStyled";
import LineStyled from "../../styled/LineStyled";
import H4Styled from "../../styled/H4Styled";
import PStyled from "../../styled/PStyled";
import styled from "styled-components";

const TimeLine = styled.div`
    position: relative;
    &:before {
        content: "";
        width: 1px;
        height: 100%;
        background: #eaeaea;
        position: absolute;
    }
    div:nth-child(odd) {
        .data-exp {
            &:before {
                background: black;
            }
        }
    }
    > div:last-child {
        padding-bottom: 25px;
    }
`;

const TimeLineInner = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
    position: relative;
    align-items: flex-start;
    letter-spacing: 0.5px;
    margin-bottom: 35px;
    &:nth-child(1) {
        padding-top: 35px;
    }

    div:nth-child(2) {
        text-align: left;
        width: 80%;
        p {
            margin-top: 0;
        }
    }
`;
const TimeLineInnerItem = styled.div`
    &.data-exp {
        position: relative;
        text-align: right;
        position: relative;
        .date {
            color: #757575;
            font-weight: 300;
            font-size: 0.8em;
            line-height: 1.9em;
            .current {
                background: #e2005a;
                color: white;
                padding: 2px 5px;
                border-radius: 3px;
                font-size: 0.795em;
                position: relative;
                margin-left: 5px;
                font-style: italic;
                &::before {
                    border-color: transparent #e2005a;
                    border-style: solid;
                    border-width: 6px 5px 6px 0;
                    content: "";
                    display: block;
                    left: -4px;
                    position: absolute;
                    top: 3px;
                    width: 0;
                    z-index: 0;
                }
            }
        }
        h5 {
            font-weight: 400;
            margin: 0;
            font-size: 0.85em;
        }
        p {
            margin-top: 0;
        }
        &::before {
            background: #e2005a;
            border: 4px solid #fff;
            content: " ";
            height: 10px;
            position: absolute;
            right: -40px;
            top: 1px;
            width: 10px;
            border-radius: 50%;
            -webkit-background-clip: padding-box;
            -moz-background-clip: padding;
            background-clip: padding-box;
        }
    }
`;

const Works = ({ data }) => {
    return (
        <ContentStyled className="Experience-container">
            <LineStyled />
            <H4Styled>Historial laboral</H4Styled>
            <TimeLine>
                {data.map((exp, index) => (
                    <TimeLineInner key={`Experience-${index}`}>
                        <TimeLineInnerItem className="data-exp">
                            <div className="date">
                                {exp.startDate} - <span className={exp.endDate === "Actual" && "current"}>{exp.endDate}</span>
                            </div>
                            <h5>{exp.jobTitle}</h5>
                            <PStyled>{exp.company}</PStyled>
                        </TimeLineInnerItem>
                        <TimeLineInnerItem>
                            <PStyled>{exp.jobDescription}</PStyled>
                        </TimeLineInnerItem>
                    </TimeLineInner>
                ))}
            </TimeLine>
        </ContentStyled>
    );
};

export default Works;

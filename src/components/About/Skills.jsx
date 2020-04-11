import React from "react";
import LineStyled from "../../styled/LineStyled";
import RateStyled from "../../styled/RateStyled";
import PStyled from "../../styled/PStyled";
import H4Styled from "../../styled/H4Styled";
import ContentStyled from "../../styled/ContentStyled";
import styled from "styled-components";

const ListLarge = styled.div`
    position: relative;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.5px;
    margin-bottom: 55px;
    &:before {
        content: "";
        width: 1px;
        height: 100%;
        background: #eaeaea;
        position: absolute;
    }
    li {
        list-style: none;
        font-family: "Poppins", sans-serif;
        line-height: 30px;
    }
    .list-event {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 60px;
        position: relative;
        &:before {
            background: black;
            top: -24px;
            content: " ";
            height: 10px;
            left: 49.2%;
            position: absolute;
            width: 10px;
            z-index: 0;
            border-radius: 50%;
        }
        &:after {
            background: #e2005a;
            bottom: -24px;
            content: " ";
            height: 10px;
            left: 49.2%;
            position: absolute;
            width: 10px;
            z-index: 0;
            border-radius: 50%;
        }
        .list-data {
            &:nth-of-type(1) {
                text-align: right;
                padding: 0;
                .list-data-item {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    h5 {
                        font-weight: 400;
                    }
                }
            }
            &:nth-of-type(2) {
                text-align: left;
                padding: 0;
            }
            &-item {
                h5 {
                    margin: 0;
                }
            }
        }
    }
`;

const Skills = ({ skills }) => {
    console.log(skills);

    return (
        <ContentStyled>
            <LineStyled />
            <H4Styled>Habilidades</H4Styled>
            <ListLarge>
                <div className="list-large-inner">
                    <div className="list-event">
                        <ul className="list-data">
                            {skills.length &&
                                skills.map((skill, index) => (
                                    <li key={`skill-${index}`} className="list-data-item">
                                        <RateStyled percentage={skill.percentage} />
                                        <h5>{skill.name}</h5>
                                    </li>
                                ))}
                        </ul>
                        <ul className="list-data">
                            <li className="list-data-item">
                                <h5>Cualidades</h5>
                                <PStyled>Responsable, detallista, enfocada, divertida, creativa y muy social.</PStyled>
                            </li>
                            <li className="list-data-item">
                                <h5>Lenguajes</h5>
                                <PStyled>Responsable, detallista, enfocada, divertida, creativa y muy social.</PStyled>
                            </li>
                            <li className="list-data-item">
                                <h5>Intereses y Hobbies</h5>
                                <PStyled>Responsable, detallista, enfocada, divertida, creativa y muy social.</PStyled>
                            </li>
                        </ul>
                    </div>
                </div>
            </ListLarge>
        </ContentStyled>
    );
};

export default Skills;

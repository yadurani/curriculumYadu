import React from "react";
import ContentStyled from "../../styled/ContentStyled";
import LineStyled from "../../styled/LineStyled";
import H4Styled from "../../styled/H4Styled";
import PStyled from "../../styled/PStyled";
import styled from "styled-components";

const ProyectsList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
    margin-bottom: 65px;
    position: relative;
    :before {
        content: "";
        width: 1px;
        height: 100%;
        background: #eaeaea;
        position: absolute;
        left: 50%;
    }
`;
const ProjectsListItem = styled.div`
    letter-spacing: 0.5px;
    h5 {
        font-weight: 400;
        margin: 0;
        font-size: 0.9em;
        margin-bottom: 0;
    }
    p {
        margin: 0;
    }
    a {
        background: #e2005a;
        color: white;
        border-radius: 3px;
        padding: 2px 5px;
        font-weight: 400;
        margin: 0;
        font-size: 0.8em;
        text-decoration: none;
        font-style: italic;
        position: relative;
        &:hover:before {
            transform: scaleX(1);
            border-radius: 3px;
        }
        &::before {
            content: "";
            position: absolute;
            z-index: -1px;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: black;
            transform: scaleX(0);
            transform-origin: left center;
            transition-property: transform;
            transition-duration: 0.3s;
            transition-timing-function: ease-out;
        }
        span {
            z-index: 2;
            position: relative;
        }
    }
    &:first-child {
        text-align: right;
        position: relative;
        &:before {
            background: black;
            border: 4px solid #fff;
            content: " ";
            height: 10px;
            position: absolute;
            right: -40px;
            top: 35px;
            width: 10px;
            border-radius: 50%;
            -webkit-background-clip: padding-box;
            -moz-background-clip: padding;
            background-clip: padding-box;
        }
    }
    &:last-child {
        text-align: left;
    }
`;

const Projects = ({ projects }) => {
    return (
        <ContentStyled className="Experience-container">
            <LineStyled />
            <H4Styled>Proyectos Personales</H4Styled>
            <ProyectsList>
                {projects.map((project, index) => (
                    <ProjectsListItem key={`Projects-${index}`}>
                        <h5>{project.name}</h5>
                        <PStyled>{project.description}</PStyled>
                        <a href={project.url} target="_blanck">
                            <span>Visitar sitio</span>
                        </a>
                    </ProjectsListItem>
                ))}
            </ProyectsList>
        </ContentStyled>
    );
};

export default Projects;

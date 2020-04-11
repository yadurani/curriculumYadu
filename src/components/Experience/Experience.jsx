import React from "react";
import Title from "../Title";
import Work from "./Works";
import Projects from "./Projects";
import Educacion from "./Educacion";

const Experience = ({ data }) => (
    <div className="Experience">
        <Title title={"Experiencia"} subtitle={"Mi Trayectoria"} />
        <Work data={data.experience} />
        <Projects projects={data.projects} />
        <Educacion educacion={data.education} />
    </div>
);

export default Experience;

import React from "react";
import Title from "../Title";
import Bio from "./Bio";
import Skills from "./Skills";

const About = ({ name, profession, bio, skills }) => {
    return (
        <div className="About">
            <Title title={name} subtitle={profession} />
            <Bio bio={bio} />
            <Skills skills={skills} />
        </div>
    );
};

export default About;

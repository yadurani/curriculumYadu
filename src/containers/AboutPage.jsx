import React from "react";
import About from "../components/About/About";
import useGetData from "../hooks/useGetData";
import Loader from "../components/Loader";

const AboutPage = () => {
    const data = useGetData();
    return data.length === 0 ? (
        <Loader />
    ) : (
        <About skills={data.skills} data={data.education} name={data.name} profession={data.profession} bio={data.bio} />
    );
};

export default AboutPage;

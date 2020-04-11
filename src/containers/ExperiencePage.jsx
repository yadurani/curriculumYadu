import React from "react";
import useGetData from "../hooks/useGetData";
import Experience from "../components/Experience/Experience";
import Loader from "../components/Loader";
const ExperiencePage = () => {
    const data = useGetData();

    return data.length === 0 ? <Loader /> : <Experience data={data} />;
};

export default ExperiencePage;

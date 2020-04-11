import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Main";
import AboutMe from "./containers/AboutPage";
import ExperienceMe from "./containers/ExperiencePage";

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={AboutMe} />
                    <Route exact path="/experiencia" component={ExperienceMe} />
                    <Route exact path="/portafolio" component={ExperienceMe} />
                    <Route exact path="/contacto" component={ExperienceMe} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default Router;

import React from "react";
import "./App.scss";
import "./theme.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { Footer } from "./components/layout/footer/Footer";
import { NavBar } from "./components/layout/navbar/NavBar";
import { AboutMe } from "./components/pages/aboutme/AboutMe";
import { Home } from "./components/pages/home/Home";
import { ProjectDetail } from "./components/pages/project/ProjectDetail";

export const App: React.FC = () => {
    return (
        <Container className="app" fluid>
            <BrowserRouter>
                <NavBar/>

                <div className="app-content">
                    <Switch>
                        <Route path="/" exact={true} component={Home}/>
                        <Route path="/about-me" exact={false} component={AboutMe}/>
                        <Route path="/projects/:projectId" exact={false} component={ProjectDetail}/>
                    </Switch>
                </div>

                <Footer/>
            </BrowserRouter>
        </Container>
    );
};

export default App;

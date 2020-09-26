import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { NavBar } from "./components/layout/navbar/NavBar";
import { Home } from "./components/pages/home/Home";
import { MyWork } from "./components/pages/mywork/MyWork";

export const App: React.FC = () => {
    return (
        <Container className="App" fluid>
            <BrowserRouter>
                <NavBar/>

                <Switch>
                    <Route path="/" exact={true} component={Home}/>
                    <Route path="/my-work" exact={false} component={MyWork}/>
                </Switch>
            </BrowserRouter>
        </Container>
    );
};

export default App;

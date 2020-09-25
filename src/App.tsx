import React from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import { NavBar } from "./components/layout/navbar/NavBar";

export const App: React.FC = () => {

    return (
        <div className="App">
            <Container fluid>
                <NavBar/>
            </Container>
        </div>
    );
};

export default App;

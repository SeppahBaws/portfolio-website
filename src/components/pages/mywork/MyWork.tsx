import React, { useEffect } from "react";
import { Container } from "semantic-ui-react";

export const MyWork: React.FC = () => {
    useEffect(() => {
        document.title = "Seppe Dekeyser - Home";
    }, []);

    return (
        <Container>
            <h1>Hello My Work!</h1>
        </Container>
    );
};

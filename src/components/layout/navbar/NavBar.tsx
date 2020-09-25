import React from "react";
import { Container, Dropdown, Menu, Segment } from "semantic-ui-react";
import "./NavBar.css";

export const NavBar: React.FC = () => {
    const [activeItem, setActiveItem] = React.useState("work");

    const handleClick = (name: string | undefined) => {
        if (!name) {
            return;
        }

        setActiveItem(name);
    };

    return (
        <Segment inverted>
            <Menu inverted secondary>
                <Container>
                    <Menu.Item header>Seppe Dekeyser</Menu.Item>

                    <Menu.Item
                        name={"work"}
                        active={activeItem === "work"}
                        onClick={(e, { name }) => handleClick(name)}
                    >
                        My Work
                    </Menu.Item>
                    <Menu.Item
                        name={"about"}
                        active={activeItem === "about"}
                        onClick={(e, { name }) => handleClick(name)}
                    >
                        About Me
                    </Menu.Item>

                    <Menu.Menu position={"right"}>
                        <Menu.Item
                            name={"cv"}
                            active={activeItem === "cv"}
                            onClick={(e, { name }) => handleClick(name)}
                        >
                            CV
                        </Menu.Item>
                        <Menu.Item
                            name={"contact"}
                            active={activeItem === "contact"}
                            onClick={(e, { name }) => handleClick(name)}
                        >
                            Contact Me
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </Segment>
    );
};

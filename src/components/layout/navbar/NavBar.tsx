import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Container, Menu, Segment } from "semantic-ui-react";
import "./NavBar.scss";

class NavLink {
    display!: string;
    name!: string;
    url!: string;
}

export const NavBar: React.FC = () => {
    const history = useHistory();
    const location = useLocation();

    const linksLeft: NavLink[] = [
        {
            display: "Home",
            name: "home",
            url: "",
        },
        {
            display: "My Work",
            name: "work",
            url: "my-work",
        },
        {
            display: "About Me",
            name: "about",
            url: "about-me",
        }
    ];

    const linksRight: NavLink[] = [
        {
            display: "CV",
            name: "cv",
            url: "cv",
        },
        {
            display: "Contact Me",
            name: "contact",
            url: "contact-me",
        }
    ];

    const renderLink = (link: NavLink) => {
        return (
            <Menu.Item
                key={link.name}
                name={link.name}
                active={location.pathname === "/" + link.url}
                onClick={() => handleLinkClick(link)}
            >
                {link.display}
            </Menu.Item>
        );
    };

    const handleLinkClick = (link: NavLink) => {
        if (location.pathname !== link.url) {
            history.push(link.url);
        }
    };

    return (
        <Segment inverted>
            <Menu inverted secondary>
                <Container>
                    <Menu.Item header>Seppe Dekeyser</Menu.Item>

                    {linksLeft.map((link) => {
                        return renderLink(link);
                    })}

                    <Menu.Menu position={"right"}>
                        {linksRight.map((link) => {
                            return renderLink(link);
                        })}
                    </Menu.Menu>
                </Container>
            </Menu>
        </Segment>
    );
};

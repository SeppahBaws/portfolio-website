import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Container, Menu, Segment } from "semantic-ui-react";
import "./NavBar.scss";

class NavLink {
    display!: string;
    name!: string;
    url!: string;
    ext: boolean = false;
}

export const NavBar: React.FC = () => {
    const history = useHistory();
    const location = useLocation();

    const linksLeft: NavLink[] = [
        {
            display: "Home",
            ext: false,
            name: "home",
            url: "/",
        },
        {
            display: "About Me",
            ext: false,
            name: "about",
            url: "/about-me",
        }
    ];

    const linksRight: NavLink[] = [
        /* {
            display: "CV",
            ext: true,
            name: "cv",
            url: "https://cdn.seppedekeyser.be/SeppeDekeyserCV.pdf",
        },
        {
            display: "Contact Me",
            ext: false,
            name: "contact",
            url: "/contact-me",
        } */
    ];

    const renderLink = (link: NavLink) => {
        if (link.ext) {
            return (
                <Menu.Item
                    href={link.url}
                    target="_blank"
                >
                    {link.display}
                </Menu.Item>
            );
        }

        return (
            <Menu.Item
                key={link.name}
                name={link.name}
                active={location.pathname === link.url}
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
        <Segment id="navbar" inverted>
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

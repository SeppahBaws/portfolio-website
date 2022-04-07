import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Container, Menu, Segment } from "semantic-ui-react";
import "./NavBar.scss";

class NavLink {
    display!: string;
    name!: string;
    url!: string;
    ext = false;
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
        },
        {
            display: "Blog",
            ext: true,
            name: "blog",
            url: "https://renderingpixels.com",
        },
        {
            display: "Resume",
            ext: true,
            name: "resume",
            url: "https://cdn.seppedekeyser.be/SeppeDekeyserResume.pdf",
        }
    ];

    const renderLink = (link: NavLink) => {
        if (link.ext) {
            return (
                <Menu.Item
                    key={`navbar-link-${link.name}`}
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
                </Container>
            </Menu>
        </Segment>
    );
};

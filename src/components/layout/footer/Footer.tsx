import { faGithub, faLinkedin, faMastodon, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React from "react";
import { Container, Segment } from "semantic-ui-react";
import "./Footer.scss";

export const Footer: React.FC = () => {
    return (
        <Segment
            inverted
            className="footer"
        >
            <Container textAlign="center">
                <p>
                    <a
                        className="footer-link"
                        href="https://github.com/SeppahBaws"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                    <a
                        className="footer-link"
                        href="https://linkedin.com/in/seppe-dekeyser-8a2636175/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                    <a
                        className="footer-link"
                        href="https://twitter.com/SeppahBaws"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                    <a
                        className="footer-link"
                        href="https://mastodon.gamedev.place/web/@SeppahBaws"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faMastodon}/>
                    </a>
                </p>
                <p>
                    &copy;{moment().format("YYYY")} Seppe Dekeyser
                </p>
            </Container>
        </Segment>
    );
};

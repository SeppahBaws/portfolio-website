import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Header, Image } from "semantic-ui-react";
import "./AboutMe.scss";

export const AboutMe: React.FC = () => {
    useEffect(() => {
        document.title = "Seppe Dekeyser - About Me";
    }, []);

    return (
        <Container className="about-me">
            <div className="about-me-img-container">
                <Image
                    className="about-me-img"
                    src="https://cdn.seppedekeyser.be/img/pic_face.jpg"
                    circular
                />
            </div>
            <Header as="h3">Hi there!</Header>
            <p>
                I am Seppe Dekeyser, currently a 3rd Game Development student at <Link to="https://digitalartsandentertainment.be">HOWEST Digital Arts and Entertainment</Link>, located in Belgium.</p>
            <p>
                My programming journey started around 2014, with some C# tutorials that I found on the internet.
                Not long after that, the Brackeys YouTube channel popped up on my radar, which woke the game dev worm inside of me.
                Later on during highschool I found out that a game development college exists here in Belgium, and I was pretty excited to get started.
            </p>
            <p>
                Over the course of the different courses here at DAE I discovered that I prefer to work on the stuff under the hood more than on the actual gameplay itself.
                In my spare time I started to dive into OpenGL to learn more about graphics programming, while at the same time my interest in game engines kept on growing as well.
            </p>
        </Container>
    );
};

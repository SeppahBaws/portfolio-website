import React, { useEffect } from "react";
import { Container, Header, Image, List } from "semantic-ui-react";
import "./AboutMe.scss";

export const AboutMe: React.FC = () => {
    useEffect(() => {
        document.title = "Seppe Dekeyser - About Me";
    }, []);

    return (
        <Container className="about-me">
            <div className="intro">
                <div className="about-me-img-container">
                    <Image
                        className="about-me-img"
                        src="https://cdn.seppedekeyser.be/img/pic_face.jpg"
                        circular
                    />
                </div>
                <div className="intro-text">
                    <Header as="h3">Hi there!</Header>
                    <p className="ui text">
                        I am Seppe Dekeyser, an aspiring rendering engineer from Belgium. I am most interested in the technology that makes pretty games and the engines that produce shiny pixels.
                    </p>
                    <p className="ui text">
                        I am always curious about the newest evolutions in the gaming industry, and love to analyze and dissect the latest technologies.
                        My love for game graphics, combined with a very strong interest in game engines, always drive me to improve my knowledge on low-level systems in games.
                    </p>
                </div>
            </div>

            <br />

            <Header as="h3">Skills</Header>
            <List bulleted>
                <List.Item>Game dev: C++, C#, Rust, HLSL, GLSL, Unity, Unreal Engine</List.Item>
                <List.Item>Graphics APIs: experience with Vulkan, DirectX 12, DirectX Raytracing, DirectX 11, OpenGL</List.Item>
                <List.Item>Software: Visual Studio, Git, Perforce, Blender, Photoshop</List.Item>
                <List.Item>Web: React, Svelte, TypeScript / JavaScript, GraphQL, HTML, CSS</List.Item>
            </List>

            <br />

            <Header as="h3">Carreer</Header>
            <List bulleted>
                <List.Item>
                    Jul 2021 - Now // <b>Lead Frontend Developer</b> @ <i><a href="https://edu-tech.be" target="_blank">Edu-Tech</a> (BE)</i>
                    <List bulleted>
                        <List.Item>Designing and creating modules for the frontend website of a brand-new online platform.</List.Item>
                        <List.Item>Creating new reusable components for usage throughout the site.</List.Item>
                        <List.Item>Planning features and reviewing code from teammembers.</List.Item>
                    </List>
                </List.Item>
                <br />
                <List.Item>
                    Feb 2021 - Jun 2021 // <b>R&amp;D Rendering Engineer intern</b> @ <i><a href="http://digitalartsandentertainment.be/page/133/Research" target="_blank">DAE Research</a> (BE)</i>
                    <List bulleted>
                        <List.Item>Researching DirectX 12 and the DirectX Raytracing API.</List.Item>
                        <List.Item>Researching and implementing adaptive sampling in the <a href="https://github.com/microsoft/DirectX-Graphics-Samples" target="_blank">MiniEngine</a>.</List.Item>
                        <List.Item>Profiling C++ and HLSL code both on the CPU and the GPU.</List.Item>
                        <List.Item>Documenting implementation and results.</List.Item>
                    </List>
                </List.Item>
                <br />
                <List.Item>
                    Dec 2017 - Jul 2020 // <b>Lead Frontend Developer</b> @ <i><a href="https://edu-tech.be" target="_blank">Edu-Tech</a> (BE)</i>
                    <List bulleted>
                        <List.Item>Designing and creating modules for the frontend website.</List.Item>
                        <List.Item>Writing GraphQL queries for communicating with the backend API.</List.Item>
                        <List.Item>Leading and coaching the team with planning modules and features for the website.</List.Item>
                    </List>
                </List.Item>
            </List>

            <br />

            <Header as="h3">Education</Header>
            <div className="about-me-education-wrapper">
                <div className="about-me-education-item">
                    <div className="about-me-education-year">
                        2017 - 2021
                    </div>
                    <div className="about-me-education-description">
                        <p className="ui text">
                            <b>Bachelor's Degree in Game Development in Digital Arts and Entertainment</b><br />
                            <i><a href="https://www.howest.be/en" target="_blank">Howest University of Applied Sciences</a>, Kortrijk (BE)</i>
                        </p>
                    </div>
                </div>
                <div className="about-me-education-item">
                    <div className="about-me-education-year">
                        2015 - 2017
                    </div>
                    <div className="about-me-education-description">
                        <p className="ui text">
                            <b>High School Degree in IT Management</b><br />
                            <i><a href="https://miniemeninstituut.be/" target="_blank">Miniemeninstituut</a>, Leuven (BE)</i>
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

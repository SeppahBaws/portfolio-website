import React, { useEffect } from "react";
import { Container, Header, Image } from "semantic-ui-react";
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
                    <p>
                        I am Seppe Dekeyser, an aspiring rendering engineer from Belgium. I am most interested in the technology that makes pretty games and the engines that produce shiny pixels.
                    </p>
                    <p>
                        I am always curious about the newest evolutions in the gaming industry, and love to analyze and dissect the latest technologies.
                        My love for game graphics, combined with a very strong interest in game engines, always drive me to improve my knowledge on low-level systems in games.
                    </p>
                </div>
            </div>

            <br />

            <Header as="h3">Skills</Header>
            <ul>
                <li>Game dev: C++, C#, HLSL, GLSL, Unity, Unreal Engine</li>
                <li>Graphics APIs: DirectX11, OpenGL, currently playing around with Vulkan, DirectX 12 and DirectX Raytracing</li>
                <li>Software: Visual Studio, Git, Perforce, Blender, Photoshop</li>
                <li>Web: React, Svelte, TypeScript / JavaScript, HTML, CSS</li>
            </ul>

            <br />

            <Header as="h3">Carreer</Header>
            <ul>
                <li>
                    Feb 2021 - Jun 2021 // <b>R&amp;D Rendering Engineer intern</b> @ <i><a href="http://digitalartsandentertainment.be/page/133/Research" target="_blank">DAE Research</a> (BE)</i>
                    <ul>
                        <li>Learning DirectX 12 and the DirectX Raytracing API.</li>
                        <li>Researching and implementing adaptive sampling in the <a href="https://github.com/microsoft/DirectX-Graphics-Samples" target="_blank">MiniEngine</a>.</li>
                        <li>Profiling C++ and HLSL code both on the CPU and the GPU.</li>
                        <li>Documenting implementation and results.</li>
                    </ul>
                </li>
                <br />
                <li>
                    Dec 2017 - Jul 2020 // <b>Lead Frontend Developer</b> @ <i><a href="https://edu-tech.be" target="_blank">Edu-Tech</a> (BE)</i>
                    <ul>
                        <li>Designing and creating modules for the frontend website for a new web platform.</li>
                        <li>Making these components work with the backend via GraphQL queries.</li>
                        <li>Communicating with and guiding the team with planning modules and features for the website.</li>
                    </ul>
                </li>
            </ul>

            <br />

            <Header as="h3">Education</Header>
            <div className="about-me-education-wrapper">
                <div className="about-me-education-item">
                    <div className="about-me-education-year">
                        2017 - 2021
                    </div>
                    <div className="about-me-education-description">
                        <p>
                            <b>Bachelor Degree in Game Development in Digital Arts and Entertainment</b><br />
                            <i>Howest University of Applied Sciences, Kortrijk (BE)</i>
                        </p>
                    </div>
                </div>
                <div className="about-me-education-item">
                    <div className="about-me-education-year">
                        2015 - 2017
                    </div>
                    <div className="about-me-education-description">
                        <p>
                            <b>High School Degree in IT Management</b><br />
                            <i>Miniemeninstituut, Leuven (BE)</i>
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

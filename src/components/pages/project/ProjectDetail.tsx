import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { match } from "react-router-dom";
import { Container, Header, Image, Loader } from "semantic-ui-react";
import { Project } from "../../../classes/Project";

export const ProjectDetail: React.FC<{
    match: match,
}> = (props) => {
    const [project, setProject] = useState<Project>();

    useEffect(() => {
        // @ts-ignore
        const id = props.match.params.projectId;
        fetch(`https://api.seppedekeyser.be/project/${id}`)
            .then(async(response) => response.json())
            .then(data => {
                setProject({
                    id: data.result.id,
                    longDescription: data.result.longDesc,
                    previewImg: data.result.previewImg,
                    shortDescription: data.result.shortDesc,
                    tags: [],
                    title: data.result.title,
                });
            });
    }, [props.match.params]);

    if (!project) {
        return <Loader/>;
    }

    return (
        <Container>
            <Header as="h1">Project {project.title}</Header>
            {/* <p>{project.shortDescription}</p>*/}
            {/* <p>{project.longDescription}</p>*/}
            <ReactMarkdown source={project.longDescription}/>
            <Image src={"http://seppedekeyser.be/img-ext/Camping%20Manager%20Prototype.png"}/>
        </Container>
    );
};

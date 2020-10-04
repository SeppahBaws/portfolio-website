import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { match } from "react-router-dom";
import { Container, Header, Label, Loader } from "semantic-ui-react";
import { Project } from "../../../classes/Project";
import "./ProjectDetail.scss";

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
                    tags: data.result.tags,
                    title: data.result.title,
                });
            });
    }, [props.match.params]);

    if (!project) {
        return <Loader/>;
    }

    return (
        <Container>
            <div
                className="header-backdrop"
                style={{
                    backgroundImage: `url(${project.previewImg})`
                }}
            >
                <Header as="h1">{project.title}</Header>
            </div>
            <div className="tags">
                {project.tags.map((t) => {
                    return (
                        <Label
                            key={`tag-${t.id}`}
                        >
                            {t.display}
                        </Label>
                    );
                })}
            </div>
            <ReactMarkdown source={project.longDescription} escapeHtml={false}/>
        </Container>
    );
};

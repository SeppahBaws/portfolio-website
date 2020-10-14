import React, { useEffect, useState } from "react";
import { CodeBlock, atomOneDark } from "react-code-blocks";
import ReactMarkdown from "react-markdown";
import { match } from "react-router-dom";
import { Container, Header, Image, Label, Loader } from "semantic-ui-react";
import { Project } from "../../../classes/Project";
import "./ProjectDetail.scss";

export const ProjectDetail: React.FC<{
    match: match,
}> = (props) => {
    const [project, setProject] = useState<Project>();

    useEffect(() => {
        document.title = "Seppe Dekeyser";
    }, []);

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

    useEffect(() => {
        if (project) {
            document.title = `Seppe Dekeyser - ${project.title}`;
        }
    }, [project]);

    if (!project) {
        return <Loader/>;
    }

    const renderImage = (imgProps: any) => {
        return <Image src={imgProps.src}/>;
    };

    const renderCode = (codeProps: any) => {
        return (
            <div style={{ fontFamily: "Jetbrains Mono" }}>
                <CodeBlock
                    language={codeProps.language}
                    text={codeProps.value}
                    showLineNumbers={true}
                    theme={atomOneDark}
                />
            </div>
        );
    };

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
            <ReactMarkdown
                source={project.longDescription}
                escapeHtml={false}
                // renderers={{ code: renderPre }}
                renderers={{ code: renderCode, image: renderImage }}
            />
        </Container>
    );
};

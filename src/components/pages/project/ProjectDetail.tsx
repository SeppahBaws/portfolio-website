import React, { useEffect, useState } from "react";
import { CodeBlock, atomOneDark } from "react-code-blocks";
import ReactMarkdown from "react-markdown";
import { Redirect, useRouteMatch } from "react-router-dom";
import { Container, Header, Image, Label, Loader } from "semantic-ui-react";
import { Project } from "../../../classes/Project";
import "./ProjectDetail.scss";

export const ProjectDetail: React.FC = () => {
    const [project, setProject] = useState<Project>();

    const match = useRouteMatch<{
        projectId: string | undefined,
    }>();

    useEffect(() => {
        document.title = "Seppe Dekeyser";
    }, []);

    if (match.params.projectId === undefined) {
        return (
            <Redirect to="/" />
        )
    }

    useEffect(() => {
        const id = match.params.projectId;
        fetch(`https://api.seppedekeyser.be/project/${id}`)
            .then(async (response) => response.json())
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
    }, [match.params]);

    useEffect(() => {
        if (project) {
            document.title = `Seppe Dekeyser - ${project.title}`;
        }
    }, [project]);

    if (!project) {
        return <Loader active />;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const renderImage = (imgProps: any) => {
        return <Image src={imgProps.src} />;
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const renderCode = (codeProps: any) => {
        return (
            <div style={{ fontFamily: "Jetbrains Mono NL", fontSize: 13 }}>
                <CodeBlock
                    language={codeProps.language}
                    text={codeProps.value}
                    showLineNumbers={true}
                    theme={atomOneDark}
                />
            </div>
        );
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const renderIframe = (iframe: any) => {
        return (
            <div className="iframe-wrapper" dangerouslySetInnerHTML={{ __html: iframe.value }}>
            </div>
        );
    };

    return (
        <Container className="project-detail">
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
            <Container text>
                <ReactMarkdown
                    source={project.longDescription}
                    escapeHtml={false}
                    renderers={{ code: renderCode, html: renderIframe, image: renderImage }}
                    
                />
            </Container>
        </Container>
    );
};

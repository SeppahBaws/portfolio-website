import React, { useEffect, useState } from "react";
import { Container, Grid, Loader } from "semantic-ui-react";
import { Project } from "../../../classes/Project";
import { WorkCard } from "../../common/workcard/WorkCard";

export const Home: React.FC = () => {
    const [mainProjects, setMainProjects] = useState<Project[]>();
    const [sideProjects, setSideProjects] = useState<Project[]>();

    useEffect(() => {
        document.title = "Seppe Dekeyser - Home";

        // Get the main projects
        fetch("https://api.seppedekeyser.be/projects/main")
            .then(async(response) => response.json())
            .then(data => {
                const projs: Project[] = [];
                for (const p of data.result) {
                    projs.push({
                        id: p.id,
                        longDescription: p.longDesc,
                        previewImg: p.previewImg,
                        shortDescription: p.shortDesc,
                        tags: p.tags,
                        title: p.title,
                    });
                }
                setMainProjects(projs);
            });

        // Get the side projects
        fetch("https://api.seppedekeyser.be/projects/side")
            .then(async(response) => response.json())
            .then(data => {
                const projs: Project[] = [];
                for (const p of data.result) {
                    projs.push({
                        id: p.id,
                        longDescription: p.longDesc,
                        previewImg: p.previewImg,
                        shortDescription: p.shortDesc,
                        tags: p.tags,
                        title: p.title,
                    });
                }
                setSideProjects(projs);
            });
    }, []);

    if (!mainProjects || !sideProjects) {
        return <Loader active/>;
    }

    return (
        <Container className="home">
            <h2>Main Projects</h2>
            <div className="ui stackable three column grid">
                {mainProjects.map((proj) => {
                    return (
                        <Grid.Column
                            key={`work-item-col-${proj.id}`}
                        >
                            <WorkCard
                                id={proj.id}
                                previewImg={proj.previewImg}
                                title={proj.title}
                                description={proj.shortDescription}
                                tags={proj.tags}
                            />
                        </Grid.Column>
                    );
                })}
            </div>
            <br/>
            <h2>Side Projects</h2>
            <div className="ui stackable three column grid">
                {sideProjects.map((proj) => {
                    return (
                        <Grid.Column
                            key={`work-item-col-${proj.id}`}
                        >
                            <WorkCard
                                id={proj.id}
                                previewImg={proj.previewImg}
                                title={proj.title}
                                description={proj.shortDescription}
                                tags={proj.tags}
                            />
                        </Grid.Column>
                    );
                })}
            </div>
        </Container>
    );
};

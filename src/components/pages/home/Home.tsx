import React, { useEffect, useState } from "react";
import { Container, Grid, Loader } from "semantic-ui-react";
import { Project } from "../../../classes/Project";
import { WorkCard } from "../../common/workcard/WorkCard";

export const Home: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>();

    useEffect(() => {
        document.title = "Seppe Dekeyser - Home";

        fetch("https://api.seppedekeyser.be/projects")
            .then(async(response) => response.json())
            .then(data => {
                console.log(data);
                const projs: Project[] = [];
                for (const p of data.result) {
                    projs.push({
                        id: p.id,
                        longDescription: p.longDesc,
                        previewImg: p.previewImg,
                        shortDescription: p.shortDesc,
                        tags: [],
                        title: p.title,
                    });
                }
                setProjects(projs);
            });
    }, []);

    if (!projects) {
        return <Loader active/>;
    }

    return (
        <Container>
            <h2>My Projects</h2>
            <Grid columns={3}>
                <Grid.Row>
                    {projects.map((proj) => {
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
                </Grid.Row>
            </Grid>
        </Container>
    );
};

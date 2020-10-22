import React, { useEffect, useState } from "react";
import { Container, Grid, Loader } from "semantic-ui-react";
import { Project } from "../../../classes/Project";
import { WorkCard } from "../../common/workcard/WorkCard";
import "./Home.scss";

export const Home: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>();

    useEffect(() => {
        document.title = "Seppe Dekeyser - Home";

        // Get the projects
        fetch("https://api.seppedekeyser.be/projects")
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
                setProjects(projs);
            });
    }, []);

    if (!projects) {
        return <Loader active/>;
    }

    return (
        <Container className="home">
            <h2>My Projects</h2>
            <div className={`ui stackable ${projects.length > 2 ? "three" : "two"} column grid`}>
                {projects.map((proj) => {
                    return (
                        <Grid.Column
                            key={`work-item-col-${proj.id}`}
                            className="home-item-column"
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
        </Container>
    );
};

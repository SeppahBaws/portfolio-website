import React from "react";
import { Link } from "react-router-dom";
import { Card, Image, Label } from "semantic-ui-react";
import "./WorkCard.scss";
import { Tag } from "../../../classes/Tag";

export const WorkCard: React.FC<{
    id: string,
    previewImg: string,
    title: string,
    description: string,
    tags: Tag[],
}> = (props) => {
    return (
        <Card
            key={`workcard-${props.id}`}
        >
            <Link to={`/projects/${props.id}`}>
                <Image src={props.previewImg}/>
            </Link>
            <Card.Content>
                <Card.Header>{props.title}</Card.Header>
                <Card.Description>
                    {props.description}
                    <p className={"workcard-readmore"}>
                        <Link to={`/projects/${props.id}`}>
                            Read more...
                        </Link>
                    </p>
                </Card.Description>
            </Card.Content>
            {props.tags.length > 0
                ? (
                    <Card.Content extra>
                        {props.tags.map((tag) => {
                            return (
                                <Label
                                    key={`workcard-${props.id}-tag-${tag.id}`}
                                    content={tag.display}
                                />
                            );
                        })}
                    </Card.Content>
                )
                : <span/>
            }
        </Card>
    );
};

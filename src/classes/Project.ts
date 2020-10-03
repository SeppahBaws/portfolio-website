import { Tag } from "./Tag";

export class Project {
    id!: string;
    title!: string;
    previewImg!: string;
    shortDescription!: string;
    longDescription!: string;
    tags!: Tag[];
}

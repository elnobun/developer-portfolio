// Interface to describe the object data
import {IconType} from "react-icons";

export interface InterfaceService {
    Icon: IconType
    title: string,
    tech: Array<string>,
    description: string,
}

export interface InterfaceSkill {
    Icon: IconType,
    name: string,
    level: string,
}

export interface InterfaceExperience {
    job: string,
    company: string,
    period: string
}

export interface InterfaceEducation {
    Icon: IconType,
    school: string,
    degree: string,
}

export type Category = "designs"|"javascript"|"react"|"express"|"wordpress"
export interface InterfaceProject {
    name: string,
    description: string,
    image_URL: string,
    deployed_URL: string,
    github_URL: string,
    category: Category[],
    techStack: string[]
}




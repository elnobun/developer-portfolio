import {RiComputerLine} from "react-icons/ri";
import {SiMaterialdesignicons} from "react-icons/si";
import {AiOutlineApi} from "react-icons/ai";
import {InterfaceService} from "./types";
import {BiServer} from "react-icons/bi";

export const services: InterfaceService[] = [
    {
        Icon: RiComputerLine,
        title: 'FrontEnd Web Development',
        tech: ["HTML", "SCSS", "JavaScript", "Reactjs", "Nextjs"],
        description:
            `I can build modern, interactive and responsive websites. I am a strong advocate of <q>Mobile first philosophy</q>, <em>SEO</em> and <em>Accessibility</em>.`,
    },
    {
        Icon: BiServer,
        title: 'Backend Development',
        tech: ["MongoDB", "Postgres", "Express", "Nodejs"],
        description:
            `I can handle databases, server and APIs using <em>Express</em> and other popular frameworks.`,
    },
    {
        Icon: SiMaterialdesignicons,
        title: 'UI/UX Design',
        tech: ["Adobe XD", "Figma", "Illustrator"],
        description:
            `I find creative ways to solve UX problems & the ability to turn an idea into reality. Develop UI mockups and prototypes  that clearly illustrate how the platform functions and looks like.`,
    },
    {
        Icon: AiOutlineApi,
        title: 'Content Management Systems',
        tech: ["WordPress", "Contentful"],
        description:
            `I can develop site templates and themes in line with budget, brief and test to QA criteria, using WordPress. I ensure the build is in line with signed off designs and functionality.`,
    }
]

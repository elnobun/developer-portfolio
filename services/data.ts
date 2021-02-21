import {RiComputerLine} from "react-icons/ri";
import {SiMaterialdesignicons} from "react-icons/si";
import {AiOutlineApi} from "react-icons/ai";
import {InterfaceEducation, InterfaceExperience, InterfaceService, InterfaceSkill} from "./types";
import {BiServer} from "react-icons/bi";
import {BsCircleFill} from "react-icons/bs";
import {GiGraduateCap} from "react-icons/gi";

// Services
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

// Experience
export const experiences: InterfaceExperience[] = [
    {
        job: 'Web Developer / Product Analyst',
        company: 'Digital Echoes, London UK',
        period: 'Sept. 2019 - Present'
    },
    {
        job: 'Lead Web Developer',
        company: 'DevHype, London UK',
        period: 'Jan 2018 - Aug 2019'
    },
    {
        job: 'Code Mentor / Reviewer',
        company: 'Udacity Inc. Sans Francisco, CA, US',
        period: 'Jun 2016 - Nov 2017'
    }

]

// Education
export const educations: InterfaceEducation[] = [
    {
        Icon: GiGraduateCap,
        school: 'University Of Leicester',
        degree: 'Masters, Leicester UK'
    },
    {
        Icon: GiGraduateCap,
        school: 'Udacity Inc.',
        degree: 'FSND NanoDegree, US'
    }
]

// Language and Frameworks
export const languages: InterfaceSkill[] = [
    {
        Icon: BsCircleFill,
        name: "HTML",
        level: "85%"
    },
    {
        Icon: BsCircleFill,
        name: "SCSS Preprocessor",
        level: "70%"
    },
    {
        Icon: BsCircleFill,
        name: "CSS Grid",
        level: "80%"
    },
    {
        Icon: BsCircleFill,
        name: "Javascript",
        level: "75%"
    },
    {
        Icon: BsCircleFill,
        name: "React & Redux",
        level: "70%"
    },
    {
        Icon: BsCircleFill,
        name: "Bootstrap",
        level: "90%"
    }
]

// Tools
export const tools: InterfaceSkill[] = [
    {
        Icon: BsCircleFill,
        name: "Figma",
        level: "85%"
    },
    {
        Icon: BsCircleFill,
        name: "Adobe XD",
        level: "85%"
    },
    {
        Icon: BsCircleFill,
        name: "Illustrator",
        level: "70%"
    }
]

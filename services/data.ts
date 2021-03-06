import {
    InterfaceEducation,
    InterfaceExperience,
    InterfaceProject,
    InterfaceService,
    InterfaceSkill,
} from "./types";
import {BiServer} from "react-icons/bi";
import {BsBootstrapFill} from "react-icons/bs";
import {GiGraduateCap} from "react-icons/gi";
import {AiFillHtml5} from "react-icons/ai";
import {DiSass} from "react-icons/di";
import {GrGrid} from "react-icons/gr";
import {RiComputerLine, RiReactjsFill} from "react-icons/ri";
import {SiAdobeillustrator, SiAdobexd, SiJavascript, SiMaterialdesignicons, SiNextDotJs} from "react-icons/si";
import {AiOutlineApi} from "react-icons/ai";
import {FiFigma} from "react-icons/fi";

// Services
export const services: InterfaceService[] = [
    {
        Icon: RiComputerLine,
        title: "FrontEnd Web Development",
        tech: ["HTML", "SCSS", "JavaScript", "Reactjs", "Nextjs"],
        description: `I can build modern, interactive and responsive websites. I am a strong advocate of <q>Mobile first philosophy</q>, <em>SEO</em> and <em>Accessibility</em>.`,
    },
    {
        Icon: BiServer,
        title: "Backend Development",
        tech: ["MongoDB", "Postgres", "Express", "Nodejs"],
        description: `I can handle databases, server and APIs using <em>Express</em> and other popular frameworks.`,
    },
    {
        Icon: SiMaterialdesignicons,
        title: "UI/UX Design",
        tech: ["Adobe XD", "Figma", "Illustrator"],
        description: `I find creative ways to solve UX problems, with the ability to turn an idea into reality. I Develop UI mockups and prototypes  that clearly illustrate how the platform functions and looks like.`,
    },
    {
        Icon: AiOutlineApi,
        title: "Content Management Systems",
        tech: ["WordPress", "Contentful"],
        description: `I can develop site templates and themes within budget, brief and test to QA criteria, using WordPress. I ensure the build is in-line with signed off designs and functionality.`,
    },
];

// Experience
export const experiences: InterfaceExperience[] = [
    {
        job: "Web Developer / Product Analyst",
        company: "Digital Echoes, London UK",
        period: "Sept. 2019 - Present",
    },
    {
        job: "Lead Web Developer",
        company: "DevHype, London UK",
        period: "Nov 2017 - Aug 2019",
    },
    {
        job: "Code Mentor / Reviewer",
        company: "Udacity Inc. Sans Francisco, CA, US",
        period: "Jun 2016 - Nov 2017",
    },
];

// Education
export const educations: InterfaceEducation[] = [
    {
        Icon: GiGraduateCap,
        school: "University Of Leicester",
        degree: "Masters, Leicester UK",
    },
    {
        Icon: GiGraduateCap,
        school: "Udacity Inc.",
        degree: "Full Stack Web Development, US",
    },
];

// Language and Frameworks
export const languages: InterfaceSkill[] = [
    {
        Icon: AiFillHtml5,
        name: "HTML",
        level: "85%",
    },
    {
        Icon: DiSass,
        name: "SCSS Preprocessor",
        level: "70%",
    },
    {
        Icon: GrGrid,
        name: "CSS Grid",
        level: "80%",
    },
    {
        Icon: SiJavascript,
        name: "Javascript",
        level: "75%",
    },
    {
        Icon: RiReactjsFill,
        name: "React & Redux",
        level: "70%",
    },
    {
      Icon: SiNextDotJs,
      name: "NextJS",
      level: "70%"
    },
    {
        Icon: BsBootstrapFill,
        name: "Bootstrap",
        level: "90%",
    },
];

// Tools
export const tools: InterfaceSkill[] = [
    {
        Icon: FiFigma,
        name: "Figma",
        level: "85%",
    },
    {
        Icon: SiAdobexd,
        name: "Adobe XD",
        level: "85%",
    },
    {
        Icon: SiAdobeillustrator,
        name: "Illustrator",
        level: "70%",
    },
];

// Projects
export const projects: InterfaceProject[] = [
    {
        id: 1,
        name: "Budget Manager",
        description:
            "A Web Application that keeps track of your expenses and help you manage budget.",
        image_URL: "/images/budget.png",
        deployed_URL: "https://react-budget-manager-app.herokuapp.com",
        github_URL: "https://github.com/elnobun/react-budget-application",
        category: ["react"],
        techStack: ["React", "Momentjs", "SCSS", "firebase"],
        isOpen: false,
    },
    {
        id: 2,
        name: "Food Recipe Website",
        description:
            "A Food Recipe website to find the perfect main meal, desert or accompaniment for a next meal.",
        image_URL: "/images/foodFit.png",
        deployed_URL: "https://foodfit.ellispace.com",
        github_URL: "",
        category: ["wordpress"],
        techStack: ["Wordpress", "Elementor", "JetEngine"],
        isOpen: false,
    },
    {
        id: 3,
        name: "E-Commerce Website",
        description:
            "Puredrinks.co.uk company website e-commerce products with user payment Gateway.",
        image_URL: "/images/ecommerce.png",
        deployed_URL: "https://puredrinks.co.uk/",
        github_URL: "",
        category: ["wordpress"],
        techStack: ["Wordpress", "WooCommerce", "Analytics"],
        isOpen: false,
    },
    {
        id: 4,
        name: "Charity Website",
        description: "London Rangers Community Charity Website.",
        image_URL: "/images/charity.png",
        deployed_URL: "https://community.londonrangers.org.uk/",
        github_URL: "",
        category: ["wordpress"],
        techStack: ["Wordpress", "Elementor", "Analytics"],
        isOpen: false,
    },
    {
        id: 5,
        name: "Movie Hub",
        description: "Search a list of your favourite movies",
        image_URL: "/images/movieHub.png",
        deployed_URL: "https://moviehub.netlify.app/",
        github_URL: "",
        category: ["react"],
        techStack: ["React", "themoviedb API", "SCSS"],
        isOpen: false,
    },
    {
        id: 6,
        name: "Contact Manager Web App",
        description: "A Web Application that manages a contact list.",
        image_URL: "/images/contactManager.png",
        deployed_URL: "https://elnobun.github.io/contact-management-app/#/",
        github_URL: "https://github.com/elnobun/contact-management-app",
        category: ["javascript"],
        techStack: ["Javascript", "Json API", "Bootstrap"],
        isOpen: false,
    },
    {
        id: 7,
        name: "Quote Generator",
        description:
            "A Web Application that displays inspiring quotes on every refresh",
        image_URL: "/images/quote.png",
        deployed_URL: "https://elnobun.github.io/quote-generator/",
        github_URL: "https://github.com/elnobun/quote-generator",
        category: ["javascript"],
        techStack: ["Javascript", "Quotes API", "SCSS"],
        isOpen: false,
    },
    {
        id: 8,
        name: "Advanced Todos Application",
        description: "A regular todos application with some extra features",
        image_URL: "/images/todoApp.png",
        deployed_URL: "https://ellis-todo-app.netlify.app/",
        github_URL: "",
        category: ["javascript"],
        techStack: ["Javascript", "SCSS", "moment.js", "Webpack"],
        isOpen: false,
    },
    {
        id: 9,
        name: "Hangman Game (Desktop Only)",
        description: "An interesting hangman game to test your cognitive ability.",
        image_URL: "/images/hangman.png",
        deployed_URL: "https://ellis-hangman.netlify.app/",
        github_URL: "",
        category: ["javascript"],
        techStack: ["Javascript", "SCSS", "Webpack"],
        isOpen: false,
    },
    {
        id: 10,
        name: "Notes App",
        description: "Keep record of important events, and never forget.",
        image_URL: "/images/notesApp.png",
        deployed_URL: "https://ellis-notes-app.netlify.app/",
        github_URL: "",
        category: ["javascript"],
        techStack: ["Javascript", "SCSS", "moment.js", "Webpack"],
        isOpen: false,
    },
    {
        id: 11,
        name: "Google-Search Design",
        description:
            "This is a mini-project to rebuild google.com homepage using HTML and SCSS. The goal of this mini-project " +
            "is to self-reflect on how elements get placed on the page and roughly how they get styled and aligned.",
        image_URL: "/images/google.png",
        deployed_URL: "https://elnobun.github.io/google-search-page/",
        github_URL: "https://elnobun.github.io/google-search-page/",
        category: ["designs"],
        techStack: ["HTML", "SCSS", "GIT"],
        isOpen: false,
    },
];

import {
    InterfaceEducation,
    InterfaceExperience,
    InterfaceProject,
    InterfaceService,
    InterfaceSkill,
} from "./types";
import {AiFillHtml5} from "react-icons/ai";
import {AiOutlineApi} from "react-icons/ai";
import {BiServer} from "react-icons/bi";
import {BsBootstrapFill} from "react-icons/bs";
import {DiSass} from "react-icons/di";
import {FiFigma} from "react-icons/fi";
import {GiGraduateCap} from "react-icons/gi";
import {GrGrid} from "react-icons/gr";
import {RiComputerLine, RiReactjsFill} from "react-icons/ri";
import {SiAdobeillustrator, SiAdobexd, SiJavascript, SiMaterialdesignicons, SiNextdotjs} from "react-icons/si";
import {SiTypescript} from "react-icons/si";

// Services
export const services: InterfaceService[] = [
    {
        Icon: RiComputerLine,
        title: "FrontEnd Web Development",
        tech: ["HTML", "SCSS", "JavaScript", "Reactjs", "Nextjs"],
        description: ``,
    },
    {
        Icon: BiServer,
        title: "Backend Development",
        tech: ["MongoDB", "Postgres", "Express", "Nodejs"],
        description: ``,
    },
    {
        Icon: SiMaterialdesignicons,
        title: "UI/UX Design",
        tech: ["Adobe XD", "Figma", "Illustrator"],
        description: ``,
    },
    {
        Icon: AiOutlineApi,
        title: "Content Management Systems",
        tech: ["WordPress", "Contentful"],
        description: ``,
    },
];

// Experience
export const experiences: InterfaceExperience[] = [
    {
        job: "Lead Front End Web Developer",
        company: "Tonic Fusion LLP. London, UK",
        period: "May 2021 - Present"
    },
    {
        job: "Front End Web Developer / Product Analyst",
        company: "Digital Echoes, London UK",
        period: "Sept 2019 - May 2021",
    },
    {
        job: "Freelance Web Developer",
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
        name: "HTML5 (Semantic)",
        level: "85%",
    },
    {
        Icon: DiSass,
        name: "SCSS Preprocessor",
        level: "90%",
    },
    {
        Icon: GrGrid,
        name: "CSS Grid",
        level: "90%",
    },
    {
        Icon: SiJavascript,
        name: "JavaScript",
        level: "75%",
    },
    {
        Icon: SiTypescript,
        name: "TypeScript",
        level: "75%"
    },
    {
        Icon: RiReactjsFill,
        name: "React & Redux",
        level: "70%",
    },
    {
      Icon: SiNextdotjs,
      name: "NextJS",
      level: "70%"
    },
    {
        Icon: BsBootstrapFill,
        name: "Bootstrap 5",
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
        name: "E-Commerce Website",
        description:
            "Puredrinks.co.uk company website e-commerce products with user payment Gateway.",
        image_URL: "/images/ecommerce.png",
        deployed_URL: "https://puredrinks.co.uk/",
        github_URL: "",
        category: ["web", "wordpress"],
        techStack: ["Wordpress", "WooCommerce", "Analytics"],
        isOpen: false,
    },
    {
        id: 2,
        name: "Lonsdale Services UK",
        description:
            "A complete rebuild of the Lonsdale Services Uk interface, whose platform offers strategic financial long-term planning for pensioners aged 65+, retirees aged 50 and 60, mortgagors aged between 30 and 50. This build was aimed at making information and services easily accessible to this range of users.",
        image_URL: "/images/lonsdaleServices.jpg",
        deployed_URL: "https://www.lonsdaleservices.co.uk/",
        github_URL: "",
        category: ["web", "javascript"],
        techStack: ["HTML", "SCSS", "JavaScript"],
        isOpen: false,
    },
    {
        id: 3,
        name: "Blackphone Privy 2.0 UK",
        description:
            "Built this platform to promote Blackphone 2.0 Privy NEW mobile security web service, to enhance Blackphone Mobile Enterprise Data Security Service to customers and stakeholders.",
        image_URL: "/images/blackphonePrivy2.jpg",
        deployed_URL: "https://www.blackphone.co.uk/privy-2/",
        github_URL: "",
        category: ["web", "javascript"],
        techStack: ["HTML", "SCSS", "JavaScript", "Adobe Animate"],
        isOpen: false,
    },
    {
        id: 4,
        name: "University Of Hersfordshire Sports",
        description:
            "University Of Hertfordshire Sports Membership Web Service that significantly improved Students and prospective subscribers access to UH membership service.",
        image_URL: "/images/uhSports.jpg",
        deployed_URL: "https://sport.herts.ac.uk/",
        github_URL: "",
        category: ["web", "javascript"],
        techStack: ["HTML", "SCSS", "JavaScript"],
        isOpen: false,
    },

    {
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
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

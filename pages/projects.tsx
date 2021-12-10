import {projects as projectsData} from "../services/data";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import {useState} from "react";
import {Category} from "../services/types";
import {fadeInUp, stagger} from "../animations";
import {motion} from "framer-motion";
import Head from "next/head";

const Projects = () => {

    const [projects, setProjects] = useState(projectsData)
    const [active, setActive] = useState("all")
    const [showDetail, setShowDetail] = useState<number|null>(null)


    const handleProjectsCategory = (category: Category | "all") => {
        if (category === "all") {
            setProjects(projectsData)
            setActive(category)
            return
        }
        const newProjectsArr = projectsData.filter(project => project.category.includes(category))
        setProjects(newProjectsArr)
        setActive(category)
    }

    return (
        <div
            className="overflow-y-scroll bg-white border-t dark:bg-dark-card dark:border-dark" style={{height: "85vh"}}>
            <Head>
                <title>Projects | Ellis Enobun | Web Developer | Web Designer</title>
            </Head>
            <nav className="p-4 bg-white dark:bg-dark-card">
                <ProjectsNavbar handleProjectsCategory={handleProjectsCategory} active={active}/>
            </nav>
            <motion.div
                variants={stagger}
                initial="initial"
                animate="animate"
                className="relative grid grid-cols-12 gap-4 px-4 py-4 dark:bg-dark-card border-top dark:border-dark">
                {
                    projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="col-span-12 overflow-hidden bg-white rounded-md shadow-md sm:col-span-6 lg:col-span-4 dark:bg-dark">
                            <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail}/>
                        </motion.div>
                    ))
                }
            </motion.div>
        </div>
    )
}

export default Projects

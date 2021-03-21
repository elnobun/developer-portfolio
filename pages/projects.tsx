import {projects as projectsData} from "../services/data";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import {useState} from "react";
import {Category} from "../services/types";
import {fadeInUp, routeAnimation, stagger} from "../animations";
import {motion} from "framer-motion";

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
        <motion.div
            variants={routeAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="bg-white dark:bg-dark-card border-t dark:border-dark overflow-y-scroll" style={{height: "85vh"}}>
            <nav className="bg-white dark:bg-dark-card p-4">
                <ProjectsNavbar handleProjectsCategory={handleProjectsCategory} active={active}/>
            </nav>
            <motion.div
                variants={stagger}
                initial="initial"
                animate="animate"
                className="grid grid-cols-12 gap-4 dark:bg-dark-card border-t dark:border-dark relative px-4 py-4 border-t">
                {
                    projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-md overflow-hidden bg-white dark:bg-dark shadow-md">
                            <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail}/>
                        </motion.div>
                    ))
                }
            </motion.div>
        </motion.div>
    )
}

export default Projects

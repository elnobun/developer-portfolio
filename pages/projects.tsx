import {projects as projectsData} from "../services/data";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import {useState} from "react";
import {Category} from "../services/types";

const Projects = () => {

    const [projects, setProjects] = useState(projectsData)
    const [active, setActive] = useState("all")

    const handleProjectsCategory = (category:Category | "all") => {
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
        <div className="bg-white border-t dark:border-dark overflow-y-scroll" style={{ height: "82vh"}}>
            <nav className="bg-white dark:bg-dark-card p-4">
                <ProjectsNavbar handleProjectsCategory={handleProjectsCategory} active={active}/>
            </nav>
            <div className="grid grid-cols-12 gap-4 relative px-4 py-8 border-t">
                {
                    projects.map((project, index) => (
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-md overflow-hidden bg-white shadow-md">
                            <ProjectCard project={project} key={index} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects

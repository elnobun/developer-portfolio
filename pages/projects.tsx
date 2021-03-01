import {projects} from "../services/data";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {

    return (
        <div className="border-t dark:border-dark overflow-y-scroll" style={{ height: "82vh"}}>
            <nav className="bg-white dark:bg-dark-card p-4">Navigation</nav>
            <div className="grid grid-cols-12 gap-4 relative py-4">
                {
                    projects.map((project, index) => (
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-lg overflow-hidden bg-white shadow-md">
                            <ProjectCard project={project} key={index} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects

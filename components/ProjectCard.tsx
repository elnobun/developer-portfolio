import {FunctionComponent, useState} from "react";
import {InterfaceProject} from "../services/types";
import {AiFillGithub } from "react-icons/ai";
import {MdClose, MdInsertLink} from "react-icons/md";

const ProjectCard: FunctionComponent<{ project: InterfaceProject }> = ({project}) => {
    const {name, techStack, github_URL, image_URL, description, deployed_URL} = project

    const [showDetail, setShowDetail] = useState(false)

    return (
        <>
            <div className="cursor-pointer" onClick={() => setShowDetail(true)}>
                <img src={image_URL} alt={`${name} image`}/>
                <h2 className="my-2 text-center dark:text-black">{name}</h2>
            </div>
            {
                showDetail && (
                    <div
                        className="p-4 py-16 border-t dark:border-dark absolute top-0 left-0 z-10 h-auto w-full grid md:grid-cols-2 gap-x-6 bg-white dark:bg-dark-card">
                        <div>
                            <img src={image_URL} alt={`${name} image`} className="rounded-md w-full"/>
                            <div className="flex justify-center my-4 space-x-4">
                                {github_URL &&
                                <a href={github_URL}
                                   className="bg-gray-300 dark:bg-white hover:bg-gray-400 dark:hover:bg-gray-200 text-gray-800 py-2 px-4 space-x-2 rounded flex items-center">
                                    <AiFillGithub size={20} /><span>Github</span>
                                </a>}
                                {deployed_URL &&
                                <a href={deployed_URL}
                                   className="bg-gray-300 dark:bg-white hover:bg-gray-400 dark:hover:bg-gray-200 text-gray-800 py-2 px-4 space-x-2 rounded flex items-center">
                                    <MdInsertLink size={20}/><span>View Project</span>
                                </a>}
                            </div>
                        </div>
                        <div>
                            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
                            <h3 className="mb-3 font-medium w-96">{description}</h3>
                            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                                {
                                    techStack.map((tech, index) => (
                                        <span key={index}
                                              className="text-xs font-medium bg-gray-200 rounded-full px-2 py-0.5 text-gray-700">{tech}</span>
                                    ))
                                }
                            </div>
                        </div>
                        <button
                            onClick={() => setShowDetail(false)}
                            className="absolute p-1 rounded-full top-3 right-3 focus:outline-none bg-gray-300 dark:bg-white hover:bg-gray-400 dark:hover:bg-gray-200 text-gray-800">
                            <MdClose size={30}/>
                        </button>
                    </div>
                )
            }
        </>
    )
}

export default ProjectCard

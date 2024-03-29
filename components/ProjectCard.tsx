import {FunctionComponent} from "react";
import {InterfaceProject} from "../services/types";
import {AiFillGithub} from "react-icons/ai";
import {MdClose, MdInsertLink} from "react-icons/md";
import Image from "next/image";
import {fadeInUp, stagger} from "../animations";
import {motion} from "framer-motion";

const ProjectCard: FunctionComponent<{
    project: InterfaceProject;
    showDetail: null | number;
    setShowDetail: (id: null | number) => void;
}> = ({project, showDetail, setShowDetail}) => {
    const {
        id,
        name,
        techStack,
        github_URL,
        image_URL,
        description,
        deployed_URL,
    } = project;

    return (
        <>
            <div className="cursor-pointer" onClick={() => setShowDetail(id)}>
                <Image
                    src={image_URL}
                    alt={`${name} image`}
                    width="287"
                    height="141"
                    layout="responsive"
                />
                <h2 className="my-2 text-center dark:text-gray-300">{name}</h2>
            </div>
            {showDetail === id && (
                <div
                    className="absolute top-0 left-0 z-10 grid w-full h-auto p-4 py-16 bg-white md:p-10 dark:border-dark md:grid-cols-2 gap-x-6 dark:bg-dark-card">
                    <motion.div variants={stagger} initial="initial" animate="animate">
                        <motion.div
                            variants={fadeInUp}
                            className="border-2 border-gray-200 rounded-lg"
                        >
                            <Image
                                src={image_URL}
                                alt={`${name} image`}
                                width="287"
                                height="141"
                                layout="responsive"
                                className="w-full rounded-md"
                            />
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            className="flex justify-center my-4 space-x-4"
                        >
                            {github_URL && (
                                <a
                                    href={github_URL}
                                    target="_blank"
                                    className="flex items-center px-4 py-2 space-x-2 text-gray-800 bg-gray-300 rounded dark:bg-white hover:bg-gray-400 dark:hover:bg-gray-200"
                                >
                                    <AiFillGithub size={20}/>
                                    <span>Github</span>
                                </a>
                            )}
                            {deployed_URL && (
                                <a
                                    href={deployed_URL}
                                    target="_blank"
                                    className="flex items-center px-4 py-2 space-x-2 text-gray-800 bg-gray-300 rounded dark:bg-white hover:bg-gray-400 dark:hover:bg-gray-200"
                                >
                                    <MdInsertLink size={20}/>
                                    <span>View Project</span>
                                </a>
                            )}
                        </motion.div>
                    </motion.div>
                    <motion.div variants={stagger} initial="initial" animate="animate">
                        <motion.h2
                            variants={fadeInUp}
                            className="mb-3 text-xl font-medium md:text-2xl"
                        >
                            {name}
                        </motion.h2>
                        <motion.h3 variants={fadeInUp} className="mb-3 font-medium w-96">
                            {description}
                        </motion.h3>
                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
                        >
                            {techStack.map((tech, index) => (
                                <span
                                    key={index}
                                    className="text-xs font-medium bg-gray-200 rounded-full px-2 py-0.5 text-gray-700"
                                >
                  {tech}
                </span>
                            ))}
                        </motion.div>
                    </motion.div>
                    <button
                        onClick={() => setShowDetail(null)}
                        className="absolute p-1 text-gray-800 bg-gray-300 rounded-full top-3 right-3 focus:outline-none dark:bg-white hover:bg-gray-400 dark:hover:bg-gray-200"
                    >
                        <MdClose size={30}/>
                    </button>
                </div>
            )}
        </>
    );
};

export default ProjectCard;

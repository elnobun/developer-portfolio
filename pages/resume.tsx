import Experience from "../components/Experience";
import Education from "../components/Education";
import Frameworks from "../components/Frameworks";
import Tools from "../components/Tools";
import {educations, experiences} from "../services/data";
import {motion} from "framer-motion";
import {fadeInUp, routeAnimation} from "../animations";
import Head from "next/head";

const Resume = () => {



    return (
        <motion.div
            variants={routeAnimation}
            initial="initial"
            animate="animate"
            className="py-4"
            exit="exit">
            <Head>
                <title>Resume | Ellis Enobun | Web Developer | Web Designer</title>
            </Head>
            <div className="grid grid-cols-6 gap-4">
                <motion.div variants={fadeInUp} initial="initial" animate="animate" className="bg-white dark:bg-dark-card shadow-md rounded-lg lg:col-span-4 col-span-12">
                    <h2 className="font-bold uppercase border-b dark:border-dark dark:text-white p-4">Experience</h2>
                    <div className="py-4 space-y-4">
                        {
                            experiences.map((experience, index) =>
                                <Experience key={index} data={experience}/>)
                        }
                    </div>
                </motion.div>
                <motion.div variants={fadeInUp} initial="initial" animate="animate" className="bg-white dark:bg-dark-card shadow-md rounded-lg lg:col-span-2 col-span-12">
                    <h2 className="font-bold uppercase border-b dark:border-dark dark:text-white p-4">Education</h2>
                    <div className="py-4 space-y-4">
                        {
                            educations.map((education, index) =>
                                <Education key={index} data={education}/>)
                        }
                    </div>
                </motion.div>
                <Frameworks/>
                <Tools/>
            </div>
        </motion.div>
    )
}

export default Resume

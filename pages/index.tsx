import {services} from "../services/data";
import ServiceCard from "../components/ServiceCard";
import {motion} from "framer-motion";
import {fadeInUp, routeAnimation, stagger} from "../animations";
import Head from "next/head";

const Home = () => {
    return (
        <motion.div
            className="flex flex-col flex-grow"
            variants={routeAnimation}
            initial="initial"
            animate="animate"
            exit="exit">
            <Head>
                <title>About page | Ellis Enobun | Web Developer & Designer</title>
            </Head>
            <motion.div variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                        className="p-4 bg-white dark:bg-dark-card shadow-md border-t dark:border-dark rounded-b-lg">
                <p className="dark:text-gray-200 text-justify">
                    FrontEnd web developer with experience in responsive design, developing, A&B Optimization
                    experiment, and maintaining websites across diverse industries. Proficient in developing user
                    stories, use cases, user interfaces, writing and testing codes, troubleshooting simple/complex
                    issues, and implementing new features based on user feedback.</p>
            </motion.div>
            <div className="my-2">
                <h2 className="p-4 font-bold uppercase dark:text-gray-200">Technology Stack</h2>
                <motion.div
                    variants={stagger}
                    initial="initial"
                    animate="animate"
                    className="grid lg:grid-cols-2 gap-4 flex-grow">
                    {
                        services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="bg-white dark:bg-dark-card shadow-md dark:shadow-lg rounded-lg p-4">
                                <ServiceCard service={service}/>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Home

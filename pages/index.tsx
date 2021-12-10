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
                <title>Ellis Enobun | Web Developer | Web Designer</title>
            </Head>
            <div
                className="p-4 bg-white border-t rounded-b-lg shadow-md dark:bg-dark-card dark:border-dark">
                <div className="dark:text-gray-200">
                    <p className="mb-3"> I am a Web Developer with experience in building and mantaining accessible and performant web products
                        and interfaces for Enterprise Content Management Systems; that are used to author over 50+ Property, 
                        Mortgage, E-commerce, Business, Education, and Construction sites. My idea of web development is user-centered. User data drives implementation and processes; hence I approach
                    signed-off designs with the Mobile-first design principle and Accessibility for assistive technology.</p>
                     
                    <p className="mb-3">I have experience in Web Performance Optimisation (WPO) and resolving web security issues to ensure faster loading times without sacrificing functionality, 
                    and Search Engine Optimisation (SEO) to organically increase website traffic through search results. 
                    I regulary work with SCSS, Tailwindcss, TypeScript/Javascript(ES6), Google Analytics, Adobe XD, and 
                    Illustrator for UX/UI. </p>

                    <p>I am always eager to grow as a developer in a team, help people through technology, and improve my skills.
                    I am currently improving my skills in React / NextJS, and learning about data structures and algorithms.
                    During my spare time, I enjoy quality time with family, playing games, and reading.</p>
                </div>
            </div>
            <div className="my-2">
                <h2 className="p-4 font-bold uppercase dark:text-gray-200">Technology Stack</h2>
                <motion.div
                    variants={stagger}
                    initial="initial"
                    animate="animate"
                    className="grid flex-grow gap-4 lg:grid-cols-2">
                    {
                        services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="p-4 bg-white rounded-lg shadow-md dark:bg-dark-card dark:shadow-lg">
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

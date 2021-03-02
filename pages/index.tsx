import {services} from "../services/data";
import ServiceCard from "../components/ServiceCard";

const Home = () => {
    return (
        <div className="flex flex-col flex-grow">
            <div className="p-4 bg-white dark:bg-dark-card shadow-md border-t dark:border-dark rounded-b-lg">
                <p className="dark:text-gray-200">FrontEnd web developer with experience in design, developing and maintaining responsive websites across
                   diverse industries. Proficient in developing user stories, use cases, user interfaces, writing and
                   testing codes, troubleshooting simple/complex issues, and implementing new features based on user
                   feedback.</p>
            </div>
            <div>
                <h2 className="p-4 my-2 font-bold uppercase dark:text-gray-200">Technology Stack</h2>
                <div className="grid lg:grid-cols-2 gap-4 flex-grow">
                    {
                        services.map((service, index) => (
                            <ServiceCard key={index} service={service} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home

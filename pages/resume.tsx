import Experience from "../components/Experience";
import Education from "../components/Education";
import Frameworks from "../components/Frameworks";
import Tools from "../components/Tools";
import {educations, experiences} from "../services/data";

const resume = () => {
    return (
        <div className="py-4">
            <div className="grid grid-cols-6 gap-4">
                <div className="bg-white dark:bg-dark-card shadow-md rounded-lg lg:col-span-4 col-span-12">
                    <h2 className="font-bold uppercase border-b dark:border-dark dark:text-white p-4">Experience</h2>
                    <div className="py-4 space-y-4">
                        {
                            experiences.map((experience, index) =>
                                <Experience key={index} data={experience} />)
                        }
                    </div>
                </div>
                <div className="bg-white dark:bg-dark-card shadow-md rounded-lg lg:col-span-2 col-span-12">
                    <h2 className="font-bold uppercase border-b dark:border-dark dark:text-white p-4">Education</h2>
                    <div className="py-4 space-y-4">
                        {
                            educations.map((education, index) =>
                                <Education key={index} data={education} /> )
                        }
                    </div>
                </div>
                <Frameworks />
                <Tools />
            </div>
        </div>
    )
}

export default resume

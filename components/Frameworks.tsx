import {languages} from "../services/data";
import Bar from "./Bar";

const Frameworks = () => {
    return (
        <div className="bg-white dark:bg-dark-card shadow-md rounded-lg lg:col-span-3 col-span-12 ">
            <h3 className="font-bold uppercase border-b dark:border-dark dark:text-white p-4">Languages & Frameworks</h3>
            <div className="p-4">
                {
                    languages.map((language, index) =>
                        <Bar key={index} data={language}/>
                    )
                }
            </div>
        </div>
    )
}

export default Frameworks

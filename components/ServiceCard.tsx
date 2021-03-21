import {FunctionComponent} from "react";
import {InterfaceService} from "../services/types";

const ServiceCard: FunctionComponent<{ service: InterfaceService }> = ({service}) => {
    const {Icon, title, tech, description} = service

    // Function to format HTML inside "description"
    const createMarkup = () => {
        return {
            __html: description
        }
    }

    return (
        <>
            <div className="flex">
                <Icon className="w-8 h-8 text-green-700 mr-4 dark:text-green-500"/>
                <div>
                    <h4 className="font-semibold text-lg mb-2 dark:text-gray-200">{title}</h4>
                    {tech.map((item, index) =>
                        <p key={index}
                           className="text-xs inline-block bg-gray-200 rounded-full px-2 py-0.5 text-gray-700 mr-2">{item}</p>
                    )}
                </div>
            </div>
            <p dangerouslySetInnerHTML={createMarkup()} className="pt-4 dark:text-gray-200" />
        </>

    )
}

export default ServiceCard

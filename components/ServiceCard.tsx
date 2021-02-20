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
        <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex">
                <Icon className="w-8 h-8 text-green-600 mr-4"/>
                <div>
                    <h4 className="font-semibold text-lg mb-2">{title}</h4>
                    {tech.map((item, index) =>
                        <p key={index}
                           className="text-xs inline-block bg-gray-200 rounded-full px-2 py-0.5 text-gray-700 mr-2">{item}</p>
                    )}
                </div>
            </div>
            <p dangerouslySetInnerHTML={createMarkup()} className="pt-4" />
        </div>

    )
}

export default ServiceCard

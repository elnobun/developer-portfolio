import {FunctionComponent} from "react";
import {InterfaceEducation} from "../services/types";

const Education: FunctionComponent<{
    data: InterfaceEducation
}> = ({data: {Icon, school, degree}}) => {
    return (
        <div className="px-4">
            <h3 className="font-semibold dark:text-gray-300">{school}</h3>
            <div className="flex items-center">
                <Icon className="mr-1 text-gray-500 dark:text-gray-300"/>
                <small className="dark:text-gray-300">{degree}</small>
            </div>
        </div>
    )
}

export default Education

import {FunctionComponent} from "react";
import {InterfaceEducation} from "../services/types";

const Education: FunctionComponent<{
    data: InterfaceEducation
}> = ({data: {Icon, school, degree}}) => {
    return (
        <div className="px-4 py-2.5">
            <h3 className="font-semibold">{school}</h3>
            <div className="flex items-center">
                <Icon className="mr-1 text-gray-500"/>
                <small>{degree}</small>
            </div>
        </div>
    )
}

export default Education

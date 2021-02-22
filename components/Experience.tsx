import {BsFillBriefcaseFill} from "react-icons/bs";
import {BiCalendar} from "react-icons/bi";
import {FunctionComponent} from "react";
import {InterfaceExperience} from "../services/types";

const Experience: FunctionComponent<{
    data: InterfaceExperience
}> = ({data: {job, company, period}}) => {
    return (
        <div className="px-4">
            <h3 className="font-semibold dark:text-gray-300">{job}</h3>
            <div className="flex items-center">
                <div className="flex items-center">
                    <BsFillBriefcaseFill className="mr-1.5 text-gray-500 dark:text-gray-300"/>
                    <small className="mr-4 dark:text-gray-300">{company}</small>
                </div>
                <div className="flex items-center">
                    <BiCalendar className="text-gray-500 dark:text-gray-300 mr-1"/>
                    <small className="dark:text-gray-300">{period}</small>
                </div>
            </div>
        </div>
    )
}

export default Experience

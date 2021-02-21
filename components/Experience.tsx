import {BsFillBriefcaseFill} from "react-icons/bs";
import {BiCalendar} from "react-icons/bi";
import {FunctionComponent} from "react";
import {InterfaceExperience} from "../services/types";

const Experience: FunctionComponent<{
    data: InterfaceExperience
}> = ({data: {job, company, period}}) => {
    return (
        <div className="px-4 py-2.5">
            <h3 className="font-semibold">{job}</h3>
            <div className="flex items-center">
                <div className="flex items-center">
                    <BsFillBriefcaseFill className="mr-1 text-gray-500"/>
                    <small className="mr-4">{company}</small>
                </div>
                <div className="flex items-center">
                    <BiCalendar className="text-gray-500 mr-1"/>
                    <small>{period}</small>
                </div>
            </div>
        </div>
    )
}

export default Experience

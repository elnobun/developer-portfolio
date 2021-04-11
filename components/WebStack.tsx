import {FunctionComponent} from "react";
import {InterfaceSkill} from "../services/types";

const WebStack: FunctionComponent<{
    data: InterfaceSkill
}> = ({data: {Icon, name}}) => {

    return (
        <div className="flex items-center space-x-2 mb-4">
            <Icon className="" />
            <p className="dark:text-gray-300">{name}</p>
        </div>
    )
}

export default WebStack

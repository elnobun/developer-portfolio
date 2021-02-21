import {FunctionComponent} from "react";
import {InterfaceSkill} from "../services/types";

const Bar: FunctionComponent<{
    data: InterfaceSkill
}> = ({data: {name, level}}) => {
    return (
        <>
            {name}
            <div className="overflow-hidden h-1.5 mb-2 text-xs flex rounded bg-gray-200">
                <div style={{width: level}}
                     className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${parseInt(level) >= 50 ? 'bg-green-600' : 'bg-yellow-600'} `}>
                </div>
            </div>
        </>
    )
}

export default Bar

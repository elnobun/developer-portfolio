import {tools} from "../services/data";
import Bar from "./Bar";

const Tools = () => {
    return (
        <div className="bg-white shadow-md rounded-lg lg:col-span-3 col-span-12 ">
            <h3 className="font-bold uppercase border-b p-4">Tools & Softwares</h3>
            <div className="p-4">
                {
                    tools.map((tool, index) =>
                        <Bar key={index} data={tool}/>
                    )
                }
            </div>
        </div>
    )
}

export default Tools

import {FunctionComponent} from "react";
import {Category} from "../services/types";

export const Navbar: FunctionComponent<{
    value: Category | "all";
    handleProjectsCategory: Function;
    active: string;
}> = ({value, handleProjectsCategory, active}) => {

    let className = "capitalize cursor-pointer hover:text-green-500 dark:hover:text-green-500"
    if (active === value) className += " text-green-500 "


    return (
        <li onClick={() => handleProjectsCategory(value)}
            className={className}>
            {value}
        </li>
    )
}

const ProjectsNavbar: FunctionComponent<{
    handleProjectsCategory: Function;
    active: string;
}> = (props) => {
    return (
        <div className="flex items-center list-none space-x-3 overflow-x-auto">
            <Navbar value="all" {...props}/>
            <Navbar value="designs" {...props}/>
            <Navbar value="javascript" {...props}/>
            <Navbar value="react" {...props}/>
            <Navbar value="wordpress" {...props}/>
            <Navbar value="express" {...props}/>
        </div>
    )
}

export default ProjectsNavbar

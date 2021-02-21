import {FunctionComponent, useEffect, useState} from "react";
import Link from "next/link"
import {useRouter} from "next/router";

// Use Typescript to define a Functional component called NavItem
const NavItem: FunctionComponent<{
    activeItem: string,
    setActiveItem: Function,
    name: string,
    route: string
}> = ({activeItem, setActiveItem, name, route}) => {
    // if the active item is not equal to the selected item, set the selected item to the active item
    // otherwise, return null.
    return (
        activeItem !== name ? (
            <Link href={route}>
                <span onClick={() => setActiveItem(name)}
                      className="cursor-pointer hover:underline hover:text-black"><h1>{name}</h1>
                </span>
            </Link>
        ) : null
    )
}

const Navbar = () => {

    // Keep track of the activeItem.
    // state {}
    const [activeItem, setActiveItem] = useState<string>('');

    // Get the pathname from react router
    const {pathname} = useRouter()

    // If the pathname is equal to home route, set active to the home route
    // componentDidMount()
    useEffect(() => {
        if (pathname === "/") setActiveItem("About")
        if (pathname === "/projects") setActiveItem("Projects")
        if (pathname === "/resume") setActiveItem("Resume")
    }, []);


    return (
        <nav className={`bg-white p-4 flex justify-between rounded-t-lg ${pathname === "/resume" ? "shadow-md rounded-lg" : ""}`}>
            <span className="font-bold uppercase text-green-600 text-lg">{activeItem}</span>
            <div className="flex space-x-6 text-gray-600">
                <NavItem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name="About"
                    route="/"
                />
                <NavItem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name="Projects"
                    route="/projects"
                />
                <NavItem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name="Resume"
                    route="/resume"
                />
            </div>
        </nav>
    )
}

export default Navbar

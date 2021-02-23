import {BsFilter} from "react-icons/bs";
import {useState} from "react";

const projects = () => {
    const [searchText, setSearchText] = useState("")

    // Define a function to handle the search input.
    const handleSearchInput = (e) => {
        console.log(e.target.value)
        setSearchText(e.target.value)
    }

    return (
        <div className="px-4 py-8 bg-white dark:bg-dark-card shadow-md border-t dark:border-dark rounded-b-lg">
            <div className="grid grid-cols-6 gap-2">
                <div className="border lg:col-span-4 md:col-span-4 col-span-12">
                    <input type="text" value={searchText} onChange={handleSearchInput} placeholder="Search Projects"/>
                </div>
                <div className=" border lg:col-span-2 flex">
                    <BsFilter />
                </div>
            </div>
        </div>
    )
}

export default projects

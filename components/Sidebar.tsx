import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import {GoLocation} from "react-icons/go"
import {MdMail, MdFileDownload} from "react-icons/md"
import {BsToggleOff} from "react-icons/bs";
import {IoSunnyOutline} from "react-icons/io5";

const Sidebar = () => {
    return (
        <>
            <div className="rounded-t-lg bg-black w-50 h-50">
                <img className="mx-auto"
                     src="https://www.ellisenobun.com/static/media/ellis.a5b25a4d.png"
                     alt="Picture of the author"
                />
            </div>

            <div className="rounded-b-lg shadow-md bg-white py-4 px-2">
                <hgroup className="lg:text-left md:text-center">
                    <h1 className="text-2xl font-bold">Ellis Enobun</h1>
                    <h2 className="text-lg text-gray-700">Frontend Web Developer</h2>
                </hgroup>

                <div className="pt-4">
                    <div className="flex items-center mb-0.5">
                        <GoLocation className="text-lg"/><span className="ml-2">London, UK</span>
                    </div>


                    <a href="mailto:elnobun@gmail.com" target="_blank"
                       className="flex items-center mb-0.5 hover:underline">
                        <MdMail className="text-lg"/><span className="ml-2">elnobun@gmail.com</span>
                    </a>


                    <a href="https://github.com/elnobun" target="_parent"
                       className="flex items-center mb-0.5 hover:underline">
                        <AiFillGithub className="text-lg"/>
                        <span className="ml-2">github/elnobun</span>
                    </a>
                    <a href="https://linkedin.com/in/ellisenobun/" target="_parent"
                       className="flex items-center hover:underline">
                        <AiFillLinkedin className="text-lg"/>
                        <span className="ml-2">linkedin/ellisenobun</span>
                    </a>
                </div>
            </div>


            <div className="my-4 flex flex-col justify-center">
                <a href="" download="name"
                   className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded flex items-center justify-center">
                    <MdFileDownload/>
                    <span className="ml-2">Download Resume</span>
                </a>
                <p className="flex items-center justify-center pt-2">
                    <BsToggleOff className="cursor-pointer mr-2 w-10 h-10"/>
                    <span><IoSunnyOutline className="w-5 h-5" /></span>
                </p>
            </div>
        </>
    )
}

export default Sidebar

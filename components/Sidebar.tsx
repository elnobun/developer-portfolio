import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import {GoLocation} from "react-icons/go"
import {MdMail, MdFileDownload} from "react-icons/md"

const Sidebar = () => {
    return (
        <>
            <div className="rounded-t-lg bg-black">
                <img className="mx-auto"
                     src="https://www.ellisenobun.com/static/media/ellis.a5b25a4d.png"
                     alt="Picture of the author"
                />
            </div>
            <div className="rounded-b-lg shadow-md bg-white p-2">
                <hgroup>
                    <h1 className="text-2xl font-bold">Ellis Enobun</h1>
                    <h2 className="text-lg text-gray-700">Frontend Web Developer</h2>
                </hgroup>
                <div className="pt-4">
                    {/* Location */}
                    <div className="flex items-center mb-1.5">
                        <GoLocation/><span className="ml-2 text-sm">London, UK</span>
                    </div>

                    {/* Email */}
                    <a href="mailto:elnobun@gmail.com" target="_blank"
                       className="flex items-center mb-1.5 hover:underline">
                        <MdMail/><span className="ml-2 text-sm">elnobun@gmail.com</span>
                    </a>

                    {/* Social Links */}
                    <a href="https://github.com/elnobun" target="_parent"
                       className="flex items-center mb-1.5 hover:underline">
                        <AiFillGithub/>
                        <span className="ml-2 text-sm">github/elnobun</span>
                    </a>
                    <a href="https://linkedin.com/in/ellisenobun/" target="_parent"
                       className="flex items-center hover:underline">
                        <AiFillLinkedin/>
                        <span className="ml-2 text-sm">linkedin/ellisenobun</span>
                    </a>
                </div>
            </div>

            {/* Resume Download */}
            <div className="my-4 flex justify-center">
                <a href="" download="name"
                   className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded flex items-center justify-center">
                    <MdFileDownload/>
                    <span className="ml-2">Download Resume</span>
                </a>
            </div>
        </>
    )
}

export default Sidebar

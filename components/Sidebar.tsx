import {useTheme} from "next-themes";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import {GoLocation} from "react-icons/go"
import {MdMail, MdFileDownload} from "react-icons/md"
import {IoSunnyOutline} from "react-icons/io5";
import {IoMdMoon} from "react-icons/io";
import {CgToggleOff, CgToggleOn} from "react-icons/cg";
import {useEffect, useState} from "react";
import Image from "next/image";

const Sidebar = () => {
    const [isMounted, setIsMounted] = useState(false)
    const {theme, setTheme} = useTheme()
    
    // useEffect(() => {
    //     setIsMounted(true)
    // }, [])
    useEffect(() => {
        setIsMounted(true)
    }, [])

    const toggleTheme = () => {
        if (!isMounted) return null
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <>
            <div className="flex justify-center p-4 overflow-hidden bg-black rounded-t-lg">
                <Image className="mx-auto"
                       src="/images/ellis.png"
                       alt="Picture of the author"
                       width="200"
                       height="191"
                       layout="intrinsic"
                       quality="100"
                />
            </div>

            <div className="p-4 bg-white rounded-b-lg shadow-md dark:bg-dark-card">
                <hgroup className="text-center lg:text-left md:text-center">
                    <h1 className="text-2xl font-bold dark:text-gray-300">Ellis Enobun</h1>
                    <h2 className="text-gray-700 text-md dark:text-gray-300">Frontend Web Developer</h2>
                </hgroup>

                <div className="flex flex-col pt-8 pb-2">
                    <div className="flex items-center mb-2 md:mr-2">
                        <GoLocation className="text-md dark:text-gray-300"/>
                        <span className="ml-1 text-sm md:ml-1 dark:text-gray-300">London, UK</span>
                    </div>


                    <a href="mailto:elnobun@gmail.com" target="_blank" aria-label="Email"
                       className="flex items-center mb-2 md:mr-2">
                        <MdMail className="text-md dark:text-gray-300"/>
                        <span className="ml-1 text-sm md:ml-1 dark:text-gray-300">elnobun@gmail.com</span>
                    </a>


                    <a href="https://github.com/elnobun" target="_parent" aria-label="Github"
                       className="flex items-center mb-2 hover:underline md:mr-2">
                        <AiFillGithub className="text-md dark:text-gray-300"/>
                        <span className="ml-1 text-sm md:ml-1 dark:text-gray-300">github/elnobun</span>
                    </a>
                    <a href="https://linkedin.com/in/ellisenobun/" target="_parent" aria-label="LinkedIn"
                       className="flex items-center hover:underline md:mr-2">
                        <AiFillLinkedin className="text-md dark:text-gray-300"/>
                        <span className="ml-2 text-sm md:ml-1 dark:text-gray-300">linkedin/ellisenobun</span>
                    </a>
                </div>
            </div>


            <div className="px-4 py-4 my-2">
                <a href="/assets/Resume.pdf" download="Resume.pdf" aria-label="Resume"
                   className="flex items-center justify-center px-4 py-2 text-gray-800 bg-gray-300 rounded dark:bg-white hover:bg-gray-400 dark:hover:bg-gray-200">
                    <MdFileDownload/>
                    <span className="ml-2">Download Resume</span>
                </a>
                
                {isMounted && theme === "light" && (
                    <div className="flex items-center justify-center pt-2 my-2">
                        <CgToggleOff onClick={toggleTheme} className="w-10 h-10 mr-2 cursor-pointer"/>
                        <IoSunnyOutline className="w-8 h-8"/>
                    </div>
                )}
                {isMounted && theme === "dark" && (
                    <div className="flex items-center justify-center pt-2 my-2">
                        <CgToggleOn onClick={toggleTheme} className="w-10 h-10 mr-2 text-white cursor-pointer"/>
                        <IoMdMoon className="w-6 h-6 text-white"/>
                    </div>
                )}
                
                
                <p className="text-center dark:text-white">
                    {isMounted && theme} Mode
                </p>
            </div>
        </>
    )
}

export default Sidebar

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

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const toggleTheme = () => {
        if (isMounted) {
            setTheme(theme === 'light' ? 'dark' : 'light')
        }
    }

    return (
        <>
            <div className="rounded-t-lg bg-black overflow-hidden flex justify-center">
                <Image className="mx-auto"
                       src="/images/ellis.png"
                       alt="Picture of the author"
                       width="329"
                       height="314"
                       layout="intrinsic"
                       quality="100"
                />
            </div>

            <div className="rounded-b-lg shadow-md bg-white dark:bg-dark-card py-2 px-4">
                <hgroup className="lg:text-left md:text-center text-center">
                    <h1 className="text-2xl font-bold dark:text-gray-300">Ellis Enobun</h1>
                    <h2 className="text-md text-gray-700 dark:text-gray-300">Frontend Web Developer</h2>
                </hgroup>

                <div className="pt-8 pb-2 md:flex md:flex-row md:justify-center lg:flex lg:flex-col">
                    <div className="flex items-center mb-0.5 md:mr-4 justify-center lg:justify-start">
                        <GoLocation className="text-md dark:text-gray-300"/>
                        <span className="ml-2 md:ml-1 dark:text-gray-300 text-sm">London, UK</span>
                    </div>


                    <a href="mailto:elnobun@gmail.com" target="_blank" aria-label="Email"
                       className="flex items-center mb-0.5 md:mr-4 justify-center lg:justify-start">
                        <MdMail className="text-md dark:text-gray-300"/>
                        <span className="ml-2 md:ml-1 dark:text-gray-300 text-sm">elnobun@gmail.com</span>
                    </a>


                    <a href="https://github.com/elnobun" target="_parent" aria-label="Github"
                       className="flex items-center mb-0.5 hover:underline md:mr-4 justify-center lg:justify-start">
                        <AiFillGithub className="text-md dark:text-gray-300"/>
                        <span className="ml-2 md:ml-1 dark:text-gray-300 text-sm">github/elnobun</span>
                    </a>
                    <a href="https://linkedin.com/in/ellisenobun/" target="_parent" aria-label="LinkedIn"
                       className="flex items-center hover:underline md:mr-4 justify-center lg:justify-start">
                        <AiFillLinkedin className="text-md dark:text-gray-300"/>
                        <span className="ml-2 md:ml-1 dark:text-gray-300 text-sm">linkedin/ellisenobun</span>
                    </a>
                </div>
            </div>


            <div className="my-2 py-4 px-4">
                <a href="/assets/Resume.pdf" download="Resume.pdf" aria-label="Resume"
                   className="bg-gray-300 dark:bg-white hover:bg-gray-400 dark:hover:bg-gray-200 text-gray-800 py-2 px-4 rounded flex items-center justify-center">
                    <MdFileDownload/>
                    <span className="ml-2">Download Resume</span>
                </a>
                {isMounted && theme === "light" && (
                    <div className="flex items-center justify-center pt-2 my-2">
                        <CgToggleOff onClick={toggleTheme} className="cursor-pointer mr-2 w-10 h-10"/>
                        <IoSunnyOutline className="w-8 h-8"/>
                    </div>
                )}
                {isMounted && theme === "dark" && (
                    <div className="flex items-center justify-center pt-2 my-2">
                        <CgToggleOn onClick={toggleTheme} className="cursor-pointer mr-2 w-10 h-10 text-white"/>
                        <IoMdMoon className="w-6 h-6 text-white"/>
                    </div>
                )}
                <p className="text-center dark:text-white">
                    {theme} Mode
                </p>
            </div>
        </>
    )
}

export default Sidebar

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import '../styles/globals.css'
import {ThemeProvider} from "next-themes";
import Head from "next/head";
import {AnimatePresence} from "framer-motion";

function MyApp({Component, pageProps, router}) {
    return (
        <ThemeProvider attribute="class">
            <Head>
                <title>Ellis Enobun | Web Developer & Designer</title>
                <meta name="title" content="Ellis Enobun | FrontEnd Web Developer & Designer"/>
                <meta name="description"
                      content="FrontEnd web developer with experience in design, developing and maintaining responsive websites. Proficient in developing user stories, use cases, user interfaces, writing and testing codes, implementing new features based on user feedback.."/>
            </Head>
            <div className="flex-1 lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm mx-auto p-5">
                <div className="grid lg:gap-4 gap-2 grid-cols-12">
                    <div className="lg:col-span-3 col-span-12">
                        <Sidebar/>
                    </div>
                    <div className="lg:col-span-9 col-span-12 dark:text-gray-300">
                        <Navbar/>
                        <AnimatePresence>
                            <Component {...pageProps} key={router.route} />
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default MyApp

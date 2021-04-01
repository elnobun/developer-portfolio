import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import '../styles/globals.css'
import {ThemeProvider} from "next-themes";
import Head from "next/head";
import {AnimatePresence} from "framer-motion";

function MyApp({Component, pageProps, router}) {
    return (
        <ThemeProvider attribute="class">
            <div className="flex-1 lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm mx-auto py-6 px-20">
                <div className="grid lg:gap-4 gap-2 grid-cols-12">
                    <div className="lg:col-span-3 col-span-12">
                        <Sidebar/>
                    </div>
                    <div className="lg:col-span-9 col-span-12 dark:text-gray-300">
                        <Navbar/>
                        <AnimatePresence>
                            <Component {...pageProps} key={router.route}/>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default MyApp

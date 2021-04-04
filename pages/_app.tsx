import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import '../styles/globals.css'
import {ThemeProvider} from "next-themes";

function MyApp({Component, pageProps, router}) {
    return (
        <ThemeProvider attribute="class">
            <div className="max-w-screen-xl mx-auto lg:p-5 p-2.5">
                <div className="grid gap-4 grid-cols-12">
                    <div className="lg:col-span-3 md:col-span-4 col-span-12">
                        <Sidebar/>
                    </div>
                    <div className="lg:col-span-9 md:col-span-8 col-span-12 dark:text-gray-300">
                        <Navbar/>
                        <Component {...pageProps} key={router.route}/>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default MyApp

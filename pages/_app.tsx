import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import '../styles/globals.css'
import {ThemeProvider} from "next-themes";

function MyApp({Component, pageProps, router}) {
    return (
        <ThemeProvider attribute="class" enableSystem={false}>
            <div className="max-w-screen-xl mx-auto lg:p-5 p-2.5">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 lg:col-span-3 md:col-span-4">
                        <Sidebar/>
                    </div>
                    <div className="col-span-12 lg:col-span-9 md:col-span-8 dark:text-gray-300">
                        <Navbar/>
                        <Component {...pageProps} key={router.route}/>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default MyApp

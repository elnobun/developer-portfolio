import '../styles/globals.css'
import Sidebar from "../components/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
      <div className="min-h-screen flex items-center">
          <div className="flex-1 lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm mx-auto lg:p-10 p-5">
              <div className="grid lg:gap-4 gap-2 grid-cols-12">
                  <div className="lg:col-span-3 col-span-12">
                      <Sidebar />
                  </div>
                  <div className="lg:col-span-9 col-span-12 bg-white">
                      <Component {...pageProps} />
                  </div>
              </div>
          </div>
      </div>
  )
}

export default MyApp

import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
const Projects = ()=>{
  return(
    <Layout>
      <div className="sm:grid sm:grid-cols-4 px-10 sm:px-0">

        <section className="col-span-1 flex sm:justify-center">
            <header className="sm:translate-y-28 translate-y-8 sm:translate-x-12">
              <nav>
                <Link href={"/"}>
                <Image
                  src={"/S.png"}
                  width={52}
                  height={52}
                />
                </Link>
                <ul className="sm:py-5 flex inline sm:block space-x-6 sm:space-x-0 lg:space-x-0">
                  {/* <li className="rounded-sm text-black border-b border-neutral-400">about</li> */}
                  <Link href={"/"}><li className="sm:my-1.5 rounded-sm text-neutral-800 ">about </li></Link>
                  <Link href={"/projects"}><li className="sm:my-1.5 rounded-sm text-neutral-800 border-b border-neutral-500">projects </li></Link>
                  <Link href={"/blogs"}><li className="sm:my-1.5 rounded-sm text-neutral-800">blogs</li></Link>

                </ul>
              </nav>
            </header>
        </section>

        <section className="col-span-2 flex mb-20 justify-start">
              <header className="sm:translate-y-28 translate-y-12">
                  <article>
                      <header>
                        <nav>
                            <h1 className="text-3xl">Projects</h1>
                        </nav>
                        <main>
                            
                       

                            <section className="space-y-4 py-3">
                            <article onClick={()=>{location.assign('https://salnet.xyz')}} className="border px-5 py-3 rounded-xl border-neutral-800 border-b-4">
                                <header>
                                    <h2 className="text-xl text-neutral-800 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 -translate-x-1 translate-y-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                        Portfolio
                                    </h2>
                                    <p className="text-xs text-neutral-500">8th Feb, 23</p>
                                </header>
                            </article>
                            

                            <article onClick={()=>{location.assign('https://play.google.com/store/apps/details?id=com.salnet.kolkata99')}} className="border px-5 py-3 rounded-xl border-neutral-800 border-b-4">
                                <header>
                                <h2 className="text-xl text-neutral-800 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 -translate-x-1 translate-y-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                        Kolkata99 App
                                    </h2>
                                    <p className="text-xs text-neutral-700">Explore the city of joy like never before. Download Kolkata99 App now.</p>
                                    <p className="text-xs text-neutral-500">25th Mar, 23</p>
                                </header>
                            </article>

                            <article onClick={()=>{location.assign('https://wapp.ink')}} className="border px-5 py-3 rounded-xl border-neutral-800 border-b-4">
                                <header>
                                <h2 className="text-xl text-neutral-800 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 -translate-x-1 translate-y-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                        Wapp.ink
                                    </h2>
                                    <p className="text-xs text-neutral-600">10th Apr, 23</p>
                                </header>
                            </article>

                            <article onClick={()=>{location.assign('https://clanbase.site')}} className="border px-5 py-3 rounded-xl border-neutral-800 border-b-4">
                                <header>
                                <h2 className="text-xl text-neutral-800 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 -translate-x-1 translate-y-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                      clasnbase
                                    </h2>
                                    <p className="text-xs text-neutral-600">12th Apr, 23</p>
                                </header>
                            </article>

                            <article onClick={()=>{location.assign('https://findvc-omega.vercel.app/')}} className="border px-5 py-3 rounded-xl border-neutral-800 border-b-4">
                                <header>
                                <h2 className="text-xl text-neutral-800 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 -translate-x-1 translate-y-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                        Find vc
                                    </h2>
                                    <p className="text-xs text-neutral-600">14th Feb, 23</p>
                                </header>
                            </article>

                            <article onClick={()=>{location.assign('https://ytube.click')}} className="border px-5 py-3 rounded-xl border-neutral-800 border-b-4">
                                <header>
                                <h2 className="text-xl text-neutral-800 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 -translate-x-1 translate-y-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                        ytube.click
                                    </h2>
                                    <p className="text-xs text-neutral-600">14th Feb, 23</p>
                                </header>
                            </article>


                            <article onClick={()=>{location.assign('https://addify.us')}} className="border px-5 py-3 rounded-xl border-neutral-800 border-b-4">
                                <header>
                                <h2 className="text-xl text-neutral-800 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 -translate-x-1 translate-y-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                        addify.us
                                    </h2>
                                    <p className="text-xs text-neutral-600">14th Feb, 23</p>
                                </header>
                            </article>

                            </section>

                        </main>
                      </header>
                  </article>
              </header>
        </section>

        <section>

        </section>
        
      </div>
    </Layout>
  )
}

export default Projects;
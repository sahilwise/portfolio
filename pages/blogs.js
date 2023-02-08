import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
const blogs = ()=>{
  return(
    <Layout>
      <div className="sm:grid sm:grid-cols-4 px-10 sm:px-0">

        <section className="col-span-1 flex sm:justify-center">
            <header className="sm:translate-y-28 translate-y-8 sm:translate-x-12">
              <nav>
                <Image
                  src={"/S.png"}
                  width={52}
                  height={52}
                />
                <ul className="sm:py-5 flex inline sm:block space-x-6 sm:space-x-0 lg:space-x-0 sm:space-y-2.5">
                  {/* <li className="rounded-sm text-black border-b border-neutral-400">about</li> */}
                  <Link href={"/"}><li className="sm:my-1.5 rounded-sm text-neutral-800">about </li></Link>
                  <Link href={"/projects"}><li className="sm:my-1.5 rounded-sm text-neutral-800">projects </li></Link>
                  <Link href={"/blogs"}><li className="sm:my-1.5 rounded-sm text-neutral-800 border-b border-neutral-500">blogs</li></Link>

                </ul>
              </nav>
            </header>
        </section>

        <section className="col-span-2 flex mb-20 justify-start">
              <header className="sm:translate-y-28 translate-y-12">
                  <article>
                      <header>
                        <nav>
                            <h1 className="text-3xl">Blogs</h1>
                        </nav>
                        <main>
                            
                            <p className=" sm:py-2 text-[#FAF9F6]">Some of my cool project. Explore all apps and open source projects.
                            </p>

                            <section className="space-y-4">
                            <article>
                                <header>
                                    <h2 className="text-lg text-neutral-800 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 -translate-x-1 translate-y-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                        Create a personal portfolio site.
                                    </h2>
                                    <p className="text-xs text-neutral-600">8th Feb, 23</p>
                                </header>
                            </article>

                            <article>
                                <header>
                                    <h2 className="text-lg text-neutral-800 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 -translate-x-1 translate-y-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                        Create a whatsapp link generator.
                                    </h2>
                                    <p className="text-xs text-neutral-600">10th Feb, 23</p>
                                </header>
                            </article>

                            <article>
                                <header>
                                    <h2 className="text-lg text-neutral-800 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 -translate-x-1 translate-y-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                        Create a sms sending service.
                                    </h2>
                                    <p className="text-xs text-neutral-600">12th Feb, 23</p>
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

export default blogs;
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
const Home = ()=>{
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
                <ul className="sm:py-5 flex inline sm:block space-x-6 sm:space-x-0 lg:space-x-0">
                  {/* <li className="rounded-sm text-black border-b border-neutral-400">about</li> */}
                  <Link href={"/"}><li className="sm:my-1.5 rounded-sm text-neutral-800 border-b border-neutral-500">about </li></Link>
                  <Link href={"/projects"}><li className="sm:my-1.5 rounded-sm text-neutral-800">projects </li></Link>
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
                            <h1 className="text-3xl">Salnet</h1>
                        </nav>
                        <main>
                            
                            <p className="py-4">Hey, I'm Sahil. Most folks know me as Sal. I'm a <b>Software engineer</b> working remotely. 
                            I love to build apps that solve real life problems.
                            </p>

                            <div className="grid sm:grid-cols-6 grid-cols-3">
                            <div className="col-span-1">
                            <Image
                            className="rounded-full"
                            width={90}
                            height={90}
                            src={"/download.jpeg"}
                            />
                            </div>
                            <div className="flex col-span-2 sm:justify-center justify-start">
                              <ul className=" space-y-1">
                                <li className="flex">
                                <svg className="translate-y-2 -translate-x-1.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                <path d="M22 4h-20c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2zm0 13.5c0 .276-.224.5-.5.5h-19c-.276 0-.5-.224-.5-.5v-6.5h20v6.5zm0-9.5h-20v-1.5c0-.276.224-.5.5-.5h19c.276 0 .5.224.5.5v1.5zm-9 6h-9v-1h9v1zm-3 2h-6v-1h6v1zm10-2h-3v-1h3v1z"/>
                                </svg>
                                <Link href={"#"}> addify workfolio</Link></li>
                                <li className="flex">
                                <svg className="translate-y-2 -translate-x-1.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                                <Link href={"https://twitter.com/salnetxyz"}>twitter</Link></li>
                                <li className="flex">
                                <svg className="translate-y-2 -translate-x-1.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                                <Link href={"https://www.youtube.com/@salnetxyz"}>youtube</Link></li>
                              </ul>
                            </div>
                            </div>
                            <p className="py-5">I am a multifaceted individual with a passion for creativity, Cooking, photography, and coding are just a few of my favorite pursuits.
                            <br /><br /> 
                            My love for web development knows no bounds. Whether it's a basic HTML file or a complex application, 
                            I find joy in building for the web.
                            </p>

                            <section className="space-y-4">

                            <article>
                                <header>
                                    <h2 className="text-lg text-neutral-800 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 -translate-x-1 translate-y-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                      <Link href={"https://addify.us/sal"}>hire me on addify</Link>
                                    </h2>
                                    <p className="text-xs text-neutral-600">addify.us/sal</p>
                                </header>
                            </article>  
                                
                            <article>
                                <header>
                                    <h2 className="text-lg text-neutral-800 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 -translate-x-1 translate-y-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                      <Link href={"https://twitter.com/intent/follow?screen_name=salnetxyz"}>follow on twitter</Link>
                                    </h2>
                                    <p className="text-xs text-neutral-600">twitter.com/salnetxyz</p>
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

export default Home;
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
                                <svg className="translate-y-2 -translate-x-1.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg> <Link href={"https://github.com/salnetxyz"}>github</Link></li>
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
                                      <Link href={"https://github.com/salnetxyz/portfolio/fork"}>hire on addify</Link>
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
                                      <Link href={"https://github.com/salnetxyz/portfolio/fork"}>follow on twitter</Link>
                                    </h2>
                                    <p className="text-xs text-neutral-600">twitter.com/salnetxyz</p>
                                </header>
                            </article>  
    
                            <article>
                                <header>
                                    <h2 className="text-lg text-neutral-800 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 -translate-x-1 translate-y-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                      <Link href={"https://github.com/salnetxyz/portfolio/fork"}>fork on github</Link>
                                    </h2>
                                    <p className="text-xs text-neutral-600">github.com/salnetxyz/portfolio/fork</p>
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
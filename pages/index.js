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

                            <Image
                            className="rounded-full"
                            width={90}
                            height={90}
                            src={"/download.jpeg"}
                            />
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
                                      <Link href={"https://github.com/salnetxyz/portfolio/fork"}>fork on github</Link>
                                    </h2>
                                    <p className="text-xs text-neutral-600">github.com/salnetxyz</p>
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
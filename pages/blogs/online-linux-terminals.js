import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";
import AppCard from "../../components/AppCard";
import NewCard from "../../components/NewCard";
const Olt = ()=>{
  return(
    <Layout>
      <div className="sm:grid sm:grid-cols-4 px-8 sm:px-0">

        <section className="col-span-1 flex sm:justify-center">
           <header className="sm:translate-y-28 translate-y-8 sm:translate-x-12">
              <nav>
              <Link href={"/"}>
                <Image
                alt="S"
                  src={"/S.png"}
                  width={52}
                  height={52}
                  className=""
                />
                </Link>
                <ul className="sm:py-5 flex inline sm:block space-x-6 sm:space-x-0 lg:space-x-0">
                  {/* <li className="rounded-sm text-black border-b border-neutral-400">about</li> */}
                  <Link href={"/"}><li className="sm:my-1.5 rounded-sm text-neutral-800">about </li></Link>
                  <Link href={"/tutorials"}><li className="sm:my-1.5 rounded-sm text-neutral-800">tutorials</li></Link>
                  <Link href={"/apps"}><li className="sm:my-1.5 rounded-sm text-neutral-800">apps</li></Link>
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
                            <h1 className="sm:text-3xl text-2xl font-black">Best Online Linux Terminals and Online Bash Editors.</h1>
                        </nav>
                        <main>
                            
                            <p className="py-4">Hey, I'm Sahil. Most folks know me as Sal. I'm a <b>Software engineer</b> working remotely. 
                            I love to build apps that solve real life problems.
                            </p>


                            <p className="py-5">I am a multifaceted individual with a passion for creativity. Cooking, photography, and coding are just a few of my favorite pursuits.
                            <br /><br /> 
                            My love for web development knows no bounds. Whether it's a basic HTML file or a complex application, 
                            I find joy in building for the web.
                            </p>

                            <section className="space-y-4">

                            <article>
                                <header>
                                    <h2 className="text-lg text-neutral-800 flex">

                                    <svg strokeWidth={1.5} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 -translate-x-1 translate-y-1.5">
                                    <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z" clipRule="evenodd" />
                                    </svg>

                                    <Link className="text-xl" href={"/apps"}>Quick Links.</Link>
                                    </h2>
                                </header>
                            </article>  

                              <NewCard img={'k99.png'} name={"Kolkata99"} description={"Explore the city of joy like never before. Download now."} link={"https://play.google.com/store/apps/details?id=com.salnet.kolkata99"} />
                              <NewCard img={'instadate.png'} name={"Eve"} description={"Coming soon"} link={"/"} />
                              <NewCard img={'mallmap.png'} name={"Mall Map"} description={"Coming Soon"} link={"/"} />
                              <NewCard img={'bestfranchise.png'} name={"Best Franchise"} description={"Coming Soon"} link={"/"} />

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

export default Olt;
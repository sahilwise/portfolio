import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import AppCard from "../components/AppCard";
import NewCard from "../components/NewCard";
const Home = ()=>{
  return(
    <Layout>
      <div className="sm:grid sm:grid-cols-4 px-10 sm:px-0">

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
                  <Link href={"/"}><li className="sm:my-1.5 rounded-sm text-neutral-800 border-b border-neutral-500">about </li></Link>
                  <Link href={"/tutorials"}><li className="sm:my-1.5 rounded-sm text-neutral-800">tutorials</li></Link>
                  <Link href={"/apps"}><li className="sm:my-1.5 rounded-sm text-neutral-800">apps</li></Link>
                  <Link href={"mailto:hi@salnet.xyz"}><li className="sm:my-1.5 rounded-sm text-neutral-800">contact</li></Link>

                </ul>
              </nav>
            </header>
        </section>

        <section className="col-span-2 flex mb-20 justify-start">
              <header className="sm:translate-y-28 translate-y-12">
                  <article>
                      <header>
                        <nav>
                            <h1 className="text-3xl">About</h1>
                        </nav>
                        <main>
                            
                            <p className="py-4">Hey, I'm Sahil. Most folks know me as Sal. I'm a <b>Software engineer</b> working remotely. 
                            I love to build apps that solve real life problems.
                            </p>


 <article>
  <div className="flex items-start">
    <a href="#" className="block shrink-0">
      <img
        alt="Speaker"
        src="/me.png"
        className="sm:h-28 sm:w-28 h-24 w-24 object-cover border sm:mr-6 mr-4 rounded-full border-b-4 border-l-4"
      />
    </a>

    <div className="text-neutral-700">
      <h3 className="font-black text-xl sm:text-2xl">
        <a href="#" className="hover:underline">
        Salnet
        </a>
      </h3>

                             <ul className=" space-y-1 sm:pt-2">
                                <li className="flex">
                                <svg className="translate-y-2 mr-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"/>
                                </svg>
                                <Link href={"#"}> instagram</Link></li>
                                <li className="flex"> 
                                <svg className="translate-y-2 mr-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                                <Link href={"https://twitter.com/salnetxyz"}>twitter</Link></li>
                                <li className="flex">
                                <svg className="translate-y-2 mr-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                                <Link href={"https://www.youtube.com/@salnetxyz"}>youtube</Link></li>
                              </ul>

    </div>
  </div>

</article>




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

                              <NewCard img={'k99.png'} name={"Kolkata99"} description={"Explore the city of joy like never before. Download now."} link={"dub.sh/kolkata99"} />
                              <NewCard img={'instadate.png'} name={"Instadate"} description={"Instagram dating simplified. Create your account now."} link={"wapp.ink"} />
                              <NewCard img={'mallmap.png'} name={"Mall Map"} description={"Find brands popup store in a shopping mall."} link={"mallm.app"} />
                              <NewCard img={'bestfranchise.png'} name={"Best Franchise"} description={"Find or list your franchisees. Download our app now.x"} link={"wapp.ink"} />

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
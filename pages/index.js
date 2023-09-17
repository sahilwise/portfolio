import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import AppCard from "../components/AppCard"

const Home = ()=>{
  return(
    <Layout>
      <Head>
      </Head>
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
                  <Link href={"/"}><li className="sm:my-1.5 rounded-sm text-black border-b border-neutral-200">home </li></Link>
                  <Link href={"/guestbook"}><li className="sm:my-1.5 rounded-sm text-neutral-600">guestbook</li></Link>
                  <Link href={"/contact"}><li className="sm:my-1.5 rounded-sm text-neutral-600">contact</li></Link>
                  {/* <Link href={"/sourcecode"}><li className=" sm:my-1.5 rounded-sm text-neutral-600">source code</li></Link>
                  <Link href={"/blogs"}><li className="sm:my-1.5 rounded-sm text-neutral-600">blogs</li></Link> */}

                </ul>
              </nav>
            </header>
        </section>

        <section className="col-span-2 flex mb-20 justify-start">
              <header className="sm:translate-y-28 translate-y-12">
                  <article>
                      <header>
                        <nav>
                            <h1 className="text-2xl">Hey, I'm Sal 🐙</h1>
                        </nav>
                        <main>
                            
                            <p className="py-4">I'm a fullstack developer, cook, 9 - 9 remote worker, <b>community</b> builder, and a solo traveller. 
                            I love to build apps that solve real life problems.
                            </p>


 <article>
  <div className="flex items-start">
    <a href="#" className="block shrink-0">
      <img
        alt="Speaker"
        src="/profile.png"
        className="sm:h-28 sm:w-28 h-24 w-24 object-cover border border-black sm:mr-6 mr-4 rounded-full border-b-4"
      />
    </a>

    <div className="text-neutral-700">
      <h3 className="font-semibold text-xl sm:text-xl">
        <a href="#" className="hover:underline">
        Connect
        </a>
      </h3>

                             <ul className=" space-y-1 sm:pt-2">
                             
                             <li className="flex">
                                <svg className="translate-y-1.5 -translate-x-0.5 mr-0.5" width="16" height="16" viewBox="0 0 300 300" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"/>
                                </svg>

                                <Link href={"https://twitter.com/salnetxyz"}>twitter/x</Link></li>
                                <li className="flex">
                                <svg className="translate-y-1.5 -translate-x-0.5 mr-0.5" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                </svg>
                                <Link href={"https://youtube.com/@salnetxyz"}> youtube</Link></li>

                                <li className="flex"> 
                                <svg className="translate-y-1.5 -translate-x-0.5 mr-0.5" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                <Link href={"/"}>github</Link></li>
                              
                              </ul>

    </div>
    </div>
    </article>

    

                            <p className="py-5">I create coding tutorials for begineers, teaching them about web development and app development.
                            This comes in all forms: youtube, blogs, tweets and threads. 
                            <br /><br /> 
                            I love to create impressive projects using Next.js, Tailwind CSS, Firebase, React Native, React, and MongoDB. You can explore all of them in my source code project below.
                            </p>
                            
                            <AppCard img={'k99.png'} name={"Kolkata99"} description={"Explore the city of joy like never before. Download now."} link={"https://play.google.com/store/apps/details?id=com.salnet.kolkata99"} />

                        </main>
                      </header>
                  </article>
                  

                  <div className="sm:grid grid-cols-3 pt-1">
                     
                  <div className="col-span-1 py-1" onClick={()=>{location.assign('https://twitter.com/salnetxyz')}}>
                        <h2 className="text-xs text-neutral-600 flex">
                          <svg className="w-3 h-3 -translate-x-1 translate-y-3"  width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path></svg>
                          <p className="text-lg" href={"/apps"}> follow me on twitter</p>
                        </h2>
                        </div>

                        <div className="col-span-1 py-1" onClick={()=>{location.assign('https://salnet.substack.com')}}>
                        <h2 className="text-xs text-neutral-600 flex">
                          <svg className="w-3 h-3 -translate-x-1 translate-y-3"  width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path></svg>
                          <p className="text-lg" href={"/apps"}> get email updates</p>
                        </h2>
                        </div>
                  </div>

                </header>
                </section>


        <section>
        </section>
        
      </div>
    </Layout>
  )
}

export default Home;
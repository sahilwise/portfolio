import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import AppCard from "../components/AppCard";
import NewCard from "../components/NewCard";
const Gitbook = ()=>{
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
                  <Link href={"/"}><li className="sm:my-1.5 rounded-sm text-neutral-800">home </li></Link>
                  <Link href={"/guestbook"}><li className="sm:my-1.5 rounded-sm text-black border-b border-neutral-200">guestbook</li></Link>
                  <Link href={"/contact"}><li className="sm:my-1.5 rounded-sm text-neutral-800">contact</li></Link>
                  {/* <Link href={"/sourcecode"}><li className="sm:my-1.5 rounded-sm text-neutral-800">source code</li></Link>
                  <Link href={"/blogs"}><li className="sm:my-1.5 rounded-sm text-neutral-800">blogs</li></Link> */}

                </ul>
              </nav>
            </header>
        </section>

        <section className="col-span-2 flex mb-20 justify-start">
              <header className="sm:translate-y-28 translate-y-12">
                  <article>
                      <header>
                        <nav>
                            <h1 className="text-2xl">Sign my Guestbook</h1>
                        </nav>
                        <main>
                            
                            <section className="grid">
                              <span className="bg-neutral-100 text-neutral-900 px-4 py-2.5 border rounded-lg mt-4 text-xs">
                              <p className="flex">
                                <svg fill="black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                <Link href={"https://twitter.com/salnetxyz"}> &nbsp;&nbsp;Signin with github</Link>
                              </p>
                              </span>
                            </section>

                            <div className="pt-8">
                            <ul>
                               <li className="text-neutral-700">@sahilnetic : Hi!</li>
                            </ul>
                            </div>

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

export default Gitbook;

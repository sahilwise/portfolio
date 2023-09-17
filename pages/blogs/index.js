import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";
import AppCard from "../../components/AppCard";
import NewCard from "../../components/NewCard";
const Blogs = ()=>{
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
                  <Link href={"/guestbook"}><li className="sm:my-1.5 rounded-sm text-neutral-800">guestbook</li></Link>
                  <Link href={"/sourcecode"}><li className="sm:my-1.5 rounded-sm text-neutral-800">source code</li></Link>
                  <Link href={"/blogs"}><li className="sm:my-1.5 rounded-sm text-black border-b border-neutral-200">blogs</li></Link>
                </ul>
              </nav>
            </header>
        </section>

        <section className="col-span-2 flex mb-20 justify-start">
              <header className="sm:translate-y-28 translate-y-12">
                  <article>
                      <header>
                        <nav>
                            <h1 className="text-2xl">Blogs</h1>
                        </nav>
                        <main>
                            
                            <p className="text-transparent hidden sm:block">Hey, I'm Sahil. Most folks know me as Sal. I'm a <b>Software engineer</b> working remotely. 
                            I love to build apps that solve real life problems.
                            
                            </p>

                            <section className="space-y-4 pt-6 sm:pt-0">
                              {/* <NewCard img={'terminal.png'} name={"Linux Terminals"} description={"Best Online Linux Terminals and Online Bash Editors."} link={"/blogs/online-linux-terminals"} /> */}
                              <NewCard img={'ubuntu.png'} name={"Linux Commands"} description={"Top Basic Linux Commands for Beginners with Examples."} link={"/blogs/basic-linux-commands"} />
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

export default Blogs;
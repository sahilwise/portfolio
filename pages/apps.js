import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import AppCard from "../components/AppCard";
import NewCard from "../components/NewCard";
const Apps = ()=>{
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
                  <Link href={"/"}><li className="sm:my-1.5 rounded-sm text-neutral-800">about </li></Link>
                  <Link href={"/tutorials"}><li className="sm:my-1.5 rounded-sm text-neutral-800">tutorials</li></Link>
                  <Link href={"/apps"}><li className="sm:my-1.5 rounded-sm text-neutral-800 border-b border-neutral-500">apps</li></Link>
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
                            <h1 className="text-3xl">Apps</h1>
                        </nav>
                        <main>
                            
                            <p className="text-transparent">...................................................................
                            .......................................................................................
                            </p>
                            <section className="space-y-4">

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

export default Apps;
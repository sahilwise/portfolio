import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";
import NewCard from "../../components/NewCard";
const Tutorials = ()=>{
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
                  <Link href={"/tutorials"}><li className="sm:my-1.5 rounded-sm text-neutral-800 border-b border-neutral-500">tutorials</li></Link>
                  <Link href={"/apps"}><li className="sm:my-1.5 rounded-sm text-neutral-800">apps</li></Link>
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
                            <h1 className="text-3xl">Tutorials</h1>
                        </nav>
                        <main>
                            
                            <p className="text-transparent hidden sm:block">Hey, I'm Sahil. Most folks know me as Sal. I'm a <b>Software engineer</b> working remotely. 
                            I love to build apps that solve real life problems.
                            
                            </p>

                            <section className="space-y-4 pt-6 sm:pt-0">

                              {/* <NewCard img={'ubuntu.png'} name={"Linux Commands You Need to Know"} description={"Category : Linux"} link={"dub.sh/kolkata99"} />
                              <NewCard img={'html.png'} name={"HTML Full Course - Beginner to Pro"} description={"Coming soon"} link={"dub.sh/kolkata99"} />
                              <NewCard img={'css.png'} name={"CSS Full Course - Beginner to Pro"} description={"Coming soon"} link={"dub.sh/kolkata99"} />
                              <NewCard img={'js.png'} name={"JS Full Course - Beginner to Pro"} description={"Coming soon"} link={"dub.sh/kolkata99"} />
                              <NewCard img={'reactjs.png'} name={"React.js Full Course - Beginner to Pro"} description={"Coming soon"} link={"dub.sh/kolkata99"} />
                              <NewCard img={'nextjs.png'} name={"Nextjs Full Course - Beginner to Pro"} description={"Coming soon"} link={"dub.sh/kolkata99"} />
                              <NewCard img={'reactjs.png'} name={"React Native Full Course - Beginner to Pro"} description={"Coming Soon"} link={"dub.sh/kolkata99"} /> */}
                              <NewCard img={'swift.png'} name={"Learn Swift"} description={"Kick off your Swift journey by learning the basics!"} link={"/tutorials/swift"} />
                              <NewCard img={'git.png'} name={"Learn Git & Github"} description={"Embark on your open-source journey with Git and GitHub."} link={"/tutorials/gitandgithub"} />

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

export default Tutorials;
import Layout from "../../../components/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Var = ()=>{
  return(
    <Layout>
      <div className="sm:grid sm:grid-cols-4 px-8 sm:px-0">

        <section className="col-span-1 flex sm:justify-center">
           <header className="sm:translate-y-28 translate-y-8 sm:translate-x-12">
              <nav>
              <Link href={"/"}>
                <Image
                alt="S"
                  src={"/swift.png"}
                  width={52}
                  height={52}
                  className="rounded-full"
                />
                </Link>
                <ul className="sm:py-5 flex inline sm:block space-x-6 sm:space-x-0 lg:space-x-0">
                  {/* <li className="rounded-sm text-black border-b border-neutral-400">about</li> */}
                  <Link href={"/tutorials/swift"}><li className="sm:my-1.5 rounded-sm text-neutral-800">Introduction</li></Link>
                  <Link href={"/tutorials/swift/variables"}><li className="sm:my-1.5 rounded-sm text-neutral-800 border-b border-neutral-500">Variables</li></Link>
                  <Link href={"/tutorials/swift/#"}><li className="sm:my-1.5 rounded-sm text-neutral-800">Coming soon</li></Link>

                </ul>   
              </nav>
            </header>
        </section>

        <section className="col-span-2 flex mb-20 justify-start">
              <header className="sm:translate-y-28 translate-y-12">
                  <article>
                      <header>
                        <nav>
                            <h1 className="sm:text-3xl text-2xl font-black pb-4">Variables</h1>
                        </nav>
                        <main>

        {/* <div 
    	className="relative h-0 overflow-hidden max-w-full w-full" 
		style={{paddingBottom: "56.25%"}}
 	>
		<iframe
       		src="https://www.youtube.com/embed/nAchMctX4YA"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
        ></iframe>
	</div>
   */}
                            <p className="py-2 text-lg tracking-wide"><span className="text-xl">V</span>ariables are used to store data. They are like containers that can hold data which can be changed later. Variables are declared using the <span className="text-2xl font-black">`var`</span> keyword
                            </p>

                            <section className="space-y-4 py-2">
                                <p>Example.</p>
                                <Image
                                    src={'/swiftvar.png'}
                                    width={720}
                                    height={20}
                                />

                                <p className="font-black text-2xl">Constants</p>
                                <p className="font-black">Constants are used to store values that cannot be changed or modified once they are assigned. 
                                Constants are declared using the <span className="text-2xl font-black">`let`</span> keyword</p>
                                <Image
                                    src={'/swiftconst.png'}
                                    width={720}
                                    height={20}
                                />

                                <p className="font-black text-2xl">Types</p>
                                <p className="font-medium text-xl">Type annotation can be used during declaration. The basic data types are :</p>
                                <ul className="text-lg">
                                    <li><span className="font-black text-lg">Int</span> : integer numbers</li>
                                    <li><span className="font-black text-lg">Double</span> : floating point numbers</li>
                                    <li><span className="font-black text-lg">String</span> : a sequence of characters</li>
                                    <li><span className="font-black text-lg">Bool</span> : truth values</li>
                                </ul>
                                <Image
                                    src={'/swiftdt.png'}
                                    width={720}
                                    height={20}
                                />

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

export default Var;
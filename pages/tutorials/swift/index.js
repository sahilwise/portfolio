import Layout from "../../../components/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = ()=>{
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
                  <Link href={"/tutorials/swift"}><li className="sm:my-1.5 rounded-sm text-neutral-800 border-b border-neutral-500">Introduction</li></Link>
                  <Link href={"/tutorials/swift/variables"}><li className="sm:my-1.5 rounded-sm text-neutral-800">Variables</li></Link>
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
                            <h1 className="sm:text-3xl text-2xl font-black pb-4">Learn the Swift Programming Language</h1>
                        </nav>
                        <main>

        <div 
    	className="relative h-0 overflow-hidden max-w-full w-full" 
		style={{paddingBottom: "56.25%"}}
 	>
		<iframe
       		src="https://www.youtube.com/embed/nAchMctX4YA"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
        ></iframe>
	</div>
  
                            <p className="py-2 text-lg tracking-wide"><span className="text-3xl">W</span>elcome to the world of Swift! Swift is a modern programming language developed by Apple Inc. and the open-source community. It is designed to be safe, fast, and expressive.
                            
                            <br />In this blog, we will cover the beginner friendly and not so beginner friendly concept of Swift. We will also learn how to write swift programs.
                            <br /> <br /> By the end of this course, you will have a good understanding of Swift and be able to write programs.
                            </p>

                            <section className="space-y-4 py-6">
                                <p className="font-black text-xl">What we will learn :</p>
                                <ul className="text-lg ml-4">
                                    <li onClick={()=>{location.assign('/tutorials/swift/variables')}}>• Variables</li>
                                    <li>• Conditionals & Logic</li>
                                    <li>• Loops</li>
                                    <li>• Arrays & Sets</li>
                                    <li>• Dictionaries</li>
                                    <li>• Functions</li>
                                    <li>• Structures</li>
                                    <li>• Structures</li>
                                </ul>


                                <p className="font-black text-2xl">Write your first Swift Program :</p>
                                <p className="font-black text-xl">Print {`()`}</p>
                                <p>To display something in the console we use <span className="font-black text-lg">Print()</span> function.</p>
                                <Image
                                    src={'/swiftlang.png'}
                                    width={720}
                                    height={20}
                                />

                                <p className="font-black text-2xl">If you want to write multiline strings then need slightly different syntax</p>
                                <p className="font-black">You have to write three ` " ` instead of one. Here is an example. </p>
                                <Image
                                    src={'/swiftml.png'}
                                    width={720}
                                    height={20}
                                />


                                <p className="font-black text-2xl">Comments :</p>
                                <p>Comments are used to provide additional information about the code. Like what the code does, what is the logic behind the code.
                                </p>
                                <p>There are two types of comments. Single line comments and Multiline comments. Here is an example below.</p>
                                <Image
                                    src={'/swiftcomments.png'}
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

export default Home;
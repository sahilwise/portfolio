import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";
import AppCard from "../../components/AppCard";
import NewCard from "../../components/NewCard";
import React from "react";
import Youtube from "react-youtube"

const Blc = ()=>{
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
                            <h1 className="sm:text-3xl text-2xl font-black pb-4">Basic Linux Commands for Beginners with Examples.</h1>
                        </nav>
                        <main>

        <div 
    	className="relative h-0 overflow-hidden max-w-full w-full" 
		style={{paddingBottom: "56.25%"}}
 	>
		<iframe
       		src="https://www.youtube.com/embed/HLlic8XZS6s"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
        ></iframe>
	</div>
  
                            <p className="py-2 text-lg tracking-wide"><span className="text-3xl">L</span>inux, a versatile and powerful kernel, forms the backbone of various popular operating systems like Ubuntu, Debian, and Fedora.
                            
                            <br />While these operating systems provide a graphical interface, understanding some fundamental Linux commands will empower you to harness the full potential of your system.
                            <br /> <br /> We'll explore essential commands that every Linux beginner should know. By grasping these commands, you'll be able to navigate the file system, manipulate files and directories, manage processes, and establish a solid foundation for your Linux journey. Let's dive in!
                            </p>

                            <section className="space-y-4 py-6">
                                <p className="font-black text-xl">1. File and Directory Manipulation :</p>
                                <ul className="text-sm ml-4">
                                    <li>• `<span className="font-medium text-lg">ls</span>` : List files and directories.</li>
                                    <li>• `<span className="font-medium text-lg">cd</span>` : Change directory.</li>
                                    <li>• `<span className="font-medium text-lg">pwd</span>` : Print working directory.</li>
                                    <li>• `<span className="font-medium text-lg">mkdir</span>` : Create a new directory.</li>
                                    <li>• `<span className="font-medium text-lg">rm</span>` : Remove files and directories.</li>
                                    <li>• `<span className="font-medium text-lg">cp</span>` : Copy files and directories.</li>
                                    <li>• `<span className="font-medium text-lg">mv</span>` : Move or rename files and directories.</li>
                                    <li>• `<span className="font-medium text-lg">touch</span>` : Create an empty file.</li>
                                    <li>• `<span className="font-medium text-lg">cat</span>` : Display the contents of a file.</li>
                                    <li>• `<span className="font-medium text-lg">nano</span>` : Text editors for creating or modifying files.</li>
                                </ul>

                                <p className="font-black text-xl">2. File Permissions :</p>
                                <ul className="text-sm ml-4">
                                    <li>• `<span className="font-medium text-lg">chmod</span>` : Change file permissions.</li>
                                    <li>• `<span className="font-medium text-lg">chown</span>` : Change file ownership.</li>
                                    <li>• `<span className="font-medium text-lg">chgrp</span>` : Change group ownership.</li>
                                </ul>

                                <p className="font-black text-xl">3. System Information :</p>
                                <ul className="text-sm ml-4">
                                    <li>• `<span className="font-medium text-lg">uname</span>` : Display system information.</li>
                                    <li>• `<span className="font-medium text-lg">uptime</span>` : Show system uptime.</li>
                                    <li>• `<span className="font-medium text-lg">whoami</span>` : Display the current user.</li>
                                </ul>

                                <p className="font-black text-xl">4. File Searching :</p>
                                <ul className="text-sm ml-4">
                                    <li>• `<span className="font-medium text-lg">find</span>` : Search for files and directories.</li>
                                    <li>• `<span className="font-medium text-lg">grep</span>` : Search for a specific pattern in files.</li>
                                </ul>


                                <p className="font-black text-xl">5. Process Management :</p>
                                <ul className="text-sm ml-4">
                                    <li>• `<span className="font-medium text-lg">ps</span>` : Display running processes.</li>
                                    <li>• `<span className="font-medium text-lg">kill</span>` : Terminate a process.</li>


                                </ul>

                                <p className="font-black text-xl">6. Networking :</p>
                                <ul className="text-sm ml-4">
                                    <li>• `<span className="font-medium text-lg">ping</span>` : Send ICMP echo requests to a network host.</li>
                                    <li>• `<span className="font-medium text-lg">ifconfig</span>` : Configure and display network interfaces.</li>
                                </ul>

                                <p className="font-black text-xl">7. System Administration :</p>
                                <ul className="text-sm ml-4">
                                    <li>• `<span className="font-medium text-lg">sudo</span>` : Execute a command with administrative privileges.</li>
                                    <li>• `<span className="font-medium text-lg">useradd</span>` : Create a new user.</li>
                                    <li>• `<span className="font-medium text-lg">passwd</span>` : Change user password.</li>
                                </ul>

                                <p className="font-black text-xl">8. File Compression and Archiving :</p>
                                <ul className="text-sm ml-4">
                                    <li>• `<span className="font-medium text-lg">tar</span>` : Create or extract tar archives.</li>
                                    <li>• `<span className="font-medium text-lg">gzip</span>` : Compress files using gzip compression.</li>
                                </ul>

                                <p className="font-black text-xl">9. File Transfer and Remote Access :</p>
                                <ul className="text-sm ml-4">
                                    <li>• `<span className="font-medium text-lg">scp</span>` : Securely copy files between hosts.</li>
                                    <li>• `<span className="font-medium text-lg">ssh</span>` : Secure shell for remote access.</li>
                                </ul>

                                <p className="font-black text-xl">10. System Monitoring and Performance :</p>
                                <ul className="text-sm ml-4">
                                    <li>• `<span className="font-medium text-lg">top</span>` : Monitor system processes and resource usage.</li>
                                    <li>• `<span className="font-medium text-lg">free</span>` : Display memory usage.</li>
                                </ul>

                                <p className="font-black text-xl">11. Package Management :</p>
                                <ul className="text-sm ml-4">
                                    <li>• `<span className="font-medium text-lg">apt</span>` : Package management utility (Debian-based systems).</li>
                                    <li>• `<span className="font-medium text-lg">yum</span>` : Package management utility (RHEL-based systems).</li>
                                </ul>

                                <p className="font-black text-xl">12. Text Manipulation and Processing :</p>
                                <ul className="text-sm ml-4">
                                    <li>• `<span className="font-medium text-lg">sed</span>` : Stream editor for text manipulation.</li>
                                    <li>• `<span className="font-medium text-lg">awk</span>` : Text processing language.</li>
                                </ul>

                                <p className="font-black text-xl">13. Disk and File System Operations :</p>
                                <ul className="text-sm ml-4">
                                    <li>• `<span className="font-medium text-lg">df</span>` : Display disk space usage.</li>
                                    <li>• `<span className="font-medium text-lg">fdisk</span>` : Manipulate disk partition table.</li>
                                </ul>


                                <p className="font-black text-xl">14. Network Configuration and Troubleshooting :</p>
                                <ul className="text-sm ml-4">
                                    <li>• `<span className="font-medium text-lg">ifconfig</span>` : Change file permissions.</li>
                                    <li>• `<span className="font-medium text-lg">ip</span>` : Display or manipulate routing, devices, and tunnels.</li>
                                </ul>

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

export default Blc;
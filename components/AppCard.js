import Image from "next/image";
import Link from "next/link";
const AppCard = ({name, description, link})=>{
        return(
            <div className="pt-4">
                <article className="border bg-neutral-900 backdrop-blur-3xl rounded-3xl border border-b-4">
                    <main className="grid grid-cols-12">
                       <div className="col-span-2">
                        <Image
                        className="border shadow-lg m-4 rounded-3xl border-b-4 border-l-4"
                        src="/download.jpeg"
                        alt="logo"
                        width="80"
                        height="80"
                        />
                       </div>

                       <div className="text-center text-white col-span-8 flex justify-start py-4">
                            <div className="text-left">
                            <h3 className="text-2xl">{name}</h3>
                            <p className="text-sm pt-2">{description}</p>
                            <p className="text-xs"><Link href={"https://wapp.ink"}>🔗 {link}</Link></p>
                            </div>
                       </div>


                       {/* <div onClick={()=>{location.assign('https://salnet.xyz')}} className="grid-cols-2s flex justify-center justify-items-center items-center">
                            <div className="bg-white border border-black border-b-4 px-6 py-2.5 rounded-2xl">Explore</div>
                       </div> */}

                    </main>
                </article>
            </div>
        )
}

export default AppCard;
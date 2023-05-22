import Image from "next/image";
const AppCard = ()=>{
        return(
            <>
                <article className="border rounded-3xl border border-neutral-700 border-b-4">
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

                       <div className="text-center col-span-8 flex justify-start py-4">
                            <h3 className="text-2xl">Wapp</h3>
                       </div>


                       <div className="grid-cols-2s">
                            <span>Explore</span>
                       </div>

                    </main>
                </article>
            </>
        )
}

export default AppCard;
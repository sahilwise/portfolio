import Image from "next/image";
import Link from "next/link";
import NewCard from "./NewCard";
const AppCard = ({name, description, link})=>{
        return(
            <>
                              <section className="space-y-6">
                              <article>
                                <header>
                                <h1 className="text-xl font-medium">  My workfolio</h1>
                    
                                <div className="mt-5">
                                <span className="mr-4 bg-neutral-800 text-white px-5 py-2.5 rounded-3xl">Projects</span> <span className="mr-4"> <span onClick={()=>{location.assign('https://100daysofnextjs.com')}}>100 Days Of Nextjs</span></span>
                                </div>
                                </header>
                              </article>  

                              <div className="grid sm:grid-cols-2 gap-x-4 gap-y-4">
                              <NewCard img={'sourcecode.png'} name={"Source Code"} description={"Cool project with source code. Checkout them now."} link={"/gallery"} />
                              <NewCard img={'k99.png'} name={"Kolkata99"} description={"Explore the city of joy like never before. Download now."} link={"https://play.google.com/store/apps/details?id=com.salnet.kolkata99"} />
                              <NewCard img={'elly.png'} name={"Elly"} description={"Simplify App Sharing"} link={"https://elly.ink"} />
                              <NewCard img={'ytlink.png'} name={"Ytlink"} description={"Youtbue smart link generator."} link={"https://ytlink.ink"} />
                              <NewCard img={'localup.png'} name={"Localup"} description={"Live and work like a local with lcoalup."} link={"https://play.google.com/store/apps/details?id=com.salnet.rampurhatapp"} />
                              <NewCard img={'pop.png'} name={"Pop Street"} description={"Find the perfect space to sell scale and grow your brand."} link={"https://play.google.com/store/apps/details?id=com.salnet.kolkata99"} />
                              <NewCard img={'unipod.png'} name={"unipod"} description={"Find your perfect space on unipod."} link={"https://play.google.com/store/apps/details?id=com.salnet.kolkata99"} />
                              <NewCard img={'IGN.png'} name={"IGN"} description={"Instagram Networking Simplified"} link={"https://play.google.com/store/apps/details?id=com.salnet.kolkata99"} />
                              <NewCard img={'campface.png'} name={"Campface"} description={"Find outdoor activities on campface."} link={"https://play.google.com/store/apps/details?id=com.salnet.kolkata99"} />
                              <NewCard img={'addify.png'} name={"Addify"} description={"Networking Made Simple."} link={"https://play.google.com/store/apps/details?id=com.salnet.kolkata99"} />
                              <NewCard img={'metro.png'} name={"Kolkata Metro"} description={"Download kolkata metro app now."} link={"https://play.google.com/store/apps/details?id=com.salnet.kolkata99"} />

                              </div>

                              <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center', textAlign : 'center'}}>
                              </div>
                            </section>
            </>
        )
}

export default AppCard;
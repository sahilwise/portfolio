import Image from "next/image";

const Error = ()=>{
    return(
        <>
<div class="grid h-screen px-4 bg-[#E5E5E5] place-content-center">
  <div class="text-center">
   <Image
   src={'/error.png'}
   width={"180"}
   height={"180"}
   />

    <h1
      class=" text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"
    >
      404!
    </h1>

    <p class="mt-4 text-gray-500">Oops! Page is not there.</p>
  </div>
</div>
        </>
    )
}

export default Error;
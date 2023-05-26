const NewCard = ()=>{
        return(
            <>
 <article className="backdrop-blur-xl bg-white/75 ackdrop-brightness-150 rounded-3xl border-2 border-gray-100 bg-white">
  <div class="flex items-start">
    <a href="#" class="block shrink-0">
      <img
        alt="Speaker"
        src="/download.jpeg"
        className="sm:h-20 sm:w-20 h-16 w-16 object-cover border shadow-lg m-4 rounded-3xl border-b-4 border-l-4"
      />
    </a>

    <div className="mt-5 text-neutral-700">
      <h3 class="font-black text-xl sm:text-2xl">
        <a href="#" class="hover:underline">
          Instadate
        </a>
      </h3>

     <p className="text-xs">This is instadate</p>
    </div>
  </div>

</article>
            </>
        )
}
export default NewCard;
const NewCard = ({name, link, description, img})=>{
        return(
            <>
 <article onClick={()=>{location.assign(`${link}`)}} className="backdrop-blur-xl bg-white/75 backdrop-brightness-150 rounded-3xl bg-white">
  <div className="flex items-start">
    <a href="#" className="block shrink-0">
      <img
        alt="Speaker"
        src={`${img}`}
        className="sm:h-20 sm:w-20 h-16 w-16 object-cover border shadow-sm m-4 rounded-3xl border-neutral-900"
      />
    </a>

    <div className="mt-5 text-neutral-700">
      <h3 className="font-semibold text-lg sm:text-xl">
        <a href="#" className="hover:underline">
          {name}
        </a>
      </h3>

     <p className="text-xs">{description}</p>
    </div>
  </div>

</article>
            </>
        )
}
export default NewCard;
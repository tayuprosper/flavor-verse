const ButtonNext= ({ onclick ,label})=>{
    return (
        <button className="bg-[#b84A62] flex gap-3 items-center transition-all duration-300 hover:bg-[#b84a62ea] hover:shadow-md text-white font-bold p-3 rounded-sm text">
          { label }
          <img src="arrow.svg" alt="" className="w-7" />
        </button>
    )
}

export default ButtonNext;
const ButtonNext= ({ onclick ,label})=>{
    return (
        <button className="bg-[#b84A62] flex gap-3 items-center text-white font-bold p-3 rounded-sm text" onClick={onclick}>
          { label }
          <img src="arrow.svg" alt="" className="w-7" />
        </button>
    )
}

export default ButtonNext;
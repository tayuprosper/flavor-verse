const ButtonPrimary = ({ onclick ,label})=>{
    return (
        <button className="bg-[#b84A62] hover:shadow-2xl
         text-white font-bold
         p-3 rounded-sm text w-fit cursor-pointer"
         onClick={onclick}
         >
          { label }
        </button>
    )
}

export default ButtonPrimary;
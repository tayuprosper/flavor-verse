import { Link } from 'react-router-dom';

const ButtonSecondary = ({ label, onclick })=>{
    return (
        <button className="border-2 md:text-[#B84A62] text-white transition-all duration-300    border-white font-bold p-2 hover:shadow-md text-center rounded-sm text" onClick={onclick}>
          { label }
        </button>
    )
}

export default ButtonSecondary;
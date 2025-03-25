import { Link } from 'react-router-dom';

const ButtonSecondary = ({ to, label })=>{
    return (
        <Link to={to} className="border-2 md:text-[#B84A62] text-white transition-all duration-300    border-white font-bold p-2 hover:shadow-md text-center rounded-sm text">
          { label }
        </Link>
    )
}

export default ButtonSecondary;
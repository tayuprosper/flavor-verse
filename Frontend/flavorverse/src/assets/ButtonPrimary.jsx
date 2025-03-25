import { Link } from 'react-router-dom';

const ButtonPrimary = ({ to, label }) => {
    return (
        <Link to={to}> <button className="md:bg-[#b84A62] bg-white transition-all duration-300 md:hover:bg-[#b84a62ea] hover:bg-[#b84a6277] hover:shadow-md md:text-white text-[#b84A62] font-bold p-3 rounded-sm text-center inline-block" onClick={onclick}>
            {label}
  </button>        
</Link>
    );
};

export default ButtonPrimary;
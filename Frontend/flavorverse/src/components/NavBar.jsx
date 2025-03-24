import ButtonPrimary from "../assets/ButtonPrimary";
import ButtonSecondary from "../assets/ButtonSecondary";
import {Link} from "react-router-dom";

const NavBar = ()=>{
    return (
        <div className="navbar flex justify-between items-center my-10 mx-40">
            <div className="logo">
                <p className="font-bold text-3xl"><Link to="/">FlavorVerse</Link></p>
            </div>
            <div className="menu font-bold">
               <ul className="flex gap-5 text-xl">
                <li className="home active text-important"><Link to="/home">Home</Link></li>
                <li className="about"><Link to="/about">About</Link></li>
                <li className="contact"><Link to="/contact">Contact</Link></li>
                <li className="team"><Link to="/team">Team</Link></li>
               </ul>
            </div>
            <div className="user-avatar flex gap-5">
                <Link to="/login"><ButtonPrimary label={"Login"}/></Link>
                <Link to="/signup"><ButtonSecondary label={"Sign up"}/></Link>
            </div>
        </div>
    )
}

export default NavBar;
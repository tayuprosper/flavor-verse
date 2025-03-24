import ButtonPrimary from "../assets/ButtonPrimary";
import ButtonSecondary from "../assets/ButtonSecondary";
import {Link} from 'react-router-dom'
import { getAccessToken } from "../api/auth";
const NavBar = ()=>{
    const accessToken = getAccessToken();
    return (
        <div className="navbar flex justify-between items-center my-10 mx-40">
            <div className="logo">
               <Link to={"/"}><p className="font-bold text-3xl">FlavorVerse</p></Link> 
            </div>
            <div className="menu font-bold">
               <ul className="flex gap-5 text-xl">
                <li className="home cursor-pointer active text-important">Home</li>
                <li className="about cursor-pointer">About</li>
                <li className="contact cursor-pointer">Contact</li>
                <li className="team cursor-pointer">Team</li>
               </ul>
            </div>
            <div className="user-avatar flex gap-5">
                {
                    accessToken ? 
                    
                       <Link to={"/"}><img src="user-black.svg" alt="" className="cursor-pointer w-15 bg-white rounded-full p-3"/></Link> 
                    
                    :
                <>
                <Link to={"/login"} ><ButtonPrimary label={"Login"}/></Link>
                <Link to={"/signup"} ><ButtonSecondary label={"Sign up"}/></Link>
                </>
                   
                }
            </div>
        </div>
    )
}

export default NavBar;
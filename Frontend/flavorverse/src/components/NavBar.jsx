import ButtonPrimary from "../assets/ButtonPrimary";
import ButtonSecondary from "../assets/ButtonSecondary";

const NavBar = ()=>{
    return (
        <div className="navbar flex justify-between items-center my-10 mx-40">
            <div className="logo">
                <p className="font-bold text-3xl">FlavorVerse</p>
            </div>
            <div className="menu font-bold">
               <ul className="flex gap-5 text-xl">
                <li className="home active text-important">Home</li>
                <li className="about">About</li>
                <li className="contact">Contact</li>
                <li className="team">Team</li>
               </ul>
            </div>
            <div className="user-avatar flex gap-5">
                    <ButtonPrimary label={"Login"}/>
                    <ButtonSecondary label={"Sign up"}/>
            </div>
        </div>
    )
}

export default NavBar;
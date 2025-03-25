import { useState } from "react";
import ButtonPrimary from "../assets/ButtonPrimary";
import ButtonSecondary from "../assets/ButtonSecondary";

import { getAccessToken } from "../api/auth";
const NavBar = ()=>{
    const accessToken = getAccessToken();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar relative">
            {/* Desktop View */}
            <div className="hidden md:flex my-10 mx-40 justify-between items-center">
                <div className="logo">
                    <p className="font-bold text-3xl">FlavorVerse</p>
                </div>
                <div className="menu font-bold">
                    <ul className="flex gap-5 text-xl">
                        <li className="home active text-important hover:text-[#b84A62] cursor-pointer">
                            <a href="/">Home</a>
                        </li>
                        <li className="about hover:text-[#b84A62] cursor-pointer">
                            <a href="/about">About</a>
                        </li>
                        <li className="contact hover:text-[#b84A62] cursor-pointer">
                            <a href="/contact">Contact</a>
                        </li>
                        <li className="team hover:text-[#b84A62] transition-all duration-300 cursor-pointer">
                            <a href="/team">Team</a>
                        </li>
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

            {/* Mobile View */}
            <div className="flex justify-between my-5 mx-3 items-center md:hidden">
                <div className="logo">
                    <p className="font-bold text-2xl">FlavorVerse</p>
                </div>
                <div className="cursor-pointer" onClick={toggleMenu}>
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute h-[100vh] w-[200px] transition-all duration-300 ease-in-out bg-[#b84A62] flex flex-col p-5">
                    <div className="menu font-bold">
                        <ul className="flex flex-col gap-5 text-xl">
                            <li className="home active text-white hover:text-[#b84A62] cursor-pointer">
                                <a href="/">Home</a>
                            </li>
                            <li className="about text-white hover:text-[#b84A62] cursor-pointer">
                                <a href="/about">About</a>
                            </li>
                            <li className="contact text-white hover:text-[#b84A62]">
                                <a href="/contact">Contact</a>
                            </li>
                            <li className="team text-white hover:text-[#b84A62] transition-all duration-300">
                                <a href="/team">Team</a>
                            </li>
                        </ul>
                    </div>
                    <div className="user-avatar flex flex-col gap-5 mt-5 cursor-pointer">
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
            )}
        </div>
    );
};

export default NavBar;
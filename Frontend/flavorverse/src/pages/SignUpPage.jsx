import { useEffect, useState } from "react";
import ButtonPrimary from "../assets/ButtonPrimary"
import {validate_form_signup_form } from "../FormUtilities/validateform";
import { create_user, getAccessToken } from "../api/auth";
import { useNavigate } from "react-router-dom";

const SignUpPage = ()=>{

    const navigate = useNavigate();
    useEffect(()=>{
        const token = getAccessToken();
        if (token){
            navigate("/");
        }
    },[])
   
    const [formData ,setFormData] = useState({
        username: '',
        password1: '',
        password2: '',
    });

    const [formError, setFromError] = useState('');


    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (validate_form_signup_form(formData, setFromError)){
            const res = await create_user(formData.username, formData.password1, setFormData, setFormData);
            if (!res){
                return;
            }else{
                localStorage.setItem("accessToken", res.access_token)
                navigate("/");
            }
        }else{
            // alert("Failure");
        }
        // alert(formData.username);
    }


    const handleChange = (e)=>{
        const field_name = e.target.name;
        const field_value = e.target.value;
        setFormData({...formData, [field_name]: field_value});
    }


    return(
        <div className="sign-up-form w-screen h-screen px-40 flex-col flex justify-center items-center">
            <h1 className="text-3xl  font-bold m-4">Sign up</h1>
            <form action="#" className="flex flex-col gap-5 p-10 shadow-xl rouded-sm">
                <label htmlFor="username">Username</label>
                <input type="text" 
                name="username" 
                value={formData.username} 
                onChange={(e)=>handleChange(e)} id="name"
                className="border-2 border-gray-500 rounded-lg h-12 w-[40vw]"
                />
                <label htmlFor="password1">Enter Password</label>
                <input type="password"
                 name="password1" 
                 value={formData.password1} id="name" 
                 className="border-2 border-gray-500 rounded-lg h-12 w-[40vw]"
                 onChange={(e)=>handleChange(e)}/>
                 <label htmlFor="password2">Confirm Password</label>
                <input type="password" 
                value={formData.password2} name="password2" 
                className="border-2 border-gray-500 rounded-lg h-12 w-[40vw]"
                id="name" onChange={(e)=>handleChange(e)}/>
                <p className="text-center font-bold">OR</p>
                <div className="google-signup cursor-pointer bg-[#b84A62] pl-5 h-15 rounded-lg flex gap-3 items-center">
                    <div className="google-logo  rounded-full p-2">
                        <img src="google.svg" alt=""  className="h-10"/>
                    </div>
                    <div className="google-text text-white font-bold text-xl">
                        sign up with Google
                    </div>
                </div>
                {
                    formError && <p className="text-center font-semibold text-important">{formError}</p>
                }
                <center><ButtonPrimary label={"Register"}   onclick={(e)=>handleSubmit(e)}/></center>
                <p className="text-center">Already have an Account? <span className="font-bold text-important cursor-pointer">Log in here</span></p>
            </form>
        </div>
    )
}
export default SignUpPage;
import { useEffect, useState } from "react";
import ButtonPrimary from "../assets/ButtonPrimary"
import { validate_form_login_form } from "../FormUtilities/validateform";
import { useNavigate } from "react-router-dom";
import { login_user } from "../api/auth";
import { getAccessToken } from "../api/auth";
const LoginPage = ()=>{

    const navigate = useNavigate();

    useEffect(()=>{
        const token = getAccessToken();
                if (token){
                    navigate("/");
                }
    },[])

    const [formData ,setFormData] = useState({
        username: '',
        password: '',
    });

    const [formError, setFormError] = useState('');


    const handleSubmit = async(e)=>{
        e.preventDefault();
        if (validate_form_login_form(formData, setFormError)){
            const res = await login_user(formData.username, formData.password,setFormError);
            if (!res){
                setFormError("Invalid username or password")
                return;
            }else{
                localStorage.setItem("accessToken", res.access_token)
                navigate("/");
            }
        }else{
           return;
        }
    }


    const handleChange = (e)=>{
        const field_name = e.target.name;
        const field_value = e.target.value;
        setFormData({...formData, [field_name]: field_value});
    }


    return(
        <div className="sign-up-form w-screen h-screen px-40 flex-col flex justify-center items-center">
            <h1 className="text-3xl  font-bold m-4">Log in</h1>
            <form action="#" className="flex flex-col gap-5 p-10 shadow-xl rouded-sm">
                <label htmlFor="username">Username</label>
                <input type="text" 
                name="username" 
                value={formData.username} 
                onChange={(e)=>handleChange(e)} id="name"
                className="border-2 border-gray-500 rounded-lg h-12 w-[40vw]"
                />
                <label htmlFor="password">Enter Password</label>
                <input type="password"
                 name="password" 
                 value={formData.password} id="name" 
                 className="border-2 border-gray-500 rounded-lg h-12 w-[40vw]"
                 onChange={(e)=>handleChange(e)}/>
                <p className="text-center font-bold">OR</p>
                <div className="google-signup cursor-pointer bg-[#b84A62] pl-5 h-15 rounded-lg flex gap-3 items-center">
                    <div className="google-logo  rounded-full p-2">
                        <img src="google.svg" alt=""  className="h-10"/>
                    </div>
                    <div className="google-text text-white font-bold text-xl">
                        sign in with Google
                    </div>
                </div>
                {
                    formError && <p className="text-center font-semibold text-important">{formError}</p>
                }
                <center><ButtonPrimary label={"Log in"}   onclick={(e)=>handleSubmit(e)}/></center>
                <p className="text-center">New to flavorverse? <span className="font-bold text-important cursor-pointer">Sign up here</span></p>
            </form>
        </div>
    )
}
export default LoginPage;
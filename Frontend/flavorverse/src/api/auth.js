//all authentication is done here
const BASE_URL = "http://127.0.0.1:5005";

export const create_user = async (name, password, setFormError, setFormData)=>{
    const API_OPTIONS = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({"name": name, "password": password}),
    }
    
    const response = await fetch(`${BASE_URL}/register`,API_OPTIONS);
    if (response.status === 201){
        const data = await response.json()
        console.log(data);
        return data;
    }else{
        setFormError(await response.json())
        return null;
        
    }
   
}
export const login_user = async (name, password, setFormError)=>{
 
    const API_OPTIONS = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({"name": name, "password": password}),
    }
    
    const response = await fetch(`${BASE_URL}/login`,API_OPTIONS);
    if (response.status === 200){
        const data = await response.json()
        console.log(data);
        return data;
    }else{
        setFormError(await response.json())
        return null;
        
    }
   
}

//get access token present only for logged in users
export const getAccessToken = ()=>{
    return localStorage.getItem("accessToken");
}
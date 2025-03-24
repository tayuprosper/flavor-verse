//all authentication is done here
const BASE_URL = "http://127.0.0.1:5000";

export const create_user = async (formData, setFormError)=>{
    const json = JSON.stringify({"name": formData.username, "password": formData.password1})
    console.log(json)
    const API_OPTIONS = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({"name": formData.username, "password": formData.password1}),
    }
    
    const response = await fetch(`${BASE_URL}/register`,API_OPTIONS);
    if (response.status === 200){
        const data = await response.json()
        console.log(data);
        return data;
    }else{
        setFormError("An error occured please try again!!")
        return null;
        
    }
   
}
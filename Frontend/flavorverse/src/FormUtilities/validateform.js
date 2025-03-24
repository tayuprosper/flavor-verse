export const validate_form_signup_form = (formData, setFormError)=>{
    if (formData.username.length < 5){
        setFormError("Username can not be less than 5 characters");
        return false;
    } 
    if (formData.password1.length < 6 || formData.password2.length < 6){
        setFormError("Password must be 7 characters or more");
        return false;
    }

    if (formData.password1 != formData.password2){
        setFormError("Passwords don't match");
        return false;
    }

    setFormError('')
    return true;
}
export const validate_form_login_form = (formData, setFormError)=>{
    if (!formData.username){
        setFormError("Username field can not be empty");
        return false;
    } 
    if (!formData.password){
        setFormError("Password field can not be empty");
        return false;
    }

    

    setFormError('')
    return true;
}
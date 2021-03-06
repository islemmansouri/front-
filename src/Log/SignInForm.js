import React, { useState } from "react";
import axios from 'axios' ;



 

const SignInForm   = () => 
{
   
    const[email ,setEmail] = useState('');
    const[password ,setPassword] = useState('');
    const handleLogin = (e) =>  { 
        e.preventDefault ();
        const emailError = document.querySelector('.email.err');
        const passwordError = document.querySelector('.password.err');

        axios({
            method: "post", 
            url:`&{process.env.REACT_APP_API_URL}api/user/login`,
            withCredentials : true ,
            data : {
                email,
                password,
            },  
        })
        .then((res) => {
            console.log(res);
            if (res.data.errors){
                emailError.innerHTML = res.data.errors.email; 
                passwordError.innerHTML = res.data.errors.password; 
            } else {
                window.location = '/';
            }

        })
        .catch((err) => {
     });

    };

    return (
        <form action="" onSubmit={handleLogin} id="sign-in-form"> 
        <label htmlFor="email"> Email </label>
        <br></br>
        <input type="text" name="email" id="email" onChange={(e) => setEmail (e.target.value)} value={email}   />
        <div className="email error"> </div>
        <br></br>
        <label htmlFor="password"> Mot de passe </label>
        <br></br>
        <input type="password" name="password" id="email" onChange={(e) => setPassword (e.target.value)} value={password}   />
        <div className="password error"> </div>
        <br></br>
        <input type="submit" value="se connecter"/>
        </form>

    );
};
export default SignInForm  ; 
import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const[isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {

    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
        <Header />
        <div>
            <img  className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_small.jpg"
              alt="logo" /> 
        </div>
        <form className="w-3/12 p-12 align-middle bg-black opacity-90 absolute my-40 mx-auto right-0 left-0  text-white ">
          <h1 className="text-xl my-2 font-bold" >{isSignInForm? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && (
            <input type="text" 
            placeholder="Full Name" 
            className="p-2 my-2 w-full bg-gray-900 rounded-sm" />
          )}
          <input type="text" 
            placeholder="Email Address" 
            className="p-2 my-2 w-full bg-gray-900 rounded-sm" />
          <input type="password" 
            placeholder="Password" 
            className="p-2 my-2 w-full bg-gray-900 rounded-sm" />
          <button className="p-3 my-4 border-slate-600 b w-full bg-red-800 rounded-sm cursor-pointer">
            {isSignInForm? "Sign In" : "Sign Up"}</button>
          <p className="py-3 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm? "New To Netflix? Sign Up Now" : "Already registered? Sign In Now."}</p>
        </form>
    </div>  
  );
}

export default Login;
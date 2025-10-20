import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {

  const {createUser, setUser, updateUser} = use(AuthContext)
  const [nameError, setNameError]= useState("")

  const navigate = useNavigate();

  const haldleRegister = (event) => {


    event.preventDefault();
    // console.log(event.target);
    const name = event.target.name.value;
    if(name.length<5){
      setNameError("Name should be then 5 character")
      return;
    }
    else{
      setNameError("")
    }
    const photoURL = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUser(email, password)
    .then(result=>{
      // console.log(result.user);
      toast.success("Register Successful✅")
      updateUser({displayName:name, photoURL: photoURL}).then(()=>{
        setUser({...result.user, displayName: name, photoURL: photoURL});

        navigate('/')
      })
      .catch((error)=>{
        // console.log(error.message);
        setUser(error.message)
      })
    })
    .catch(error=>{
      // console.log(error.message);
      toast.error(error.message)
      setUser(error.message)
    })

    // console.log("Data", { name, photoURL, email, password });
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-[47px] font-bold">Register Now!</h1>
            <form onSubmit={haldleRegister}>
              <fieldset className="fieldset">
                {/* Name */}
                <label className="label">Your Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Your Name"
                  required
                />
                {
                  nameError && <p className="text-xs text-error">{nameError}</p>
                }
                {/* Photo URL */}
                <label className="label">Photo URL</label>
                <input
                  name="photo"
                  type="text"
                  className="input"
                  placeholder="Photo URL"
                />
                {/* Email */}
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  required
                />
                {/* Password */}
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
                <p className="text-center">
                  Already Have An Account ?{" "}
                  <Link
                    to="/auth/login"
                    className="text-blue-500 hover:underline"
                  >
                    Login
                  </Link>
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

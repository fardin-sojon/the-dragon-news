import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {

  const [error, setError]=useState("")

  const {signIn} = use(AuthContext)

  const location = useLocation();
  const navigate = useNavigate()
  // console.log(location);

  const haldldeLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value

    signIn(email, password)
    .then(result=>{
      // console.log(result.user);
      toast.success("Login Successfully✅")
      navigate(`${location.state? location.state : "/"}`)
    })
    .catch(error=>{
      toast.error(error.message)
      setError(error.code)
    })

    console.log({email, password});
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <form onSubmit={haldldeLogin}>
              <fieldset className="fieldset">
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
                {
                  error && <p className="text-red-500 text-xs">{error}</p>
                }
                <button className="btn btn-neutral mt-4">Login</button>
                <p className="text-center">
                  Dont’t Have An Account ?{" "}
                  <Link
                    to="/auth/register"
                    className="text-blue-500 hover:underline"
                  >
                    Register
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

export default Login;

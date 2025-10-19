import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <form>
                <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              <p className="text-center">Dont’t Have An Account ? <Link to="/auth/register" className="text-blue-500 hover:underline">Register</Link></p>
            </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

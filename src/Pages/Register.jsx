import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-[47px] font-bold">Register Now!</h1>
            <form>
              <fieldset className="fieldset">
                {/* Name */}
                <label className="label">Your Name</label>
                <input type="text" className="input" placeholder="Your Name" />
                {/* Photo URL */}
                <label className="label">Photo URL</label>
                <input type="text" className="input" placeholder="Photo URL" />
                {/* Email */}
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                {/* Password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
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

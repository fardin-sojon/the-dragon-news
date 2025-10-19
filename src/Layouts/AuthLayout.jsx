import React from "react";
import Navber from "../Components/Navber";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <div className="bg-base-200 min-h-screen">
        <header className="container mx-auto py-4">
          <Navber></Navber>
        </header>
        <main className="container mx-auto py-5">
            <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;

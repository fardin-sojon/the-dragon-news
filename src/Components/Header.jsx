import React from "react";
import logoImg from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div>
      <div className="flex justify-center flex-col items-center gap-3 mt-10">
        <img src={logoImg} alt="" />
        <p className="text-accent">Journalism Without Fear or Favour</p>
        <p className="font-semibold text-accent">
          {format(new Date(), "EEEE, MMMM MM, yyyy")}
        </p>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";

const FindUs = () => {
  return (
    <div>
      <div>
        <h3 className="font-bold mb-5">Find Us on</h3>
        <div className="join join-vertical w-full">
          <button className="btn bg-base-100 justify-start join-item hover:bg-secondary hover:text-white">
            <MdFacebook size={25}/> Facebook
          </button>
          <button className="btn bg-base-100 justify-start join-item hover:bg-secondary hover:text-white">
            <FaLinkedin size={20}/> Linkedin
          </button>
          <button className="btn bg-base-100 justify-start join-item hover:bg-secondary hover:text-white">
            <BsInstagram size={20}/> Instragram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;

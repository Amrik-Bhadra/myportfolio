import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const FooterSection = () => {
  return (
    <div className="flex items-center justify-center bg-[#161B22] shadow-md border-2 border-gray-700">
      <div className="w-[85%] py-3 flex justify-between items-center">
        <span className="flex flex-col gap-y-1">
            <h2 className="text-[#eee] font-semibold text-xl mb-2">Amrik Bhadra</h2>
            <p className="flex items-center gap-x-2 text-[#8AB4F8] text-base"> <MdEmail/> amrik.bhadra@gmail.com</p>
            <p className="flex items-center gap-x-2 text-[#8AB4F8] text-base"><FaPhoneAlt/> +91-7739226540</p>
        </span>
        
        <div className="flex gap-x-30">
          <div>
            <h4 className="text-[#8AB4F8] font-semibold mb-2 uppercase">
              About
            </h4>
            <ul className="text-sm text-[#ccc] flex flex-col gap-y-1">
              <li>
                <a href="#about">Education</a>
              </li>
              <li>
                <a href="#about">Key Skills</a>
              </li>
              <li>
                <a href="#about">Coding Profile</a>
              </li>
              <li>
                <a href="#about">Hobbies</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#8AB4F8] font-semibold mb-2 uppercase">
              Skills
            </h4>
            <ul className="text-sm text-[#ccc] flex flex-col gap-y-1">
              <li>
                <a href="#skills">Frontend</a>
              </li>
              <li>
                <a href="#skills">Backend</a>
              </li>
              <li>
                <a href="#skills">Database</a>
              </li>
              <li>
                <a href="#skills">Devops</a>
              </li>
              <li>
                <a href="#skills">Tools</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#8AB4F8] font-semibold mb-2 uppercase">
              Showcase
            </h4>
            <ul className="text-sm text-[#ccc] flex flex-col gap-y-1">
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Certificates</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#8AB4F8] font-semibold mb-2 uppercase">
              Credits
            </h4>
            <ul className="text-sm text-[#ccc] flex flex-col gap-y-1">
              <li>
                <a href="#">React Icons</a>
              </li>
              <li>
                Icon Mafia - iconscout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;

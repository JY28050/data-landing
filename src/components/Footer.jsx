import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1250px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          REACT. DATA.
        </h1>
        <p className="py-4">
          From executing day-to-day tactics, to building long-term digital
          strategies, all your decisions can now be driven by the most important
          data there is - reality.
        </p>
        <div className="flex justify-between md:w-[40%] my-4 ">
          <FaFacebookSquare
            size={30}
            className="hover:text-violet-600 cursor-pointer"
          />
          <FaInstagram
            size={30}
            className="hover:text-violet-600 cursor-pointer"
          />
          <FaTwitterSquare
            size={30}
            className="hover:text-violet-600 cursor-pointer"
          />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-300 text-xl">Solutions</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:text-violet-600">
              Analytics
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-violet-600">
              Marketing
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-violet-600">
              Commerce
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-violet-600">
              Insights
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-300 text-xl">Support</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:text-violet-600">
              Pricing
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-violet-600">
              Documentation
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-violet-600">
              API Status
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-300 text-xl">Company</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:text-violet-600">
              About
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-violet-600">
              Jobs
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-violet-600">
              Press
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-violet-600">
              Careers
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-300 text-xl hover:text-violet-600">
            Legal
          </h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:text-violet-600">
              Claim
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-violet-600">
              Policy
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-violet-600">
              Terms
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

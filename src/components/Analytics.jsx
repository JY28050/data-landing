import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[520px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-3xl font-bold py-2">
            Manage Data Centrally
          </h1>
          <p className="text-lg mt-2">
            Access behind-the-scenes analytics for every site online. With the
            React Data Analytics browser extension, you will have easy access to
            objective traffic data and other insights. Reflecting over 10 years
            of investment, We are the definitive measure of the digital world --
            and is relied on daily by leaders like Google, Amazon, and
            Microsoft.
          </p>
          <button className="bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-violet-600 text-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

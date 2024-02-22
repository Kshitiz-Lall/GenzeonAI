import React from "react";
import ModuleCard from "./ModuleCard";
import image from "../assets/image.png";
import clinicalLogo from "../assets/HIP Clinical Module Coloured.svg";
import connectLogo from "../assets/HIP Connect Module Coloured.svg";
import financeLogo from "../assets/HIP Finance Module Coloured.svg";
import operationLogo from "../assets/HIP Operations Coloured.svg";

export const Service = () => {
  const modules = [
    {
      id: 1,
      title: "module one",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      image: image,
      badgeTitles: ["title1", "title2"],
      colors: ["bg-purple-500", "bg-blue-500"],
    },
    {
      id: 2,
      title: "module two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      image: image,
      badgeTitles: ["title3", "title4"],
      colors: ["bg-green-500", "bg-yellow-500"],
    },
    {
      id: 3,
      title: "module three",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      image: image,
      badgeTitles: ["title5", "title6", "title6", "title6"],
      colors: ["bg-red-500", "bg-indigo-500", "bg-indigo-500", "bg-indigo-500"],
    },
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto h-screen" id="service">
      {/* <div className="text-center my-8">
        <h2 className="text-4xl text-fadeGrey font-semibold mb-2">
          About Service text
        </h2>
        <p className="text-neutralGrey">We have been working</p>
        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img src={clinicalLogo} alt="" className="w-16" />
          <img src={connectLogo} alt="" className="w-16" />
          <img src={operationLogo} alt="" className="w-16" />
          <img src={financeLogo} alt="" className="w-16" />
        </div>
      </div> */}

      {/* Service Cards */}
      <div className="mt-20 md:w-1/2 mx-auto text-center ">
        <h2 className="text-4xl text-fadeGrey font-semibold mb-3">
          Some Text about reliability
        </h2>
        <p className="text-neutralGrey mb-10">
          Some text for describing reliability
        </p>
      </div>

      {/* Module Cards */}
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {modules.map((module) => (
          <ModuleCard
            key={module.id}
            title={module.title}
            description={module.description}
            image={module.image}
            badgeTitles={module.badgeTitles} // Pass badge titles as a prop
            colors={module.colors} // Pass colors as a prop
          />
        ))}
      </div>
    </div>
  );
};

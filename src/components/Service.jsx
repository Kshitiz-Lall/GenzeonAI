import React from "react";
import image from "../assets/image.png";

export const Service = () => {
  const modules = [
    {
      id: 1,
      title: "module one",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      image: "/src/assets/image.png",
    },
    {
      id: 2,
      title: "module two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      image: "/src/assets/image.png",
    },
    {
      id: 3,
      title: "module three",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      image: "/src/assets/image.png",
    },
    {
      id: 4,
      title: "module four",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      image: "/src/assets/image.png",
    },
    {
      id: 5,
      title: "module five",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      image: "/src/assets/image.png",
    },
    {
      id: 6,
      title: "module six",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      image: "/src/assets/image.png",
    },
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
      <div className="text-center my-8">
        <h2 className="text-4xl text-fadeGrey font-semibold mb-2">
          About Service text
        </h2>
        <p className="text-neutralGrey">We have been working</p>
        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img src={image} alt="" className="w-16" />
          <img src={image} alt="" className="w-16" />
          <img src={image} alt="" className="w-16" />
          <img src={image} alt="" className="w-16" />
        </div>
      </div>

      {/* Service Cards */}
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-fadeGrey font-semibold mb-3">
          Some Text about reliability
        </h2>
        <p className="text-neutralGrey mb-10">
          Some text for describing reliability
        </p>
      </div>

      {/* Module Cards */}
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {modules.map((modules) => (
          <div
            key={modules.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-6 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex-col items-center justify-center h-full"
          >
            <div className="bg-[#E8F5E9] h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
              <img src={modules.image} alt="" className="w-14 -ml-5" />
            </div>
            <h4 className="text-2xl font-bold text-neutralGrey mb-2 px-2">
              {modules.title}
            </h4>
            <p className="text-sm text-neutralGray">{modules.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

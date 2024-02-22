import React from "react";
import ModuleCard from "../ModuleCard";
import FAQ from "../FAQ";

export const BiomedicalNLP = () => {
  const modules = [
    {
      id: 1,
      title: "module one",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      badgeTitles: ["title1", "title2"],
      colors: ["bg-purple-500", "bg-blue-500"],
    },
    {
      id: 2,
      title: "module two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      badgeTitles: ["title3", "title4"],
      colors: ["bg-green-500", "bg-yellow-500"],
    },
    {
      id: 3,
      title: "module three",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      badgeTitles: ["title5", "title6", "title6", "title6"],
      colors: ["bg-red-500", "bg-indigo-500", "bg-indigo-500", "bg-indigo-500"],
    },
    {
      id: 4,
      title: "module one",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      badgeTitles: ["title1", "title2"],
      colors: ["bg-purple-500", "bg-blue-500"],
    },
    {
      id: 5,
      title: "module two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      badgeTitles: ["title3", "title4"],
      colors: ["bg-green-500", "bg-yellow-500"],
    },
    {
      id: 6,
      title: "module three",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      badgeTitles: ["title5", "title6", "title6", "title6"],
      colors: ["bg-red-500", "bg-indigo-500", "bg-indigo-500", "bg-indigo-500"],
    },
  ];

  return (
    <>
      <div className="mx-auto text-center">
        <div className="mt-20 w-screen mx-auto min-h-screen h-screen flex flex-col ">
          <div className="bg-BiomedicalnlpColor text-white py-20 sm:py-40 md:py-60 flex flex-col justify-center items-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Biomedical Natural Language Processing (NLP)
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-screen-md">
              Cutting-Edge Models for Grasping Biomedical Research, Clinical
              Trial Protocols, Patent Documentation, Grant Applications, and
              Regulatory Filings
            </p>
          </div>

          <div className=" mt-5 mb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {modules.map((module) => (
              <div key={module.id}>
                <ModuleCard
                  title={module.title}
                  description={module.description}
                  badgeTitles={module.badgeTitles} // Pass badge titles as a prop
                  colors={module.colors} // Pass colors as a prop
                />
              </div>
            ))}
          </div>
          <div className="px-4 lg:px-14 w-screen mx-auto bg-fadeSilver py-16">
            <p className="text-sm text-neutralGrey mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </p>
          </div>
          <div className="px-4 lg:px-14 w-screen mx-auto bg-fadeSilver py-16">
            {/* <FAQ /> */}
          </div>
        </div>
      </div>
    </>
  );
};
